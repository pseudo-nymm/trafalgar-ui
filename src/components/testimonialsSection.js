import { Container, Row } from "react-bootstrap";
import Testimonial from "./testimonial";
import BgDots from "../assets/images/bgDots.svg";
import BgDots2 from "../assets/images/bgDots2.svg";
import rightArrow from "../assets/images/rightArrow.svg";
import { useEffect, useState } from "react";

const TestimonialsSection = ()=>{ 

    const [testimonials] = useState(
        [
            {
            img: "customer1",
            name: "Edward Newgate",
            details: "Founder Circle",
            text: `“Our dedicated patient engagement 
                    app and web portal allow you to access 
                    information instantaneously (no tedeous 
                    form, long calls, or administrative hassle) and securely”` 
            },
    
            {
            img: "customer2",
            name: "Customer 2",
            details: "Lorem Ipsum",
            text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
                    faucibus dapibus nisi, et placerat purus suscipit eu. Morbi ut 
                    sollicitudin ligula.”`
            },
    
            {
            img: "customer3",
            name: "Customer 3",
            details: "Lorem Ipsum",
            text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
                    faucibus dapibus nisi, et placerat purus suscipit eu. Morbi ut 
                    sollicitudin ligula.”`
            },
    
            {
            img: "customer4",
            name: "Customer 4",
            details: "Lorem Ipsum",
            text: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
                    faucibus dapibus nisi, et placerat purus suscipit eu. Morbi ut 
                    sollicitudin ligula.”`
            }
        ] 
    );

    var slideIndex = 1;

    const showSlides= (n)=> {
        
        var slides = document.getElementsByClassName("carousel-row");
        var i;
        var dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        } 
    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    
        slides[slideIndex-1].style.display = "flex";
        dots[slideIndex-1].className += " active"; 
        

    }
    
    // Next/previous controls
    const plusSlides= (n)=> {
        showSlides(slideIndex += n);
    }
    
    const currentSlide= (n)=>{
        showSlides(slideIndex = n);
    }

    //displaying slides right after component mounts
    useEffect(()=>{
        showSlides(slideIndex);

        }
    );

    return(
        <div className="testimonials-section" id="testimonials">
            <img src={ BgDots } alt="" className="bg-dots-1"/>

            <div className="carousel-div">
                <Container fluid className="carousel-container">
                    <img src={ BgDots2 } alt="" className="bg-dots-2"/>

                    <Row className="heading-row">
                        <h6>
                            What our Customers are Saying
                        </h6>

                        <hr />
                        
                    </Row>
                    {
                        testimonials.map( (testimonial) => (

                            <Testimonial 
                                key={ testimonial.name }
                                img={ testimonial.img }
                                name={ testimonial.name }
                                details={ testimonial.details }
                                text={ testimonial.text }
                            />
                        ))
                    } 

                </Container>
            </div>        
               
            <div className="carousel-controls">
                <div>
                    <img 
                        src={rightArrow} 
                        alt="" 
                        className="prev" 
                        onClick={()=>plusSlides(-1)}
                    />
                    <span className="dot" onClick={()=>currentSlide(1)}></span>
                    <span className="dot" onClick={()=>currentSlide(2)}></span>
                    <span className="dot" onClick={()=>currentSlide(3)}></span>
                    <span className="dot" onClick={()=>currentSlide(4)}></span>
                    <img 
                        src={rightArrow} 
                        alt="" 
                        className="next" 
                        onClick={()=>plusSlides(1)}
                    />

                </div>
            </div>
         
        </div>      
    );

  /*   Photo by <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> on <a href="https://unsplash.com/s/photos/person?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> 
  Photo by <a href="https://unsplash.com/@chrisjoelcampbell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christopher Campbell</a> on <a href="https://unsplash.com/s/photos/person?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  Photo by <a href="https://unsplash.com/@ethanchoover?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ethan Hoover</a> on <a href="https://unsplash.com/s/photos/person?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  */
  

}
 export default TestimonialsSection;