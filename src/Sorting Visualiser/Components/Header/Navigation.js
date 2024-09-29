import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {

    function refreshPage() {
        window.location.reload(false);
      }


    return (
        <nav className={classes.nav}>




                    { props.toggle?     
            <ul>
   
                <li className={classes.slider}>
                    <label>Size of Array</label>
                    <input
                        id="arr_sz"
                        type="range"
                        min="6"
                        max="100"
                        onChange={props.onResize}
                    />
                </li>
                <li className={classes.slider}>
                    <label>Animation Speed</label>
                    <input
                        id="speed_input"
                        type="range"
                        min="20"
                        max="300"
                        stepDown="10"
                        onChange={props.onSpeed}
                    />
                </li>
                <div className={classes.breaker}></div>
                <li>
                    <button href="/" onClick={props.onMergeSort} className="mergeSort">
                        Merge Sort
                    </button>
                </li>

                <li>
                    <button href="/" className="quickSort" onClick={props.onQuickSort}>
                        Quick Sort
                    </button>
                </li>
                <li>
                    <button href="/" className="bubbleSort" onClick={props.onBubbleSort}>
                        Bubble Sort
                    </button>
                </li>
                <li>
                    <button
                        href="/"
                        className="insertionSort"
                        onClick={props.onInsertionSort}
                    >
                        Insertion Sort
                    </button>
                </li>
                <li>
                    <button
                        href="/"
                        className="insertionSort"
                        onClick={props.onSelectionSort}
                    >
                        Selection Sort
                    </button>
                </li>
                <div className={classes.breaker}></div>
                <li>
                    <button href="/" onClick={props.onGenerate} className="new-array">
                        Generate New Array!
                    </button>
                </li>
            
       
            </ul> : <ul className={classes.newnav}>  
                <h1> {props.sortfun}</h1>
                <li>
        Animation speed = {props.ANIMATION_SPEED}ms
        </li>
        <li>
        Array length = {props.array_length}
        </li>
        <li>
        <button onClick={refreshPage}>Click to restart!</button>
        </li>
                 </ul> }
        </nav>
    );
};

export default Navigation;
