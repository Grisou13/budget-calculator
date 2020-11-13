import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Grid } from '@material-ui/core';

interface AppStateInterface {
  expenses: [number?]
  income: [number?]
  taxes: [ {percentage:boolean, amount: number}? ]
}

const appState: AppStateInterface = {
  taxes: [],
  expenses: [],
  income: [50000]
}

class App extends React.Component {
  constructor(props: any){
    super(props);
    this.state = appState;

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Online Budget calculator</h1>
        </header>
        
        <Grid spacing={1}>
          <div className="root">
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
