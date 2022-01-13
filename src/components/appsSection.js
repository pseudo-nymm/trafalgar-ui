import { Container, Row, Col, Button } from "react-bootstrap";
import illustration3 from "../assets/images/illustration3.svg";

const AppsSection = ()=>{
    return(
        <Container 
            fluid
            className="apps-section"
            id="apps"
        >
            <Row>
                <Col md={4} className="text-col">
                    <h4>
                        Download our Mobile Apps
                    </h4>

                    <hr />

                    <p>
                        Our dedicated patient engagement app and 
                        web portal allow you to access information instantaneously (no tedious form, long calls, 
                        or administrative hassle), and securely
                    </p> 
                    
                    <Button className="ghost-button">
                        Download  &nbsp; &darr;
                    </Button>
                </Col>

                <Col md={7} className="img-col">
                    <img 
                        src={ illustration3 }
                        className="illustration" 
                        alt="illustration for downloading mobile app">
                    </img>
                </Col>

            </Row>
        </Container>
        );

}

export default AppsSection;