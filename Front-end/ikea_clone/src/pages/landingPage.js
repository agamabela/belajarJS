import React from 'react';
import {Container,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import CarouselComp from '../components/carousel';
import {connect} from 'react-redux'
import { productReducers } from '../reducers/productReducers';
import Slider from 'react-slick'



class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    printProducts = () => {
        if (this.props.products.length > 0) {
            return this.props.products.map((item, index) => {
                return <div>
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

   
    render() { 
        const settings ={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:2,
            slidesToScroll:2,
        }
        return ( 
            <Container fluid>
                
                {/* <h1>Landing Page IKEA Clone</h1> */}
                <CarouselComp/>
                <Slider {...settings}>
                    {this.printProducts()}

                </Slider>

            </Container>
         );
    }
}
const mapToProps= ({productReducers})=>{
    return{
        products: productReducers.products_list
    }
}
export default connect (mapToProps, {productReducers})(LandingPage);