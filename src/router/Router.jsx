import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Login from "../components/loginForm/Login";
import Signup from "../components/signupForm/Signup";
import Homepage from "../pages/homepage/Homepage";
import Error from "../pages/errorPage/Error";
import Add_tourists from "../pages/add_tourists/Add_tourists";
import All_tourists from "../pages/all_tourists/All_tourists";
import My_list from "../pages/my_list/My_list";
import PrivateRoutes from "./Private_routes";
import Details from "../pages/all_tourists/Details";
import SingleCountry from "../components/coutries/SingleCountry";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/add_tourists_spot",
                element: <PrivateRoutes><Add_tourists /></PrivateRoutes>
            },
            {
                path: "/all_tourists_spot",
                element: <All_tourists />
            },
            {
                path: "/my_list",
                element: <PrivateRoutes><My_list /></PrivateRoutes>
            },
            {
                path: "/all_tourists_spot/details",
                element: <PrivateRoutes><Details /></PrivateRoutes>
            },
            {
                path: "/specific_Country_Spot",
                element: <SingleCountry />
            }
        ]
    }

]);

export default router;