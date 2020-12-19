import React from 'react';
import { getMergeSortAnimation } from '../mergeSortAlgorithm/mergeSortAlgorithm.js';
import './MergeSortVisualizer.css';

// Speed of the animation -- a higher number means it is slower (in milliseconds).
const ANIMATION_SPEED_MS = 500;

// Change the amount of bars shows for any random array.
const NUMBER_OF_ARRAY_BARS = 31;
const NUMBER_OF_MIN_BARS = 8;  // this will be for responsive layouts, smallest windo size of 322px

// The color of the bars will change to this color when they have been sorted
const SORTED_COLOR = '#3FBCAE';

// This color is the color of the bars being compared
const COMPARE_COLOR = 'black';

export default class MergeSortVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        // create a blank array
        const array = [];
        
        // iterate 100 times in a for loop 
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++){
            // generate a random number between 5 and 1000 and push into empty array
            array.push(randomIntFromInterval(20,500));
        }

        // setState of array created
        this.setState({array});
    }

    mergeSort(){
        const comparingAnimation = getMergeSortAnimation(this.state.array);
        for (let i = 0; i < comparingAnimation.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = comparingAnimation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? COMPARE_COLOR : SORTED_COLOR;
                setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                const [barOneIdx, newHeight] = comparingAnimation[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
       
    }

    render() {
        const {array} = this.state;

        return(
            <>
                <div className="nav-bar">
                <div className="nav-left">Merge Sort Visualizer</div>
                <div className="nav-right"><a href="https://github.com/n-badillo/Merge_Sort_Visualization" target="_blank">Project Page</a></div>
                </div>
                <div className="array-container">
                {array.map((value, idx) => (
                    // displaying the bars of the array
                    <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                        {value}
                    </div>
                ))}
                </div>
                <div className="button-bar">
                    <button className="custom-button" onClick={() => this.resetArray()}>Generate Random Array</button>
                    <button className="custom-button" onClick={() => this.mergeSort()}>Perform Merge Sort</button>
                </div>
                <div className="footer-bar">
                Created by Nancy Badillo
                </div>
            </>
        );
    }

}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}