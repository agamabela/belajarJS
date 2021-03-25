import React from 'react';


class viewImg extends React.Component {
    constructor(props) {
        super(props);
        const {data}= this.props.location.state
        this.state = { 
            set:data 
         }
    }
    // printView=()=>{
    //     let {dataAlbum} = this.state
    //     return dataAlbum.map((item, index)=>{
    //         return <viewImg title={item.title} description ={item.description} image={item.img}/>
    //     })
    // } 
    
    render() { 
        return ( 
            <div>
                <h1>View Image</h1>
                <div className="card m-auto" style={{width:'50rem'}}>
                    <img src={this.state.set.img} className="card-img-top" alt="..."/>
                    {/* {this.state.set.title} */}
                    {/* <img src={this.state.set.img}/> */}
                    <h1 className="text-left">{this.state.set.title}</h1>
                    <p className="text-left">{this.state.set.description}</p>
                    
                </div>
                
            </div>
         );
    }
}
 
export default viewImg;