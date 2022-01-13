import { Container, Row, Col, Button } from "react-bootstrap";
import illustration1 from "../assets/images/illustration1.svg";
import bgDots from "../assets/images/bgDots.svg";

const  Header =()=> {
    return (
      <header  id="home"> 
        <Container fluid>

          <img src={ bgDots } alt="" className="bg-dots-1"/>
          <Row >
              <Col className="header-text-col" xs={11} md={9} lg={4}>
                <h2>
                  Virtual Healthcare for You
                </h2>

                <p>
                  Trafalgar provides progressive and affordable 
                  healthcare, accessible on mobile and online 
                  for everyone
                </p>

                <Button>
                  Consult today
                </Button>

              </Col>

              <Col className="header-img-col"  xs={11} md={9} lg={6}>
                <img 
                  src={ illustration1 } 
                  alt="header illustration" 
                  className="illustration">
                </img>

              </Col>
          </Row>
        </Container>
      </header>
    );
  }
  
  export default Header;