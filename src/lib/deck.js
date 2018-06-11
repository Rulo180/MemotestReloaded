import Card from '../entities/Card'

const values = ['as', 'one', 'two', 'three', 'four', 'five', 'six', 'seven']
const NUMBER_OF_ROW = 4
const NUMBER_OF_COLS = 4

const deck = {
    createDeck(numberOfCards) {
        let result = []
        for(let j=0; j<values.length; j++) {
            result.push(new Card(values[j]))
            result.push(new Card(values[j]))
        }
        return result
    },

    positionateCards(cards) {
        for(let i=0; i<cards.length; i++) {
            cards[i].x =  i % NUMBER_OF_COLS
            cards[i].y = Math.floor(i / NUMBER_OF_ROW)
        }
        return cards
    }
}

module.exports = deck
