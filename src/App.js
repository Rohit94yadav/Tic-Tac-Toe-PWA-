import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import configureStore from './redux/configureStore';
import Game from './game/Game';

class App extends Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
       

        <h1 style={{textAlign:"center",fontSize:"30px"}}>Tic-Tac-Toe</h1>
        <Game />
       
      </Provider>
    );
  }
}

export default App;
