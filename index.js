// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
const message = 'birthday';
const list = ["Charlie", "Samip", "Ali"];

function writeCards(list, message) {

    const thankYou = [];

    for (let i = 0; i < list.length; i++) {

        thankYou[i] = `Thank you, ${list[i]}, for the wonderful ${message} gift!`;

    } 

    return thankYou;
}

let i = 10;

function countDown(i) {
    while (i > -1) {
        console.log(i);
        i--;
    }
}