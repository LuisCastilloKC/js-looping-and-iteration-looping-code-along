// Code your solutions in this file


function writeCards(cards, event) {
    const cardNameArr = []
    for (let i = 0; i < cards.length; i++) {
        cardNameArr[i] = (`Thank you, ${cards[i]}, for the wonderful ${event} gift!`)
    }
    return cardNameArr;
}

let number = 10

function countDown(number) {
    while (number >= 0){
        console.log(number--);
    }
}