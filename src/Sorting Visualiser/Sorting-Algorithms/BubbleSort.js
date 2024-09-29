import * as helpers from "./helpers";

let SPEED;

const SECONDARY_COLOR = "#ffb703";
const SWAP_COLOR = "#cca8e9";
const EQUALITY_COLOR = "rgb(138, 201, 38)";

async function bubble() {
    const array = document.getElementsByClassName("array-bar");
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            array[j].style.background = SECONDARY_COLOR;
            array[j + 1].style.background = SECONDARY_COLOR;

            if (
                parseInt(array[j].style.height) > parseInt(array[j + 1].style.height)
            ) {
                await helpers.sleep(SPEED);
                helpers.swap(array[j], array[j + 1]);
            }

            array[j].style.background = SWAP_COLOR;
            array[j + 1].style.background = SWAP_COLOR;
        }
        array[array.length - 1 - i].style.background = EQUALITY_COLOR;
    }
    array[0].style.background = EQUALITY_COLOR;
}

export default async function getBubbleSort(ANIMATION_SPEED) {
    SPEED = ANIMATION_SPEED;
   bubble();
}
