import { Row, Col } from "react-bootstrap";


const Testimonial =({img, name, details, text})=>{
    //importing image
    var imgSrc= require(`../assets/images/${img}.jpg`).default;
  
    return(
        <Row className="carousel-row fade" >

            <Col className="customer-col" xs={11} md={11} lg={5}>
            
               <span className="img-frame">
                    <span className="img-wrapper">
                        <img src={ imgSrc } alt="customer profile"/>
                    </span> 
               </span>
            
                <span>
                    <p className="customer-name">
                        { name }
                    </p>

                    <p className="customer-details">
                        { details }
                    </p>

                </span>

            </Col>

            <Col className="testimonial-col" xs={11} md={11} lg={5}>

                <p className="testimonial">
                    { text }
                </p>
            </Col>
        </Row>
    );
}
export default Testimonial;