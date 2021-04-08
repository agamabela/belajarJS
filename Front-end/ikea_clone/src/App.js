import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavbarComp from './components/navbar';
import logo from './logo.svg';
import LandingPage from './pages/landingPage'
import AuthPage from './pages/authPage'
import axios from 'axios';
import { URL_API } from './helper';
import { keepLogin,getProductAction } from './actions'
import { connect } from 'react-redux'
import ProductManagement from './pages/productManagement';
import notFound from './pages/notFound';
import ProductsPage from './pages/productsPage';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    this.reLogin()
    this.getProductAction()
  }

  reLogin = () => {
    let idToken = localStorage.getItem("tkn")
    console.log(idToken)
    axios.get(URL_API + `/users?id=${idToken}`)
      .then(res => {
        this.props.keepLogin(res.data[0])
      })
      .catch(err => {
        console.log("Keeplogin error :", err)
      })
  }
  getProducts=()=>{
    axios.get(URL_API+`/products`)
    .then(res=>{
      this.props.getProductAction(res.data)

    }).catch(err=>{
      console.log("getProducts error:",err)
    })
  }

  render() {
    return (
      <div>
        <NavbarComp />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/auth" component={AuthPage} />
          <Route path="/products" component={ProductsPage}/>
          {
            this.props.role=="admin" &&
            <>
             <Route path="/product-management" component={ProductManagement}/>
            </>
          }
          <Route path="*" component={notFound}/>
         
        </Switch>
      </div>
    );
  }
}
const mapStateToProps=({authReducers})=>{
  return{
    role: authReducers.role
  }
}

export default connect(mapStateToProps, { keepLogin,getProductAction })(App);