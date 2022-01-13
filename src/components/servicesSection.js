import { Container, Row, Button } from "react-bootstrap";
import Service from "./service";
import BgBlob1 from "../assets/images/bgBlob1.svg";
import BgDots from "../assets/images/bgDots.svg";
import { useState } from "react";
  
const ServicesSection = ()=>{
    const [services] = useState([
        {
            img: "servicesImg1",
            heading: "Search doctor",
            description: ` Choose your doctor from thousands of specialist, 
                            general, and trusted hospitals`
        },

        {
            img: "servicesImg2",
            heading: "Online pharmacy",
            description: `Buy your medicines with our mobile application with 
                          a simple delivery system `
        },

        {
            img: "servicesImg3",
            heading: "Consultation",
            description: ` Free consultation with our trusted doctors and get the best 
                           recomendations `
        },

        {
            img: "servicesImg4",
            heading: "Detailed info",
            description: `Free consultation with our trusted doctors 
                          and get the best recomendations`
        },

        {
            img: "servicesImg5",
            heading: "Emergency care",
            description: `You can get 24/7 urgent care for yourself or your children and your
                          lovely family`
        },

        {
            img: "servicesImg6",
            heading: "Tracking",
            description: ` Track and save your medical history and health data `
        },
    ]);

    return(
        <Container fluid className="services-section" id="services">
            
            <Row className="top-row">
                <Row>
                    <h2>
                        Our Services
                    </h2>
                    <hr/>
                    <p>
                        We provide to you the best choiches for you. 
                        Adjust it to your health needs and make sure your 
                        undergo treatment with our highly qualified 
                        doctors you can consult with us which type of 
                        service is suitable for your health
                    </p>
                </Row>
                
            </Row>

            <div className="services-div">
                <img src={ BgBlob1 } alt="" className="bg-blob-1"/> 

                <img src={ BgDots } alt="" className="bg-dots-1"/> 

                <Row  gx={0}>
                    {
                        services.map(( service )=>(
                            <Service 
                                key={ service.heading }
                                img={ service.img }
                                heading={ service.heading }
                                description={ service.description }
                            />
                        )
                        )
                    }
                </Row>
            </div>
            <Row>
                <Button className="ghost-button">
                    Learn more
                </Button>
            </Row>
           
    
        </Container>



    );
}

export default ServicesSection;