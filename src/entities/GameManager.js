import deck from '../lib/deck'
import utils from '../lib/utils'

import Card from './Card'
import Player from './Player'

class GameManager {
    constructor() {
        this.deck = []
        this.player01 = new Player()
        this.player02 = new Player() 
        this.isPlaying = false
        this.exposedCount = 0
        this.card01 = null
        this.card02 = null           
    }

    startGame() {
        // Generate deck with two cards for each value
        this.deck = deck.createDeck(16)
        // Shuffle deck cards
        this.deck = utils.shuffle(this.deck)
        // Asignarle posicion a cada carta
        this.deck = deck.positionateCards(this.deck)
        // pedir los nombres de los players
    }

}

export default GameManager
