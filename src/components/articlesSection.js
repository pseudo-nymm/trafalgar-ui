import { Container, Row, Button } from "react-bootstrap";
import BgBlob1 from "../assets/images/bgBlob1.svg";
import BgDots from "../assets/images/bgDots.svg";
import { useState } from "react";
import Article from "./article";

const ArticlesSection = ()=>{
    const [articles] = useState([
        {
            img: "bloodtest",
            heading: " Disease detection, check up in the laboratory",
            text: `In this case, the role of the health laboratory is very 
                   important to do a disease detection...`
        },

        {
            img: "herbalmedicine",
            heading: "  Herbal medicines that are safe for consumption",
            text: `Herbal medicine is very widely used at this 
                   time because of its very good for your health...`
        },

        {
            img: "skincare",
            heading: " Natural care for healthy facial skin",
            text: `A healthy lifestyle should start from now and also for
                   your skin health. There are some...`
        }
    ]

    );

    return(
        <Container fluid className="articles-section">
            <img src={ BgDots } alt="" className="bg-dots-1"/>

            <Row> 
                <h3> 
                    Check Out Our Latest Articles
                </h3>

                <hr />
            </Row>
            
            <Row className="articles-row">
                <img src={ BgBlob1 } alt="" className="bg-blob-1"/>
                {
                    articles.map((article)=>(
                        <Article 
                            key={ article.heading } 
                            img={ article.img }
                            heading={ article.heading }
                            text={ article.text }
                        />
                    )) 
                }

            </Row>

            <Row>
                <Button className="ghost-button"> View all </Button>
            </Row>

            


           {/*  Photo by <a href="https://unsplash.com/@hush52?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hush Naidoo Jade Photography</a> on <a href="https://unsplash.com/s/photos/blood-test?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            Photo by <a href="https://unsplash.com/@momentance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">SwapnIl Dwivedi</a> on <a href="https://unsplash.com/s/photos/herbal-medicines?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            Photo by <a href="https://unsplash.com/@enginakyurt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">engin akyurt</a> on <a href="https://unsplash.com/s/photos/facial-mask?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
  
  
        </Container>
    );
}

export default ArticlesSection;