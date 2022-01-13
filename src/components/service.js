import { Col } from "react-bootstrap";

const Service = ( {img, heading, description} )=> {

    //importing image
    var imgSrc= require(`../assets/images/${ img }.svg`).default;

    return(
        <Col xs={9} sm={7} md={5} lg={3}>
            <img src={ imgSrc } alt="" className="servicesImg" />

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