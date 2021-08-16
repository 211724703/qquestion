import axios from 'axios';

export async function signUpUser(user) {
 return   await axios.post('http://localhost:4000/newUser', user).then(
        res => {
            console.log('login work ' + JSON.stringify(res));
            localStorage.setItem('userId', res.data.user._id)
            return res.data
        },
        err => {
            console.log('error login: ' + err);
        }
    )

}


export async function addQuestion(question) {

    try {
        const userId = localStorage.getItem("userId")
         return await axios.post(`http://localhost:4000/newQuestion/${userId}`, question).then(
            res => {
                console.log('add question work ' + JSON.stringify(res));
                console.log(res.data);
                return res.data;
            },
            err => {
                console.log('error question: ' + err);
            }
        )
    } catch (error) {
        console.log(error);
    }
}


export async function getHistoryQuestion() {

    try {
        const userId = localStorage.getItem("userId")
        const res = await axios.get(`http://localhost:4000/userQuestions/${userId}`)

        console.log('get history question work ' + res);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export async function deleteQuestionFromData(questionId) {

    try {
        const userId = localStorage.getItem("userId")
        const res = await  axios.delete(`http://localhost:4000/deletequestion/${userId}/${questionId}`)
        console.log('delete question work !!!' + res);
        return res.data
    } catch (error) {
        console.log("delete question not work!!!!!"+error);
    }

}

export async function loginUser({ name, password }) {
  const res =   await axios.get(`http://localhost:4000/getUser/${name}/${password}`)
  console.log( res);
  return res.data
}

export async function updateQustion(question) {
try{
  const res =  await axios.post(`http://localhost:4000/updatequestion/${question._id}`, question); 
    console.log('question update! ' + res);
    return res.data
    }catch(error){
         console.log('error question: ' + error);
    }
}



