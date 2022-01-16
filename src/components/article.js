import { Col } from "react-bootstrap";

const Article =( { img, heading, text } )=>{

    //importing image
    var imgSrc= require(`../assets/images/${ img }.jpg`);


    return(
        <Col xs={7} sm={6} md={5} lg={4} xl={3}>
            <div className="img-container">
                <img 
                    src={imgSrc} 
                    alt="article thumbnail"
                    className="article-img"
                />
            </div>
        
            <div className="text-container">
                <h5>
                   { heading }
                </h5>

                <p>
                   { text }
                </p>

                <a className="article-link">
                    Read more
                    &nbsp;
                    &rarr;
                </a>

            </div> 
        </Col>

    );
}

export default Article;