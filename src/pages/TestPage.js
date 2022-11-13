import React from 'react';
import questions from "../questions/questions";
import {Link} from "react-router-dom";

export default class TestPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0
        };
        this.types = ["Saviour", "Villain", "Anxious", "Confident", "Workaholic", "True", "Enigma", "Smart",
            "Indulging", "Romantic"]
        this.points = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    onAnswerClick(question, q_ind) {
        // save answer
        // console.log("Clicked on " + q_ind)
        const answerPoints = question.points[q_ind];
        this.points = this.points.map((point, index) => point + answerPoints[index]);
        // console.log(this.points)
        this.setState((prevState) => {
            let cpy = {...prevState};
            cpy.currentQuestionIndex++;
            return cpy
        })
    }

    determineType(){
        let maxInd = 0;
        for(let i=0; i < this.points.length; i++){
            if(this.points[i] > this.points[maxInd])
                maxInd = i;
        }
        return this.types[maxInd];
    }

    onTestComplete() {
        // console.log(this.types)
        // console.log(this.points)
        const type = this.determineType()
        return <>
            <h1>Your type is: {type} Rosie!</h1>
            <Link to={"/"+ type.toLowerCase()}> <h3> Find out more about your type </h3> </Link>
        </>

    }

    render() {
        if (this.state.currentQuestionIndex >= questions.length)
            return this.onTestComplete();

        let currentQuestion = questions[this.state.currentQuestionIndex];
        return (
            <div id="test-box">
                <h1>{currentQuestion.title}</h1>
                <div id="answers">
                    {
                        currentQuestion.options.map(
                            (ob, index) =>
                        <button key={ob} className="btn" onClick={() => this.onAnswerClick(currentQuestion, index)}>
                            {ob}
                        </button>
                        )
                    }
                </div>
            </div>
        )
    }

}