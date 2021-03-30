import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import {authLogin} from '../actions'
import {connect} from 'react-redux'
//import {Redirect} from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertShow : 'none',
            redirect: false
        }
    }
    getLogin = () => {
        axios.get(`http://127.0.0.1:4000/tb_user?username=${this.inUsername.value}&password=${this.inPass.value}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.length>0){
                //menjalankan fungsi action
                this.props.authLogin(res.data[0])
                this.setState({redirect:true})
                console.log('login success')
            }else{
                this.setState({alertShow:'block'})
                setTimeout(()=>this.setState({alertShow:'none'}),3000)
            }
        })
        .catch(err=>console.log)
    }
    render() {{
        if(this.state.redirect){
            return <Redirect to='/'/>
        }
    }
        return (
            <div className="container">
                <div className="row">
               
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                            <div className="alert alert-danger" style={{display:this.state.alertShow}} role="alert"> Password Salah</div>
                                <h5 className="card-title text-center">Sign In</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputEmail" className="form-control" ref={elemen => this.inUsername = elemen} placeholder="Email address" required autoFocus />
                                        <label htmlFor="inputEmail">Username</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" ref={elemen => this.inPass = elemen} className="form-control" placeholder="Password" required />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="button" onClick={this.getLogin}>Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
/*
Connect: untuk menghubungkan
*/
export default connect(null, {authLogin})(Login);