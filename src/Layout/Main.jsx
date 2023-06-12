import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Nav+Footer/Navbar";
import Footer from "../Nav+Footer/Footer";


const Main = () => {
  const location =useLocation();
  console.log(location);
  const noHeaderFooter =location.pathname.includes('login') ||location.pathname.includes('signup')
    return (
        <div>
         { noHeaderFooter || <Navbar></Navbar> } 
          <Outlet></Outlet>
          { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;