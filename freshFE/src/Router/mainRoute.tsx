import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import HomeScreen from "../Pages/Home/HomeScreen"
import AbegDetailDescription from "../Pages/description/AbegDetailDescription"
import ErrorScreen from "../error/Error"
import { FirstStep } from "../component/FirstStep"
import SecondStep from "../component/SecondStep"

export const mainRouter= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
            {
                path: "/description",
                element: <AbegDetailDescription/>
            },
        ]
    },
    
    {
        path: "/first",
        element: <FirstStep/>
    },
    {
        path: "/second-step",
        element: <SecondStep/>
    },
    {
        path: "/third-step",
        // element: <ThirdPage/>
    },
    {
        path: "*",
        element: <ErrorScreen />,
      }
])