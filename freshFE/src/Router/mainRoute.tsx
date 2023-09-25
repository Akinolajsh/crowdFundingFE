import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import HomeScreen from "../Pages/Home/HomeScreen"
import AbegDetailDescription from "../Pages/description/AbegDetailDescription"

export const mainRouter= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    },
    {
        path: "/description",
        element: <AbegDetailDescription/>
    }
])