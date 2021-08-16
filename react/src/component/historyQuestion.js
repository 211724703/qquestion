import React, { useRef, useEffect, useState } from 'react'
import { addQuestionToState, saveUser, deleteQuestion, createQuestion, updateQuestion } from './rducer/action'

import { getHistoryQuestion, deleteQuestionFromData, updateQustion } from './service'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap';
import QuestionItem from './QuestionItem';
import 'bootstrap/dist/css/bootstrap.min.css';



function mapStateToProps(state) {
    return {
        question: state.question,
    };
}


export default connect(mapStateToProps)(function QuestionUserList(props) { 
    const {question, dispatch} = props;

  
    const onDeleteQuestion =   async(id) => { 
       await deleteQuestionFromData(id)
      dispatch(deleteQuestion(id))
    }

    const onEditQuestion = async (item) => {
        await updateQustion(item)
        dispatch(updateQuestion(item))
    }
  
  
    return (
        <div>      
            <h1 style={{ color: "rgb(115, 131, 115)" }}>my history question</h1>
            <div >
            <br/>
            {question.question?.map(item =>
                 <QuestionItem item={item} onDeleteQuestion={onDeleteQuestion} onEditQuestion={onEditQuestion} />)}
            </div>
              <Link to="/questionList">
                <Button variant="outline-secondary" type="button">
                    back
               </Button>
            </Link>
        </div>
    )
})

