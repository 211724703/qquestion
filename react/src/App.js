
import React, {useState, useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Login from './component/login';
import SignUp from './component/signUp';
import QuestionList from './component/questionList';
import { Provider } from 'react-redux';
import store from '../src/component/rducer/store'
import QuestionUserList from '../src/component/historyQuestion'


function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>

            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/signUp'>
              <SignUp />
            </Route>

            <Route path='/questionList'>
              <QuestionList />
            </Route>

            <Route path='/historyQuestion'>
              <QuestionUserList />
            </Route>



          </Switch>
        </Router>

      </Provider>
    </div>
  );
}

export default App;
