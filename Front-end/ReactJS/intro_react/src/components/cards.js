import React from 'react';
import {Link} from 'react-router-dom'
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-sm-6 col-md-4 p-3">
                <div className="card h-70">
                    <img src={this.props.image} className="" style={{objectFit:'cover', height:'25vh', width:'100%'}} alt=""  />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                        <Link to={{pathname:`/view`, state:{data:this.props.data}}}><button className="btn btn-dark">View</button></Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Cards;