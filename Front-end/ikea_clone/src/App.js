import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import React from 'react';
import NavbarComp from './components/navbar'
import { NavbarToggler } from 'reactstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isOpen:false

    }
  }
 render(){
   return (
    <div>
      <NavbarComp/>
      <Route path="/" component={LandingPage} exact/>
  
    </div>
   );
 }
  

}
export default App;
