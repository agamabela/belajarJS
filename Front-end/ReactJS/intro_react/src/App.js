import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landingPage'
import Navbar from './components/navbar'
import RegisterPage from './pages/registerPage';
//fungsinya untuk menjadi penghubung page ke browser router
import {Route} from 'react-router-dom'
import viewImg from './pages/viewImg';
import Cards from './components/cards';

function App() {
  return (
    <div className="App">
      {/* Virtual DOM*/ }
      <Navbar brand="All you can eat"/>
      <Route path="/" component={LandingPage} exact/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/view" component={viewImg}/>
      </div>
  );
}

export default App;
