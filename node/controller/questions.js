const Question = require('../modules/question')
const User = require('../modules/user')
const ObjectId = require('mongoose').Types.ObjectId;


const saveQuestion = async (req, res) => {//add question
    let currentTask = new Question(req.body);
    const savedTask = await currentTask.save()
    let currentUser = await User.findById(req.params.id)
    currentUser.historyQuestions.push(savedTask);
    currentUser.save();
    res.status(200).json({ myTask: currentTask });
}

const deleteQuestion = async (req, res) => {//delete question
    try {
        console.log(req.params.id);
        // const question = await Question.findByIdAndDelete(req.params.id)
        const user = await User.findById(req.params.userId)
        user.historyQuestions = user.historyQuestions.filter((q) => q != req.params.id);
        const updatedUser = await user.save()
        console.log("question delete");
        res.status(200).json({ user: { ...updatedUser._doc, id: updatedUser._doc._id.toString() } });
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}






const getAllQuestion = async (req, res) => {
    try {
        const task = await Question.find()
        res.status(200).json({ allTask: task })
    } catch (error) {
        res.status(400).send('error')
    }
}

const getQuestionById = async (qid) => {//to get question for delete function
    try {
      const task = await Question.findById(qid);
        return task;
    } catch (error) {
        console.log(error);
        return {};
    }
}

const getQuestion = async (req, res) => { //to get question by id
    console.log(req.params.id)
    try {
        const task = await Question.findById(req.params.id)
        res.status(200).json({ myTask: task })
    } catch (error) {
        console.log(error);
        res.status(400).send('error')
    }
}




const updateQuestion = async (req, res) => {// to update a question
    try {
        const question = await Question.findOneAndUpdate
            ({ "_id": req.params.id }, { "question": req.body.question })
        console.log(question)
        res.status(200).json({ myQuestionUpdate: question })
    } catch (error) {
        console.log(error);
        res.status(400).send('error!!!')
    }
}


module.exports = { saveQuestion, getAllQuestion, getQuestion,  deleteQuestion, getQuestionById, updateQuestion }