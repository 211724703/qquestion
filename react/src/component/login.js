import React from 'react';
import { Link } from 'react-router-dom'
import { loginUser } from './service'
import {InputGroup, FormControl ,Carousel, Card, Form, Button } from 'react-bootstrap';

// import Connect from './connect';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ' ',
            password: ' ',
            postWeather:[{date:"13/04/05",wind:"38"},{date:"18/04/05",wind:"35"},{date:"11/04/05",wind:"18"}]
        }
    }

    setUserName = (value) => {
        this.setState({ name: value });
    }


    setPassword = (value) => {
        this.setState({ password: value });
    }

    onlogin = async () => {
        try {

            await loginUser({ name: this.state.name, password: this.state.password });
            window.location.href = '/questionList';
        } catch (error) {
            alert("is not valid password")
        }
    }



    render() {
        return (
            <div>
                <Card body style={{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px", height: '450px' }}>
                <br></br><br></br>
                <h1 style={{ color: "rgb(115, 131, 115)" }}>Login</h1>
                <h3 style={{   color: "green" ,textAlign: "center"}}>enter user name</h3>
                <input type="text" onChange={(e) => this.setUserName(e.target.value)}   ></input>
                <h3 style={{ color: "green" }}>enter password</h3>
                <input  variant="outline-success" type="password" onChange={(e) => this.setPassword(e.target.value)} ></input>
                <br></br><br></br>
                <Button variant="outline-success" onClick={this.onlogin} type="button">
                    login
               </Button>
                <br></br><br></br>
                <Link to="/signUp">
                    <Button variant="outline-success" type="button">
                        sign up
               </Button>
                </Link>
                </Card>


                <h1>רשימת מזג אויר  </h1>
          <br></br>
          {/* יצירת מזג אויר */}
          <Card body style={{backgroundColor:"rgb(255, 153, 255)",with:"50px", hight:"450px" ,margin:"auto",padding: "10px"}}>
                <h3 style={{color:"white"}}>צור מזג אויר</h3>
                <input type="text"  ></input>
                <button type="button" class="btn btn-outline-secondary">אישור</button>
          </Card>
          
                <br></br>
                <br></br>
                <Button class="btn btn-dark"></Button>
                <a href="/signUp" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">היסטורית מזג האויר</a>
                <a href="/signUp" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">חזרה</a>
                <br></br>
                <br></br>
                
                {this.state.postWeather?.map(item=> <Card style={{backgroundColor:"rgb(255, 153, 255)",with:"50px", hight:"450px" ,margin:"auto",padding: "10px"}}> 
                    <p> מזג האויר: <br></br> תאריך: {item.date}  <br></br>{item.wind}<br></br> <button>הוספה</button> <br></br><br></br>
                    </p>
                   
                           </Card>
                    ) }
   
   <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title >היסטורית המזג האויר</Card.Title>

    {this.state.postWeather?.map( item=> <Card style={{backgroundColor:"rgb(255, 246, 165)"}}>
            <p>:מזג אויר 
                <br></br>
                :תאריך  {item.date}
                <br></br>
                {item.wind}
                <br></br>
                <button >מחיקה </button>
            </p>
             </Card>
        )}
   
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
         <h1>היסטורית המזג האויר</h1>
        <br></br>
        {this.state.postWeather?.map( item=>
            // <Weather item={item} ondelete={ondelete} onupdate={onupdate}/>
            <p>:מזג אויר 
                <br></br>
                :תאריך  {item.date}
                <br></br>
                {item.wind}
                <br></br>
                <button >מחיקה </button>
            </p>
        )}

        



            </div>



        )
    
        

    }

   
    
}
export default Login;

