import React, { cloneElement, Component } from 'react';

class LandingPage extends Component {
    //untuk menyimpan data State
    constructor(props) {
        super(props);
        this.state = {
            content: 'Lorem ipsum dolor sit amet brown fox jump',
            count: 0,
            dataEmail:[

            ]
        }
    }
    //tempat membuat fungsi
    //harus memakai arrow function
    onBtnCount = () => {
        this.state.count++
        this.setState({ count: this.state.count++ })
    }
    onBtnAdd=()=>{
        let nama = this.inputNama.value
        let email = this.inputEmail.value

        alert(`${nama} ${email}`)
        this.state.dataEmail.push({nama,email})
        this.setState({dataEmail:this.state.dataEmail})
    }
printData=()=>{
   let {dataEmail} = this.state
   return dataEmail.map((item, index)=>{
       return(
           <tr key={index}>
               <td>{index+1}</td>
               <td>{item.nama}</td>
               <td>{item.email}</td>
           </tr>
       )
   })
}
    render() {
        console.log(this.state.dataEmail)
        //tempat membuat komponen di dalam return render
        return (
            <div>
                <div style={{ height: '80vh', width: '80vw', margin: 'auto', backgroundColor: 'skyblue' }}>
                    <h1>Landing Page</h1>
                    <h3>{this.state.count}</h3>
                    <button type="button" onClick={this.onBtnCount}>Increment</button>
                    <p>{this.state.content}</p>
                    <div className="container" style={{ border: '1px solid black' }}>
                        <div className="row">
                            <div className="col-6">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="nama">Nama</label>
                                        <input type="text" className="form-control" id="nama" aria-describedby="emailHelp" ref={elemen => this.inputNama=elemen}/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={elemen => this.inputEmail=elemen}/>
                                    </div>
                                </form>
                                <button type="button" className="btn btn-info" onClick={this.onBtnAdd}>Add Data</button>

                            </div>
                            <div className="col-6">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                        <th>No</th>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.printData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default LandingPage;