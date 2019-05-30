import React, { Component} from 'react';  
import {  BrowserRouter as Router,  Route} from 'react-router-dom';  // reititys
import './App.css'; //Tuodaan tyyliä -> App.js 
import './components/Koodilaskuri/koodilaskuri.css'; // Tuodaan tyyliä -> Koodilaskuri.js
import Menu from './components/Menu/Menu.js'; //Tuodaan Alavalikko
import Header from './components/Header.js'; //Tuodaan otsikko
import Koodilaskuri from './components/Koodilaskuri/Koodilaskuri'; //Tuodaan Koodilistaus 
import Graafi from './components/Graafi/Graafi.js'; //Tuodaan Pylväskaavio
import Add from './components/Add/Add.js'; //Tuodaan koodinlisäys
import testdata from './components/testdata'; //Sisältää kaiken datan


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