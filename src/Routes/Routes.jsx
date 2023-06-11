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
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import FourOFour from "../Pages/FourOFour/FourOFour";


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
          path:'classpage',
          element:<ClassesPage></ClassesPage>
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
        {
          path: 'manageclass',
          element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
      ]
    },
    {
      path: '*',
      element:<FourOFour></FourOFour>
    }
  ]);