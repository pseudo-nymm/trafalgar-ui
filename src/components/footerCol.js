import {Col} from "react-bootstrap";


const FooterCol = ( {heading, options})=>{
   
    return(
    
        <Col className="d-none d-lg-block" sm={5} lg={2}>
    
            <h5>
                { heading } 
            </h5>

            <ul>
                 { 
                    options.map((option) => (
                        <li key={ option } > 
                            <a>{ option }</a>
                        </li>
                    ))  
                } 
            </ul>
        </Col>        
    );
}

export default FooterCol;

 
    


           