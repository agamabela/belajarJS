import React from 'react';
import { Button, Container, Label,Input, FormGroup, Alert } from 'reactstrap'
import axios from 'axios'
import { URL_API } from '../helper';
import {connect} from 'react-redux'
import {authLogin} from '../actions'
import { Redirect } from 'react-router-dom';

class authPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passType: 'password',
            alertShow: 'none',
            message:'',
            alertType:''
        }
    }
   
    onBtnRegis=()=>{
        let username= this.inUsername.value
        let email = this.inRegisEmail.value
        let password = this.inRegisPass.value
        let role = 'user'
        if(username =='' || email==''||password==''){
            //setSrare untuk membuka alert, dengan mengatur message serta type alert
            this.setState({alert:!this.state.alert, message:'isi semua dongs', alertType:'danger'})
            setTimeout(()=>this.setState({alert:!this.state.alert, message:'',alertType:''}),3000)
        }else{
            if(email.includes('@')){
            axios.post(URL_API+`/users`,{
                username,email, password, role

            }).then(res=>{
                this.setState({alert:!this.state.alert, message:'Resgistrasi berhasil', alertType:'success'})
                setTimeout(()=>this.setState({alert:!this.state.alert, message:'',alertType:''}),3000)
                this.inUsername.value = null
                this.inRegisPass.value = null
                this.inRegisEmail.value= null
           
                console.log(res.data)
            }).catch(err=>{
                console.log("error", err)
            })
        }else{
            this.setState({alert:!this.state.alert, message:'email salah', alertType:'danger'})
            setTimeout(()=>this.setState({alert:!this.state.alert, message:'',alertType:''}),3000)
        }
        }
        
      
      
    }
    onBtnLogin=()=>{
        axios.get(URL_API+`/users?email=${this.inEmail.value}&password=${this.inPassword.value}`)
        .then(res=>{
            if(res.data.length>0){
            this.props.authLogin(res.data[0])
            //menyimpan data token ke dalam browser
            localStorage.setItem('tkn', res.data[0].id)
            this.setState({redirect:true})
            }
        }).catch(err=>{
console.log("login error:", err)
        })
    }
    
    render() {
        if(this.state.redirect){
            return<Redirect to="/"/>
        }
        return (
            <Container>
                <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Pilihan masuk</h2>
                <p style={{ textAlign: 'center' }}>Masuk dan selesaikan pesanan dengan data pribadi Anda atau daftar untuk menikamti semua manfaat member</p>
                <div className='row'>
                    <div className='col-6'>
                        <h3>Silahkan masuk ke akun anda</h3>
                        <p>Silahkan masuk ke akun anda untuk menyelesaikan pembayaran</p>
                        <FormGroup>
                            <Label for="textEmail">email</Label>
                            <Input type="email" id="textEmail" innerRef ={elemen=>this.inEmail=elemen}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="textPassword">password</Label>
                            <Input type={this.state.passType} id="textPassword" innerRef ={elemen=>this.inPassword=elemen}/>
                        </FormGroup>
                        <Button onClick={this.onBtnLogin}>Masuk</Button>

                    </div>
                <div className="col-6">
                    <h3>Silahkan buat akun Anda</h3>
                    <FormGroup>
                    <Alert isOpen={this.state.alert} color={this.state.alertType}>
                        {this.state.message}
                    </Alert>
                            <Label for="textUsername">username</Label>
                            <Input type="text" ref="name" innerRef ={elemen=>this.inUsername=elemen} />
                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="textEmail">email</Label>
                            <Input type="email" ref="email" id="textEmail" innerRef ={elemen=>this.inRegisEmail=elemen}/>
                            
                        </FormGroup>
                        <FormGroup>
                            <Label for="textPassword">password</Label>
                            <Input type={this.state.passType} innerRef ={elemen=>this.inRegisPass=elemen}/>
                        </FormGroup>
                        <Button type="buton" onClick={this.onBtnRegis}>Register</Button>
                </div>
                </div>
                <div>

                </div>
            </Container>
        );
    }
}

export default connect(null, {authLogin})(authPage);