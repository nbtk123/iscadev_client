import React, { Component, PropTypes } from 'react';
import Question from './question.js';

class QuestionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    question: 'איך קוראים לך?',
                    answer: 'טוסטר משולשים'
                },
                {
                    question: 'שאלה 2',
                    answer: 'תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 תשובה 2 '
                },
                {
                    question: 'איזה יום היום?',
                    answer: 'היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! היום יום חמישי. יום חמישי!!! '
                }
            ]
        }
    }

    render() {  
        return (
            <div className="container">
                <div className="row">
                {
                    this.state.questions.map((question, i) => {
                        return (
                            <Question {...question}/>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}

QuestionList.propTypes = {
    
};

export default QuestionList;