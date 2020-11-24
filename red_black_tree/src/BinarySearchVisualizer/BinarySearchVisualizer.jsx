import React from 'react';
import RBTree from '../../node_modules/red-black-tree-js';
import './BinarySearchVisualizer.css';

export default class BinarySearchVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();  // generates a new array
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 20; i++){
            array.push(randomIntFromInterval(1, 99));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;
        return (
            <>
            <div className="tree-container">
                {array.map((value, idx) => (
                    <div className="node-circle" key={idx}>
                        {value}
                    </div>
                
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.testRedTreeAlgorithm()}>Test Array</button>
                </div>
            </>
        );
    }

    testRedTreeAlgorithm(){
        // using results from example on:  http://www.btechsmartclass.com/data_structures/red-black-trees.html
        const array = [8, 18, 5, 15, 17, 25, 40, 80];
        this.setState({array});
    }
}

// TODO: Instead of making it random, we'll want to make it from the user in the future...
function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

