import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: [
      {
        name: 'rubber duck',
        price: 3,
        imgurl: 'so cute!'
      },
      {
        name: 'super duck',
        price: 4,
        imgurl: 'superhero!'    
      },
      {
        name: 'green duck',
        price: 2,
        imgurl: 'not feeling great!'
      }
    ]
    }
  }
  render() {
    return (
      <div className="App">
        <Dashboard 
        inventory={this.state.inventory}
        />
        <Form />
        <Header />
      </div>
    );
  }
}

export default App;
