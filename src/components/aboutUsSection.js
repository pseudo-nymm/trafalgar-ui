import { Container, Row, Col, Button } from "react-bootstrap";
import illustration2 from "../assets/images/illustration2.svg"
import BgDots from "../assets/images/bgDots.svg";

const AboutUsSection = ()=>{

    return(

        <Container fluid className="about-us-section" id="aboutUs">
        <img src={ BgDots } alt="" className="bg-dots-1"/>

            <Row>
                <Col  md={6} className="img-col">
                    <img 
                        src={ illustration2 } 
                        alt="healthcare providers"
                        className="illustration" 
                    />
    
                </Col>

                <Col  md={4} className="text-col">
    
                    <h4>
                        Leading Healthcare Providers
                    </h4>

                    <hr />

                    <p>
                        Trafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                        in the solutions we deliver
                    </p>

                    <Button className="ghost-button">
                        Learn more
                    </Button>
                </Col>
            </Row>
        </Container>
        
    );

}

export default AboutUsSection;