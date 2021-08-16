const router = require('express').Router()
const user = require('../controller/userControll')
const question = require('../controller/questions')

router.post('/newUser', user.saveUser)
router.get('/getAllUser', user.getAllUser)
router.get('/getUser/:name/:password', user.getUser)
router.get('/userTasks/:id', user.userQuestions)



router.post('/updatequestion/:id', question.updateQuestion)
router.post('/newQuestion/:id', question.saveQuestion)
router.get('/getAllQuestion', question.getAllQuestion)
router.get('/getQuestion/:id', question.getQuestion)
router.delete('/deletequestion/:userId/:id', question.deleteQuestion)

module.exports = router

