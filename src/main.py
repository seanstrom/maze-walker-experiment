from dataclasses import dataclass
from typing import Any, Dict, List, Tuple
from ffi.js import Graph, Html, Hyper, document, window, asdict


# Data Structures


@dataclass
class SearchNode:
    """
    The SearchNode class is responsible for storing:
        * an ID to a graph node
        * the kind of graph node ("open", "wall", "start", "finish")
        * the position of the graph node in the maze layout
        * the direction to reach this search node ("up", "down", "left", "right")
        * the parent or previous search node that led to this search node

    A SearchNode is used along with search strategy like:
        * SearchStack
        * SearchQueue,
        * SearchGreedy
        * SearchStar
    """
    id: str = None
    kind: str = None
    direction: str = None
    parent: object = None
    position: Tuple[Any, Any] = None


class SearchQueue():
    """
    The SearchQueue is responsible for:
        * storing and accessing SearchNodes in a FIFO structure

    SearchQueue is used during a Breadth-First-Search (BFS) strategy
    """
    def __init__(self):
        self.search = []
        self.count = -1

    def empty(self):
        return len(self.search) == 0

    def add(self, node):
        self.search.append(node)

    def remove(self):
        if not self.empty():
            return self.search.pop(0)


class SearchStack(SearchQueue):
    """
    The SearchStack is responsible for:
        * storing and accessing SearchNodes in a LIFO structure

    SearchQueue is used during a Depth-First-Search (DFS) strategy
    """
    def remove(self):
        if not self.empty():
            return self.search.pop()


class SearchGreedy(SearchQueue):
    """
    The SearchGreedy is responsible for:
        * storing, accessing, and sorting SearchNodes in a sorted structure based on:
            * estimated distance from a SearchNode towards the goal (heuristic)

    SearchGreedy is used during a Greed-Best-First-Search (GBFS) strategy
    """
    def __init__(self, target_pos):
        super().__init__()
        self.target_pos = target_pos

    def distance(self, node):
        (node_x, node_y) = node.position
        (target_x, target_y) = self.target_pos
        x_distance = abs(target_x - node_x)
        y_distance = abs(target_y - node_y)
        return x_distance + y_distance

    def compare(self, node_a, node_b):
        node_a_distance = self.distance(node_a)
        node_b_distance = self.distance(node_b)
        if node_a_distance < node_b_distance:
            return -1
        elif node_a_distance > node_b_distance:
            return 1
        else:
            return 0

    def add(self, node):
        self.search.append(node)
        # use the "javascript sort" function to sort the array
        self.search.js_sort(self.compare)


class SearchStar(SearchGreedy):
    """
    The SearchStar is responsible for:
        * storing, accessing, and sorting SearchNodes in a sorted structure based on:
            * estimated distance from a SearchNode towards the goal (heuristic)
            * and the steps taken from origin to the SearchNode (cost)

    SearchStar is used during an A-Star Search (A*) strategy
    """
    def cost(self, node):
        count = 0
        while node.parent is not None:
            count += 1
            node = node.parent
        return count

    def compare(self, node_a, node_b):
        node_a_cost = self.cost(node_a)
        node_b_cost = self.cost(node_b)
        node_a_distance = self.distance(node_a)
        node_b_distance = self.distance(node_b)
        node_a_value = node_a_distance + node_a_cost
        node_b_value = node_b_distance + node_b_cost

        if node_a_value < node_b_value:
            return -1
        elif node_a_value > node_b_value:
            return 1
        elif node_a_distance < node_b_distance:
            return -1
        elif node_a_distance > node_b_distance:
            return 1
        else:
            return 0


@dataclass
class State:
    """
    The State class is responsible for storing:
        * a graph of the nodes and edges based on a maze layout
        * the status of the maze path searching ("searching", "found", "missing")
        * an instance of a SearchStack or SearchQueue
        * the positions of the start and finish spaces in the maze
        * the layout of the maze in rows and cells
        * a dict of all the spaces involved in the successful path
        * a dict of all the spaces that have been visited during the search
        * the current search node for the next step searching through the maze
    """
    graph: Any = None
    status: str = None
    search: Any = None
    maze_id: str = None,
    strategy: str = None,
    playing: bool = False
    path: dict[str, bool] = None
    layout: List[List[Any]] = None
    markers: tuple[Any, Any] = None
    visited: Dict[str, bool] = None
    current_node: SearchNode = None


@dataclass
class NextStep:
    """
    This is a placeholder class for creating a named action.
    It will be used later on in the "update" section of the code.
    """
    pass


@dataclass
class Play:
    """
    Wip
    """
    pass


@dataclass
class Pause:
    """
    Wip
    """
    pass


@dataclass
class Reset:
    pass


@dataclass
class ChangeMaze:
    maze_id: str = None


@dataclass
class ChangeStrategy:
    strategy_id: str = None


# Helpers


bfs_maze_id = "bfs-maze"
dfs_maze_id = "dfs-maze"
bfs_strategy_id = "bfs-strategy"
dfs_strategy_id = "dfs-strategy"
greedy_strategy_id = "greedy-strategy"
astar_strategy_id = "astar-strategy"


opposite_directions = dict(
    up="down",
    down="up",
    left="right",
    right="left")


def make_id(cell_index, row_index):
    """
    Creates a string ID based on the X & Y positions in the maze
    """
    return f"{(cell_index, row_index)}"


def add_node(graph, node_id, options):
    """
    Safely adds a node to a graph by checking if the node already exists
    """
    if not graph.hasNode(node_id):
        graph.addNode(node_id, options)


def add_edge(graph, from_node_id, to_node_id, options):
    """
    Safely adds an edge to a graph by checking if the edge already exists
    """
    if not graph.hasEdge(from_node_id, to_node_id):
        graph.addEdge(from_node_id, to_node_id, options)


# Initial State


def find_markers(maze_layout):
    """
    Searches the maze layout (rows and cells) for the starting and finishing positions.

    These are used later for:
        * converting the maze into a graph
        * determining when the search is successful by reaching the goal
    """
    start_marker = (None, None)
    finish_marker = (None, None)

    for row_index, row in enumerate(maze_layout):
        for cell_index, cell in enumerate(row):
            kind = cell["kind"]
            if kind == "start":
                start_marker = (cell_index, row_index)
            if kind == "finish":
                finish_marker = (cell_index, row_index)

    return (start_marker, finish_marker)


def is_open_space(cell):
    """
    Checks if a maze cell is a valid open space (or not a wall).
    """
    kind = cell["kind"]
    statuses = ["open", "start", "finish"]
    return kind in statuses


def detect_neighbors(rows, node_pos):
    """
    * Used to detect neighboring ("up", "down", "left", "right") spaces of a maze cell
    * Returns a list of tuples with a neighbor's direction and maze position
    """
    neighbors = []
    (x, y) = node_pos

    row = rows[y]
    cells_total = len(row)
    rows_total = len(rows)

    candidates = [
        ((x, y + 1), "down"),
        ((x + 1, y), "right"),
        ((x - 1, y), "left"),
        ((x, y - 1), "up"),
    ]

    for (pos, direction) in candidates:
        _x, _y = pos
        if 0 <= _x < cells_total and 0 <= _y < rows_total:
            cell = rows[_y][_x]
            if is_open_space(cell):
                neighbors.append((direction, pos))

    return neighbors


def build_graph_helper(graph, layout, node_pos):
    """
    Responsible for
        * recursively walking a maze of cells by their neighbor cells
        * building a graph of nodes and edges between neighboring cells
        * storing context about the position of the node in the maze
        * storing context about the direction of the edges between the cells
    """
    node_id = make_id(*node_pos)
    neighbors = detect_neighbors(layout, node_pos)

    add_node(graph, node_id, dict(position=node_pos))

    for (direction, neighbor_pos) in neighbors:
        neighbor_id = make_id(*neighbor_pos)
        if graph.hasNode(neighbor_id):
            add_edge(graph, node_id, neighbor_id, dict(direction=direction))
            add_edge(graph, neighbor_id, node_id, dict(direction=opposite_directions[direction]))

    for (_, next_pos) in neighbors:
        next_id = make_id(*next_pos)
        if not graph.hasNode(next_id):
            build_graph_helper(graph, layout, next_pos)


def build_graph(maze_layout, start_pos):
    """
    Builds a graph from a maze layout based on the starting position
    """
    graph = Graph()
    build_graph_helper(graph, maze_layout, start_pos)
    return graph


def init(maze_id, strategy_id):
    """
    Initializes the state of the program based on a maze layout
    """
    maze_layout = window.mazes[maze_id]["rows"]
    markers = find_markers(maze_layout)
    (start_pos, finish_pos) = markers

    start_id = make_id(*start_pos)
    maze_graph = build_graph(maze_layout, start_pos)
    search_node = SearchNode(id=start_id)

    def match_strategy(strategy):
        if strategy == bfs_strategy_id:
            return SearchQueue()
        elif strategy == dfs_strategy_id:
            return SearchStack()
        elif strategy == greedy_strategy_id:
            return SearchGreedy(finish_pos)
        elif strategy == astar_strategy_id:
            return SearchStar(finish_pos)

    search_strategy = match_strategy(strategy_id)

    def to_state():
        return State(
            playing=False,
            status="searching",
            strategy=strategy_id,
            maze_id=maze_id,
            path=dict(),
            visited=dict(),
            markers=markers,
            graph=maze_graph,
            layout=maze_layout,
            search=search_strategy,
            current_node=search_node)

    return to_state


# Update


def next_step(state: State) -> State:
    """
    Responsible for:
        * collecting the neighbors of the current maze cell (SearchNode)
        * adding unvisited maze cells to the search strategy
        * marking traversed maze cells as visited
        * determining if the search solution:
            * has succeeded and is "found"
            * has failed and is "missing"
            * or is in progress and is "searching"
        * tagging all the maze cells involved in the solution path
        * returning a new state of the program to visualize
    """
    if state.status == "found": return state
    if state.status == "missing": return state

    (_, finish_pos) = state.markers
    target_id = make_id(*finish_pos)
    neighbors = state.graph.neighbors(state.current_node.id)

    for neighbor_id in neighbors:
        edge = state.graph.edge(state.current_node.id, neighbor_id)
        position = state.graph.getNodeAttribute(neighbor_id, 'position')
        direction = state.graph.getEdgeAttribute(edge, 'direction')

        if not state.visited[neighbor_id]:
            state.search.add(
                SearchNode(
                    id=neighbor_id,
                    parent=state.current_node,
                    position=position,
                    direction=direction))

    if not state.visited[state.current_node.id]:
        state.visited[state.current_node.id] = True

    next_node = state.search.remove() if not state.search.empty() else state.current_node

    def match_node(node):
        if node.id == target_id:
            return "found"
        elif node.id == state.current_node.id:
            return "missing"
        else:
            return "searching"

    next_status = match_node(next_node)

    def match_status(status):
        if status == "found":
            path = []
            node = next_node

            while node is not None:
                path.append(node)
                node = node.parent

            for piece in path:
                state.path[piece.id] = True

        return state.path

    next_path = match_status(next_status)
    next_state = State(**asdict(state))

    next_state.path = next_path
    next_state.status = next_status
    next_state.current_node = next_node

    return next_state


def play(state):
    def play_action(current_state):
        if current_state.playing:
            return action(Play())(current_state)
        else:
            return lambda: current_state

    def task(dispatch):
        window.setTimeout(lambda: dispatch(play_action), 1000)

    next_state = update(state, NextStep())
    playing_state = State(**asdict(next_state))
    playing_state.playing = True

    return [playing_state, task]


def pause(prev_state):
    def pause_action(state):
        next_state = State(**asdict(state))
        next_state.playing = False
        return next_state

    return [prev_state, lambda dispatch: dispatch(pause_action)]


def reset(state: State) -> State:
    return init(state.maze_id, state.strategy)()


def change_maze(state: State, msg: ChangeMaze) -> State:
    return init(msg.maze_id, state.strategy)()


def change_strategy(state: State, msg: ChangeStrategy) -> State:
    return init(state.maze_id, msg.strategy_id)()


def update(state, msg):
    """
    Responsible for:
        * transitioning the program's state machine based on the interactions in the program
    """
    if type(msg) is NextStep:
        return next_step(state)
    if type(msg) is Play:
        return play(state)
    if type(msg) is Pause:
        return pause(state)
    if type(msg) is Reset:
        return reset(state)
    if type(msg) is ChangeMaze:
        return change_maze(state, msg)
    if type(msg) is ChangeStrategy:
        return change_strategy(state, msg)

    return state


def action(msg):
    """
    Returns a function that will update the program state when called
    """
    return lambda state: update(state, msg)


# Views


def view_cell(state, row_index, cell_index, cell):
    """
    * visualizes a single cell of the maze
    * visualizes the current cell of the maze with a "X" marker
    * creates an HTML view with CSS class names for coloring the cell
        * "cell" for marking it has a maze cell
        * "path" if it is a piece of the solution
        * "current" if it is the current node of the search
        * "visited" if it has already been visited by the search
    """
    kind = cell["kind"]
    cell_id = make_id(cell_index, row_index)
    current_id = state.current_node.id

    path = "path" if state.path[cell_id] else ""
    marker = "X" if cell_id == current_id else ""
    current = "current" if cell_id == current_id else ""
    visited = "visited" if state.visited[cell_id] else ""
    class_names = ' '.join(["cell", visited, path, current, kind])

    return Html.div({"class": class_names}, [
        Html.p({}, [
            Html.text(marker)
        ])
    ])


def view_row(state, row_index, row):
    """
    Iterates through all the cells in a row and visualizes each cell.
    """
    return Html.div({"class": "row"}, [
        view_cell(state, row_index, cell_index, cell) for cell_index, cell in enumerate(row)
    ])


def view(state: State):
    """
    Visualizes the entire program state as maze of cells with controls to traverse the maze
    """
    return Html.div({"class": "container"}, [
        Html.div({"class": "layout"}, [
            Html.div({"class": "frame"}, [
                Html.div({"class": "maze"}, [
                    view_row(state, row_index, row) for row_index, row in enumerate(state.layout)
                ])
            ]),
            Html.div({"class": "controls"}, [
                Html.button({
                    "onclick": action(Pause()) if state.playing else action(Play())
                }, [
                    Html.text("Pause" if state.playing else "Play")
                ]),
                Html.button({
                    "onclick": action(NextStep())
                }, [
                    Html.text("Next")
                ]),
                Html.button({
                    "onclick": action(Reset())
                }, [
                    Html.text("Reset")
                ]),

                Html.div({}, [
                    Html.input({
                        "id": bfs_strategy_id,
                        "type": "radio",
                        "name": "strategy",
                        "checked": state.strategy == bfs_strategy_id,
                        "onchange": action(ChangeStrategy(bfs_strategy_id))
                    }, []),

                    Html.label({"for": bfs_strategy_id}, [
                        Html.text("BFS")
                    ])
                ]),

                Html.div({}, [
                    Html.input({
                        "id": dfs_strategy_id,
                        "type": "radio",
                        "name": "strategy",
                        "checked": state.strategy == dfs_strategy_id,
                        "onchange": action(ChangeStrategy(dfs_strategy_id))
                    }, []),

                    Html.label({"for": dfs_strategy_id}, [
                        Html.text("DFS")
                    ])
                ]),

                Html.div({}, [
                    Html.input({
                        "id": greedy_strategy_id,
                        "type": "radio",
                        "name": "strategy",
                        "checked": state.strategy == greedy_strategy_id,
                        "onchange": action(ChangeStrategy(greedy_strategy_id))
                    }, []),

                    Html.label({"for": greedy_strategy_id}, [
                        Html.text("GBFS")
                    ])
                ]),

                Html.div({}, [
                    Html.input({
                        "id": astar_strategy_id,
                        "type": "radio",
                        "name": "strategy",
                        "checked": state.strategy == astar_strategy_id,
                        "onchange": action(ChangeStrategy(astar_strategy_id))
                    }, []),

                    Html.label({"for": astar_strategy_id}, [
                        Html.text("A-Star")
                    ])
                ]),

                Html.div({}, [
                    Html.input({
                        "id": bfs_maze_id,
                        "type": "radio",
                        "name": "maze",
                        "checked": state.maze_id == bfs_maze_id,
                        "onchange": action(ChangeMaze(bfs_maze_id))
                    }, []),

                    Html.label({"for": bfs_maze_id}, [
                        Html.text("Small Maze")
                    ])
                ]),

                Html.div({}, [
                    Html.input({
                        "id": dfs_maze_id,
                        "type": "radio",
                        "name": "maze",
                        "checked": state.maze_id == dfs_maze_id,
                        "onchange": action(ChangeMaze(dfs_maze_id))
                    }, []),

                    Html.label({"for": dfs_maze_id}, [
                        Html.text("Large Maze")
                    ])
                ]),
            ])
        ])
    ])


# Main

def main():
    """
    * Initializes the search of the maze
    * Visualizes a maze of cells
    """
    element = document.getElementById("root")
    Hyper.app(node=element, view=view, init=init(dfs_maze_id, bfs_strategy_id))

