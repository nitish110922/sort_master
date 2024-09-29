import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import getMergeSort from "./Sorting-Algorithms/MergeSort";
import getQuickSort from "./Sorting-Algorithms/QuickSort";
import getBubbleSort from "./Sorting-Algorithms/BubbleSort";
import getInsertionSort from "./Sorting-Algorithms/InsertionSort";
import getSelectionSort from "./Sorting-Algorithms/SelectionSort";
import "./SortingVisualiser.css";

const PRIMARY_COLOR = "#cca8e9";


const SortingVisualiser = () => {
    const [array, resetArray] = useState([]);
    let [resetArrayDepend, setResetArrayDepend] = useState(1);
    let [ANIMATION_SPEED, SET_ANIMATION_SPEED] = useState(20);
    let [array_length, set_array_length] = useState(50);

    let [sortfun, setsort] = useState('a');
    let [toggle, settoggle] = useState(true);

    useEffect(() => {
        const newArray = [];
        for (let i = 0; i < array_length; i++) {
            newArray.push(randomIntFromIntervals(5, 1000));
        }

        resetArray(newArray);
    }, [resetArrayDepend, array_length]);

    const arrayResetHandler = () => {
        const bars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < bars.length; i++)
            bars[i].style.backgroundColor = PRIMARY_COLOR;
        setResetArrayDepend((resetArrayDepend += 1));
    };

    const arrayResizeHandler = (event) => {
        const bars = document.getElementsByClassName("array-bar");
        for (let i = 0; i < bars.length; i++)
            bars[i].style.backgroundColor = PRIMARY_COLOR;
        set_array_length(event.target.value);

        
    };

    const speedChangeHandler = (event) => {
        SET_ANIMATION_SPEED(1500-5*parseInt(event.target.value));
     
      console.log(ANIMATION_SPEED);
    };

    const mergeSortHandler = () => {
        settoggle(false);
        setsort("Merge Sort");
        getMergeSort(ANIMATION_SPEED);
    };

    const quickSortHandler = () => {
        settoggle(false);
        setsort("Quick Sort");
        getQuickSort(ANIMATION_SPEED);
    };

    const bubbleSortHandler = () => {
        settoggle(false);
        setsort("Bubble Sort");
        getBubbleSort(ANIMATION_SPEED);
    };

    const insertionSortHandler = () => {
        settoggle(false);
        setsort("Insertion Sort");
        getInsertionSort(ANIMATION_SPEED);
    };

    const selectionSortHandler = () => {
        settoggle(false);
        setsort("Selection Sort");
        getSelectionSort(ANIMATION_SPEED);
    };


    const widthOfBars =
        array_length > 65
            ? 5
            : array_length > 50
                ? 10
                : array_length > 40
                    ? 18
                    : array_length > 30
                        ? 20
                        : array_length > 20
                            ? 25
                            : array_length > 12
                                ? 30
                                : array_length > 5
                                    ? 100
                                    : 40;

    return (
        <>
            <Header
          toggle={toggle}
          sortfun={sortfun}
            ANIMATION_SPEED={ANIMATION_SPEED}
             array_length={array_length}

                onResize={arrayResizeHandler}
                onSpeed={speedChangeHandler}
                onGenerateArray={arrayResetHandler}
                onMergeSort={mergeSortHandler}
                onQuickSort={quickSortHandler}
                onBubbleSort={bubbleSortHandler}
                onInsertionSort={insertionSortHandler}
                onSelectionSort={selectionSortHandler}
           
            />
            <div className="array-container">
                {array.map((value, idx) => {
                    return (
                        <div
                            className="array-bar"
                            id={idx}
                            key={idx}
                            style={{
                                height: `${value / 1.5}px`,
                                width: `${widthOfBars}px`,
                            }}
                        >
                            
                        </div>
                    );
                })}
            </div>
        </>
    );
};

function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default SortingVisualiser;
