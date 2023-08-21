
import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import './index.css'
import Main from "../Layout/Main";
import Home from "../navItems/Home";
import Instructors from "../navItems/Instructors";
import Classes from "../navItems/Classes";
import Login from "../navItems/Login";
import SignUp from "../navItems/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../navItems/Secret";
import ErrorPage from "../Layout/ErrorPage";
import SelectClass from "../navItems/SelectClass";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
export const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage message="Oops! Something went wrong."></ErrorPage>
  },
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
  
      {
        path: "/instructors",
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },

      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
      },
      {
        path:'/selectclass',
        element:<PrivateRoutes><SelectClass></SelectClass></PrivateRoutes>
      }
   
    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
{
  path:'mycart',
  element:<MyCart></MyCart>
}
    ]
  }
]);




