import { context } from './canvas'
import Main from './main'
import GameManager from './entities/GameManager'

Main.initGame()
const newGM = new GameManager()

newGM.startGame()

context.fillStyle = 'red'
context.fillRect(50,50, 50, 50)
