
import {
createBrowserRouter,
} from "react-router-dom";
import './index.css'
import Main from "../Layout/Main";
import Home from "../navItems/Home";
import Instructors from "../navItems/Instructors";
import Classes from "../navItems/Classes";
import Dashboard from "../navItems/Dashboard";
import Login from "../navItems/Login";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
  
      },
      {
        path:"/instructors",
        element:<Instructors></Instructors>
      },
      {
        path:'/classes',
        element:<Classes></Classes>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);