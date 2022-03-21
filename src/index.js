import { main } from './main.py'
import smallMaze from './mazes/small.json'
import largeMaze from './mazes/large.json'
import trickyMaze from './mazes/tricky.json'
import './index.scss'


window.mazes = { small: smallMaze, large: largeMaze, tricky: trickyMaze }
main()
