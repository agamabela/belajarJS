import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">{this.props.brand}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/register">Register <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white m-1">
              Selamat datang, {this.props.username}
              </h3>
            </div>
          </nav>
        );
    }
}
 //fungsi untuk mengambil data dari reducer
 const mapStateToProps = (state)=>{
   return {
     username: state.authReducer.username,
     role: state.authReducer.role
   }
 }
export default connect(mapStateToProps)(Navbar);