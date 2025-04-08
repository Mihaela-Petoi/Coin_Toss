let totalFlips = 0;
let headsTot = 0;
let tailsTot = 0;

const totaalFLIPS = document.getElementById('flipCount');
const outputResult = document.getElementById('result');
const flipButton = document.getElementById('click');
const coinImg = document.getElementById('coin-image');
const headsCounter = document.getElementById('headsCount');
const tailsCounter = document.getElementById('tailsCount');
const coinGif = "https://media.giphy.com/media/PcRAqwf1vpHDD9JjNy/giphy.gif?cid=ecf05e470f2heaouonweuxmc1ctwg88uut6jcvoz8f9vg91h&ep=v1_gifs_search&rid=giphy.gif&ct=g";
const HGif = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmFuejhkcDZnYWVmdnBneWZ2cWF2NDNsYzU2cnIzeGNseTd0M3VuOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/51txlWpb2ncmjFVNlT/giphy.gif";
const TGif = "https://media.giphy.com/media/yrNwyjl5TSI54AHxdY/giphy.gif?cid=790b76114w9f9p4fl1g3arooqec8k10rjvfjdo2aj64nd5sz&ep=v1_gifs_search&rid=giphy.gif&ct=g";

function flipCoin() {
    const randomNumber = Math.random();
    const result = Math.floor(randomNumber * 2);
    return result === 0 ? "Heads" : "Tails";
}

function clickButton() {
    flipButton.disabled = true;
    flipButton.textContent = "FLIPPING...";

    setTimeout(() => {
        const flipResult = flipCoin();
        outputResult.textContent = flipResult;

        if (flipResult === "Heads") {
            coinImg.src = HGif;
            headsTot++;
            headsCounter.textContent = headsTot;
        } else {
            coinImg.src = TGif;
            tailsTot++;
            tailsCounter.textContent = tailsTot;
        }

        totalFlips++;
        totaalFLIPS.textContent = totalFlips;
        flipButton.textContent = "ACTIVATE FLIP";
        flipButton.disabled = false;
    }, 2000);
}

flipButton.addEventListener('click', clickButton);