
import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import './index.css'
import Main from "../Layout/Main";
import Home from "../navItems/Home";
import Instructors from "../navItems/Instructors";
import Classes from "../navItems/Classes";
import Dashboard from "../navItems/Dashboard";
import Login from "../navItems/Login";
import SignUp from "../navItems/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../navItems/Secret";
import ErrorPage from "../Layout/ErrorPage";
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
        path: "/dashboard",
        element: <Dashboard></Dashboard>
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
      }
     
   
    ]
  },
]);




