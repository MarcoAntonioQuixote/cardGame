let game;
class Deck {
    constructor() {
        this.cards = [];
        this.makeDeck();
    }

    makeDeck() {
        let suits = ['❤️','💎','🔥','⚡'];
        let faces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

        for (let suit of suits) {
            for (let x = 0; x < faces.length; x++) {
                let face = faces[x];
                this.cards.push(new Card(suit,face,face+2))
            }
        }

        for (var i = this.cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
    }
    
}

class Card {
    constructor(suit,face,value) {
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}

const start = document.getElementById('start');

start.addEventListener('click', () => {
    startGame();
});

function startGame() {
    game = new Deck();
    let deck = game.cards;
    let gameBoard = document.createElement('div');

    for (let cardObj of deck) {
        let card = document.createElement('div');
        let face = document.createElement('h2');

        face.innerText = `${cardObj.face} ${cardObj.suit}`;
        card.setAttribute('class','card');
        card.addEventListener('click', () => {
            gameRound(cardObj);
        })
        card.append(face);
        gameBoard.append(card);
    }

    gameBoard.setAttribute('class','board');
    document.body.append(gameBoard);
}

function gameRound(card) {
    console.log(`You clicked on the ${card.face} of ${card.suit}`)
}

