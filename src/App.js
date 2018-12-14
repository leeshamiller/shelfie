import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })   
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
