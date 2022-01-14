import NavigationBar from "./components/navigationBar";
import Header from "./components/header";
import ServicesSection from "./components/servicesSection";
import AboutUsSection from "./components/aboutUsSection";
import AppsSection from "./components/appsSection";
import TestimonialsSection from "./components/testimonialsSection";
import ArticlesSection from "./components/articlesSection";
import Footer from "./components/footer";

const App =()=> {

  return (
   <div>
     <NavigationBar />
     <Header />
     <ServicesSection />
     <AboutUsSection />
     <AppsSection /> 
     <TestimonialsSection />
     <ArticlesSection />
     <Footer />
     
   </div>
  );
}

export default App;
