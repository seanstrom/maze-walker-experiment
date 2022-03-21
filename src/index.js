import { main } from './main.py'
import dfsLayout from './mazes/dfs-0.json'
import bfsLayout from './mazes/bfs-0.json'
import './index.scss'


window.mazes = { "bfs-maze": bfsLayout, "dfs-maze": dfsLayout }
main()
