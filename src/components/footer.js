import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterCol from "./footerCol";
import BgDots2 from "../assets/images/bgDots2.svg";
import BgDots from "../assets/images/bgDots.svg";

const Footer = ()=>{

    const [menus] = useState(
        [
            {
                heading: "Company",
                options: ["About", "Testimonials", "Find a doctor", "App"]
            },

            {   
                heading: "Region",
                options: ["Indonesia", "Singapore", "Hong Kong", "Canada"]
            },

            {
                heading: "Help",
                options: ["Help center", "Contact Support", "Instructions", "How it works"]
            }
        ]
    );

    const expandList = (index)=> {

        const cMenu = document.getElementsByClassName("collapsible-menu")[index];
        
        const isExpanded = cMenu.getAttribute("aria-expanded");
        
        if(isExpanded==="false"){
           
            cMenu.style.display="block";
            cMenu.setAttribute("aria-expanded","true");
           
        } else {
            cMenu.style.display="none";
            cMenu.setAttribute("aria-expanded","false");
            
        } 
    } 

    return(  
         <footer id="footer"> 
            <img src={ BgDots } alt="" className="bg-dots-1"/> 
           
            <Container fluid>
                <img src={ BgDots2 } alt="" className="bg-dots-2"/>  
                
                <Row >
                    <Col xs={12} md={5} lg={4} >
                        <div className="logo">
                            <a className="logo-ellipse" >
                                T
                            </a>

                            <p className="brand-name">
                                Trafalgar
                            </p>  
                           
                        </div>

                        <p>
                            Trafalgar provides progressive and affordable healthcare, 
                            accessible on mobile and online for everyone
                        </p>

                        <p className="d-none d-lg-block">
                            ©Trafalgar PTY LTD 2020. All rights reserved
                        </p>
  
                    </Col> 
                    
                    {  
                        //building remaining 3 footer columns for larger screens
                        menus.map( (menu) => (
                             <FooterCol
                                key={ menu.heading }
                                heading={ menu.heading }
                                options={ menu.options }
                            /> 
                        ))
                    } 

                    <Col className="accordian-col d-block d-lg-none" xs={12} md={5}>
                    {
                        //accordian for smaller screens 
                        menus.map((menu, index) => (
                            <div className="menu-wrapper" key={ menu.heading }>
                                <button className="accordian" onClick={() => expandList(index)}>
                                    { menu.heading }
                                </button>

                                <div className="collapsible-menu" aria-expanded="false">
                                   { 
                                        menu.options.map((option) => (
                                            <p  key={ option } > 
                                               <a>{ option }</a> 

                                            </p>
                                        ) )
                                    }  
                                </div>
                            </div>
                        ))
                    }
                    </Col> 
                </Row>

                <Row className="copyright-row d-block d-lg-none">
                    <p>
                        ©Trafalgar PTY LTD 2020. All rights reserved
                    </p>
                </Row>
                
            </Container> 
           
        </footer>     
    );
}

export default Footer;