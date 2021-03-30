import React from 'react';
import {Container} from 'reactstrap';
import CarouselComp from '../components/carousel';




class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container fluid>
                {/* <h1>Landing Page IKEA Clone</h1> */}
                <CarouselComp/>
            </Container>
         );
    }
}
 
export default LandingPage;