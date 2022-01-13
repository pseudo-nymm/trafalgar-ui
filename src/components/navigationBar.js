
const NavigationBar = ()=> {
   
    //onclick for hamburger button
    const expandList = ()=> {
        const list = document.getElementsByClassName("nav-menu")[0];
        const isExpanded = list.getAttribute("aria-expanded");

        if(isExpanded==="false"){
            list.style.display="block";
            list.setAttribute("aria-expanded","true");

        } else {
            list.style.display="none";
            list.setAttribute("aria-expanded","false");
 
        } 
    } 

    return (

        <nav>
            <span className="logo">
                <span className="ellipse">
                    <a href="#home">
                        T
                    </a>
                </span>

                <span className="brand-name">
                    <a href="#home">
                        Trafalgar 
                    </a>
                </span>  
            </span>

            {/* for larger screens */}
            <span className="collapsible">
                <a href="#home"> Home </a>
                <a href="#services"> Find a Doctor </a>
                <a href="#apps"> Apps </a>
                <a href="#testimonials"> Testimonials </a>
                <a href="#aboutUs"> About Us </a>
            </span>

            {/* for smaller screens */}
            <button className="hamburger-button" onClick={()=>expandList()}>
                <i className="material-icons"> menu </i>
            </button>

            {/* menu that will expand after pressing menu button */}
            <div className="nav-menu" aria-expanded="false">   
                <a href="#home">
                    Home
                </a>
                             
                <a href="#services">
                    Find a Doctor
                </a>
                      
                <a href="#apps">
                    Apps
                </a>
                 
                <a href="#testimonials">
                    Testimonials
                </a>
            
                <a href="#aboutUs">
                    About Us
                </a>
                
            </div>

        </nav>
    );
  }
  
  export default NavigationBar;