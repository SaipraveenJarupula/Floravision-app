import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mainplant from "./components/Mainplant";
import Review from "./components/Review";
import Trendingplant1 from "./components/Trendingplant1";
import Trendingplant2 from "./components/Trendingplant2";
import Sellingplant from "./components/Sellingplant";   
import CustomerReview from "./components/CustomerReview";
import Best from "./components/Best";
import Footer from "./components/Footer";

function App() {
  return (
              <div> 
                <Navbar /> 
                <Hero/> 
                <Mainplant/> 
                <Review/> 
                <Trendingplant1/>
                <Trendingplant2/>
                 <Sellingplant/> 
                 <CustomerReview/>
                 <Best/>
                 <Footer/>
                 </div> 
  ); 

}
export default App;
