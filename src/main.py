from dataclasses import dataclass
from typing import Any, Dict, List
from ffi.js import Graph, Html, Hyper, document, window, asdict


# Data Structures


@dataclass
class SearchNode:
    """
    The SearchNode class is responsible for storing:
        * an ID to a graph node
        * the kind of graph node ("open", "wall", "start", "finish")
        * the action to reach this search node ("up", "down", "left", "right")
        * the parent or previous search node that led to this search node

    A SearchNode is used along with a SearchStack or SearchQueue
    """
    id: str = None
    kind: str = None
    action: str = None
    parent: object = None


class SearchQueue():
    """
    The SearchQueue is responsible for:
        * storing and accessing SearchNodes in a FIFO structure

    A SearchQueue is used during a BFS strategy
    """
    def __init__(self):
        self.search = []

    def add(self, node):
        self.search.append(node)

    def empty(self):
        return len(self.search) == 0

    def remove(self):
        if self.empty():
            return None
        else:
            node = self.search[0]
            self.search = self.search[1:]
            return node


class SearchStack(SearchQueue):
    """
    The SearchStack is responsible for:
        * storing and accessing SearchNodes in a LIFO structure

    A SearchQueue is used during a DFS strategy
    """
    def remove(self):
        if self.empty():
            return None
        else:
            last_index = len(self.search) - 1
            node = self.search[last_index]
            self.search = self.search[:-1]
            return node


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


# Helpers


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
        ((x, y - 1), "up"),
        ((x + 1, y), "right"),
        ((x, y + 1), "down"),
        ((x - 1, y), "left"),
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
        * storing context about the direction of the edges between the cells
    """
    node_id = make_id(*node_pos)
    neighbors = detect_neighbors(layout, node_pos)

    add_node(graph, node_id, None)

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


def init(maze_layout):
    """
    Initializes the state of the program based on a maze layout
    """
    markers = find_markers(maze_layout)
    (start_pos, _) = markers
    start_id = make_id(*start_pos)

    maze_graph = build_graph(maze_layout, start_pos)
    search_node = SearchNode(id=start_id)
    search_strategy = SearchStack()

    def to_state():
        return State(
            playing=False,
            status="searching",
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
        direction = state.graph.getEdgeAttribute(edge, 'direction')

        if not state.visited[neighbor_id]:
            state.search.add(
                SearchNode(
                    id=neighbor_id,
                    parent=state.current_node,
                    action=direction))

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
                ])
            ])
        ])
    ])


# Main

def main():
    """
    * Initializes the search of the maze
    * Visualizes a maze of cells
    """
    maze_layout = window.mazes["rows"]
    element = document.getElementById("root")
    Hyper.app(node=element, view=view, init=init(maze_layout))

