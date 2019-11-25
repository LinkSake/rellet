import React from 'react';
import './App.css';

//Librerias
import { Router } from '@reach/router';
import { Provider } from 'use-http';

//Estado global
import { StateProvider } from './state'

//Componentes
import IndexContainer from './app/index/IndexContainer';
import LoginContainer from './app/session/login/LoginContainer';
import SignupContainer from './app/session/signup/SignupContainer';
import HomeContainer from './app/home/HomeContainer';

const options = {
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'Accept': '*/*',
  }
}

function App() {

  const initialState = {
    userID: null,
    sectionSelected: null
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setUserID':
        return {
          ...state,
          userID: action.newUserID
        };
      case 'setSectionSelected':
        return {
          ...state,
          sectionSelected: action.newSecitonSelected
        };
      default:
        return state;
    }
  };

  return (
     <div id="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Provider url={process.env.REACT_APP_API} options={options}>
          <Router>
            <IndexContainer path="/" />
            <LoginContainer path="/login" />
            <SignupContainer path="/signup" />
            <HomeContainer path="/home/*" />
          </Router>
        </Provider>
      </StateProvider>
    </div>
  );
}

export default App;
