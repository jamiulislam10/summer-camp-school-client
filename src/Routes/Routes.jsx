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
import Payment from "../Pages/Dashboard/Payment/Payment";
import Instructor from "./Instructor";
import SelectedClass from "../Pages/SelectedClass/SelectedClass";
import InstructorPage from "../Pages/InstructorPage/InstructorPage";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory";


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
        },
        {
          path:'instructorpage',
          element:<InstructorPage></InstructorPage>
        },
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
          path: 'payment',
          element:<Payment></Payment>
        },
        {
          path: 'pay',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path: 'addItem',
          element:<Instructor><AddItem></AddItem></Instructor>
        },
        {
        path: 'selectedclass',
          element:<Instructor><SelectedClass></SelectedClass></Instructor>
        },

        // admin routes
        {
          path: 'allusers',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
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