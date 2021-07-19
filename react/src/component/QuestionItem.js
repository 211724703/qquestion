import React, {useState} from 'react';
import { Card, Button } from 'react-bootstrap';

const QuestionItem = props => {
    const{item} = props
    const [editMode, setEditMode] = useState(false);
    const [editQuestion, setEditQuestion] = useState(item.question);

    const onEditQuestion = () => {
        if(editMode === false){
            setEditMode(true);
        }else{
            setEditMode(false);
            props.onEditQuestion({...item, question: editQuestion})
        }
    }
    return(
        <div style={{display:'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent:'space-around'}}>      
        <Card  key={item._id} 
         style={{ height: '180px', width: '25vw', alignItems: "center", marginBottom: '3em', marginLeft: "auto", marginRight: "auto",border: "3px solid green" }}>
                <Card.Body><Card.Text>{editMode === false?
                   ` the question: ${item.question}`
                    : 
                    <input type="text" value={editQuestion} onChange={event => setEditQuestion(event.target.value)} />}</Card.Text>
                    <Button variant="outline-success" onClick={onEditQuestion} >{editMode === false? 'to Edit' : 'to Update'} </Button>
                    <Button variant="outline-success" onClick={() => props.onDeleteQuestion(item._id)} >to delete</Button>
                </Card.Body>
            </Card>
            </div>
    )
};

export default QuestionItem;