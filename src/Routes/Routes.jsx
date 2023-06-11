import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import StudentDb from "../Pages/Dashboard/StudentDb";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../Pages/Dashboard/AllUser";
import Class from "../Pages/Class/Class";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<SignUp></SignUp>
        },
        {
          path:'class',
          element:<Class></Class>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'studentsdb',
          element:<StudentDb></StudentDb>
        },
        {
          path: 'allusers',
          element:<AllUser></AllUser>
        },
        {
          path: 'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
      ]
    }
  ]);