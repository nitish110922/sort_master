// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
export function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}



// Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)
export function sleep(milisec) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, milisec);
    });
}
