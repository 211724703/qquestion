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

            </div>



        )
    
        

    }

   
    
}
export default Login;

