import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/HomePage/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <h2>Error</h2>,
      children: [
        {
          path: "/",
          element: <Home></Home> ,
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element : <SignUp></SignUp>
        },
        {
          path : 'checkout/:id',
          element : <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path : '/bookings',
          element : <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
       
      ],
    },
  ]);

export default router  ;