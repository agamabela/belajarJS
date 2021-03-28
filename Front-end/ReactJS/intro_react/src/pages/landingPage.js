import React, { cloneElement, Component } from 'react';
import Cards from '../components/cards';
import axios from 'axios';


class LandingPage extends Component {
    //untuk menyimpan data State
    constructor(props) {
        super(props);
        this.state = {
            dataAlbum: [

            ]
            

        }




    }
    // component life cycle
    // componentWillMount(): fungsi yang berjalan sebelum component dirender
    // componentDidMount(): tahap/fungsi yang berjalan setelah fungsi render dijalankan. Untuk proses pemanggilan URL_API atau deklarasi state di awal render
    // componentDidUpdate(): fungsu yang berjalan setelah component render yang bersifat standby
    componentDidMount() {
        this.getDataAlbum()
    }
    getDataAlbum = () => {
        axios.get('http://127.0.0.1:4000/tb_album')
            .then((res) => {
                console.log("respon api get:", res.data)
                this.setState({ dataAlbum: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    printCard = () => {
        let { dataAlbum } = this.state
        return dataAlbum.map((item, index) => {
            console.log(item)
            return <Cards title={item.title} description={item.description} image={item.img} data={item} />

        })
    }

    addGambar=()=>{
       let title = this.inputTitle.value
       let description = this.inputDesc.value
       let img = this.inputGambar.value
       console.log(title,description,img)

       axios.post('http://127.0.0.1:4000/tb_album',{
           title, description, img

       })
       .then((res)=>{
        console.log('respon post:', res.data)
        this.state.dataAlbum.push(res.data)
        this.setState({dataAlbum: this.state.dataAlbum})
       })
       
       .catch((err)=>{
           console.log('ERROR POST:', err)
       })
    }


    // printView=()=>{
    //     let {dataAlbum} = this.state
    //     return dataAlbum.map((item, index)=>{
    //         return <viewImg title={item.title} description ={item.description} image={item.img}/>
    //     })
    // }

    render() {

        return (
            <div className="row" style={{ backgroundColor: '#F8F9FA' }}>
                <div className="jumbotron mb-2 col-6" style={{ backgroundColor: 'white' }}>
                    <div style={{ width: "70%" }} className="m-auto">
                        <h1 className="display-4">Album Example</h1>
                        <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <button className="btn btn-primary btn-lg">Your album</button><button className="btn btn-secondary btn-lg">Their album</button>
                    </div>
                </div>
                <div className="jumbotron mb-2 col-6" style={{ backgroundColor: 'white' }}>
                  <div className="form-group" style={{width:'70%'}}>
                    <label for="masukJudul">Judul</label>
                     <input type="text" className="form-control" id="titleInput" ref={elemen => this.inputTitle = elemen} placeholder="masukan judul"/>
                     <label for="masukDeskripsi">Deskripsi</label>
                     <input type="text" className="form-control" id="deskInput" ref={elemen => this.inputDesc = elemen} placeholder="masukan deskripsi"/>
                     <label for="masukGambar">Gambar</label>
                     <input type="text" className="form-control" id="gambarInput" ref={elemen => this.inputGambar = elemen} placeholder="masukan gambar"/>
                     <button className="btn btn-primary btn-lg" onClick={this.addGambar}>Add</button>
                </div>
                </div>
                            <div className="row container m-auto">
                                {this.printCard()}
                            </div>

             </div>
        );
    }
}

export default LandingPage;