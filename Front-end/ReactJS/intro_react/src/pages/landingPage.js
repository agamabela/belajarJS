import React, { cloneElement, Component } from 'react';
import Cards from '../components/cards';


class LandingPage extends Component {
    //untuk menyimpan data State
    constructor(props) {
        super(props);
        this.state = {dataAlbum:[
                {
                    id:1,
                    title:'Mountain',
                    description:'The name Altai is ancient, hypotheses about its origin vary wildly.',
                    img:'https://peakvisor.com/img/news/Altai-mountain-range.jpg'
                },
                {
                    id:2,
                    title:'Gunung',
                    description:'This is image from a mountain. Nothings special, just an image',
                    img:'https://images.unsplash.com/photo-1574950578143-858c6fc58922?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                },
                {
                    id:3,
                    title:'Apa coba',
                    description:'Udah mulai ngaco ini tulisannya',
                    img:'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80'
                },
                {
                    id:4,
                    title:'Ngelamun',
                    description:'Orang sendirian di gunung',
                    img:'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                },
                {
                    id:5,
                    title:'Serem Gunung',
                    description:'Serem gunungnya. Hiii~',
                    img:'https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                },
                {
                    id:6,
                    title:'Indah Gunungnya',
                    description:'Gunung yang ini ga mungkin di Indonesia',
                    img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                },
                {
                    id:7,
                    title:'Kapas Gunung',
                    description:'Pengen jalan-jalan ke sini ya Allah',
                    img:'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                },
                {
                    id:8,
                    title:'Mantep',
                    description:'Cakep banget ini gunungnya. Huft',
                    img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                },
                {
                    id:9,
                    title:'Ini Yosemithe',
                    description:'Dari awal udah nebak ini pasti di Yosemithe Park. Haha',
                    img:'https://images.unsplash.com/photo-1498855926480-d98e83099315?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                },
            ]

        }
        
    }
    printCard=()=>{
        let {dataAlbum} = this.state
        return dataAlbum.map((item, index)=>{
            console.log(item)
            return <Cards title={item.title} description ={item.description} image={item.img } data={item}/>
            
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
            <div style={{ backgroundColor: '#F8F9FA' }}>
                <div className="jumbotron mb-2" style={{ backgroundColor: 'white' }}>
                    <div style={{ width: "70%" }} className="m-auto">
                        <h1 className="display-4">Album Example</h1>
                        <p className="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <button className="btn btn-primary btn-lg">Your album</button><button className="btn btn-secondary btn-lg">Their album</button>
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