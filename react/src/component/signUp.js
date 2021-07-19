import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { signUpUser } from './service'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ' ',
            password: ' ',
        }
    }


    setUserName = (value) => {
        this.setState({name: value });
    }



    setPassword = (value) => {
        this.setState({ password: value });
    }

    render() {
        return (
            <div>
                <br></br>
                <Card body style={{ margin: "auto", width: "50%", border: "3px solid green", padding: "10px", height: '450px' }}>
                <br></br><br></br>
                <h1  style={{color:"rgb(115, 131, 115)"}}>Connect</h1>
                <h3 style={{color:"green"}}>enter user name</h3>
                <input type="text" onChange={(e) => this.setUserName(e.target.value)}   ></input>
                <h3 style={{color:"green"}}>enter password</h3>
                <input type="password" onChange={(e) => this.setPassword(e.target.value)} ></input>
                <br/>
                <br/>
                <Link to="/questionList">
                    <Button variant="outline-success" onClick={() => { signUpUser({name: this.state.name, password: this.state.password }) }} type="button">
                        sign up
               </Button>
                </Link>
                </Card>
            </div>
        )
    }
}
export default SignUp;
