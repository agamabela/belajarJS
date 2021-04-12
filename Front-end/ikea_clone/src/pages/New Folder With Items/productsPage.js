import React from 'react';
import CardProduct from '../components/cardProducts';
import { connect } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Input
} from 'reactstrap';
import Slider from 'react-slick'
import {URL_API} from '../helper'
import axios from 'axios';
import {getProductAction} from '../actions'
class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    printProducts = () => {
        if (this.props.products.length > 0) {
            return this.props.products.map((item, index) => {
                return <div className="col-md-3">
                    <Card>
                        <CardImg top width="100%" src={item.images[0]} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5" style={{ fontWeight: 'bolder' }}>{item.nama}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{item.kategori}</CardSubtitle>
                            <CardText tag="h5" style={{ fontWeight: 'bolder' }}>Rp. {item.harga.toLocaleString()}</CardText>
                            <Button type="button" outline
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span class="material-icons">
                                    visibility
                        </span>
                                <span>Lihat Sekilas</span>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            })
        }
    }
    handleSort=()=>{
        console.log(this.sortProduct.value,this.sortProduct.value.split('-'))
        let field=this.sortProduct.value.split('-')[0]
        let sortType=this.sortProduct.value.split('-')[1]

        axios.get(URL_API+`/products?_sort=${field}&_order=${sortType}`)
        .then(res=>{
            this.props.getProductAction(res.data)
        }).catch (err=>{
console.log(err)
        })
    }

    render() {
        
        return (
           <div className="container">
                <Input type="select" style={{width:'10vw', float:'right'}}placeholder="Sort Product" onChange={this.handleSort}innerRef={el=>this.sortProduct=el} >
                    <option value="harga-asc">Harga Asc</option>
                    <option value="harga-desc">Harga Desc</option>
                    <option value="nama-asc">A-Z</option>
                    <option value="nama-desc">Z-A</option>
            </Input>
            <div className="container row">
                {this.printProducts()}
            </div>
            </div>
        );
    }
}

const mapToProps = ({ productReducers }) => {
    return {
        products: productReducers.products_list
    }
}

export default connect(mapToProps,{ getProductAction })(ProductsPage);