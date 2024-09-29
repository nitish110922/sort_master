import * as helpers from "./helpers";

let SPEED;


const EQUALITY_COLOR = "rgb(138, 201, 38)";
const INSERTION_COLOR = "#ff595e";

async function insertion() {
    const array = document.getElementsByClassName("array-bar");
    // color
    array[0].style.background = EQUALITY_COLOR;
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        let key = array[i].style.height;
        // color
        array[i].style.background = INSERTION_COLOR;

        await helpers.sleep(SPEED);

        while (j >= 0 && parseInt(array[j].style.height) > parseInt(key)) {
            // color
            array[j].style.background = INSERTION_COLOR;
            array[j + 1].style.height = array[j].style.height;
            j--;

            await helpers.sleep(SPEED);

            // color
            for (let k = i; k >= 0; k--) {
                array[k].style.background = EQUALITY_COLOR;
            }
        }
        array[j + 1].style.height = key;
        // color
        array[i].style.background = EQUALITY_COLOR;
    }
}

export default async function getInsertionSort(ANIMATION_SPEED) {
    SPEED = ANIMATION_SPEED;
   
     insertion();
   
}
