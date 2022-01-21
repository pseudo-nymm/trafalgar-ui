import { Col } from "react-bootstrap";

const Service = ( {img, heading, description} )=> {

    //importing image
    var imgSrc = require(`../assets/images/${img}.svg`);
   
    return(
        <Col xs={9} sm={7} md={5} lg={3}>
            <img src={ imgSrc } alt="service" className="servicesImg" />

            <h5>
                { heading }
            </h5>
            
            <p>
               { description }
            </p>

        </Col>

    );
}

export default Service;

  