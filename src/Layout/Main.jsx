import { Outlet } from "react-router-dom";
import Navbar from "../Nav+Footer/Navbar";
import Footer from "../Nav+Footer/Footer";


const Main = () => {
    return (
        <div>
          <Navbar></Navbar>  
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Main;