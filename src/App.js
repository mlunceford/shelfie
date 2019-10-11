import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            inventory: []
        }
    }
    render(){
        
        return (
          <div className="App">
              <Header/>
              <div className="display">
              <Dashboard
                inventory={this.state.inventory}
              />
              <Form/>
              </div>
          </div>
        );
    }
}

export default App;
