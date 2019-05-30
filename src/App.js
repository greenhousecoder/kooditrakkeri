import React, { Component} from 'react';
import {  BrowserRouter as Router,  Route} from 'react-router-dom';
import './App.css';
import './components/Koodilaskuri/koodilaskuri.css';
import Menu from './components/Menu/Menu.js';
import Header from './components/Header.js';
import Koodilaskuri from './components/Koodilaskuri/Koodilaskuri';
import Graafi from './components/Graafi/Graafi.js';
import Add from './components/Add/Add.js';
import testdata from './components/testdata';


//https://react-icons.netlify.com/#/icons/io  <-- tuolta löytyy ikonit



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testdata
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(newdata){

    let storeddata = this.state.data.slice();
    storeddata.push(newdata);
    this.setState({
      data: storeddata
    });
  }


  

  render() {


    return ( 
    <Router >
      <div className="wrap" >
      <Header />
     <div className="box"> 
     <Route path="/Add"  render ={() => <Add onFormSubmit= {this.handleFormSubmit } />} />
      <Route path="/Koodilaskuri" exact component={Koodilaskuri}></Route>
      <Route path="/Graafi" exact component={Graafi}></Route>
      </div>
      <Menu /> 
      
      </div> 
      


      
      </Router>
    );

  }


}


export default App;