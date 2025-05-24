import App from "@/App";
import MainLayout from "@/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";


const Router = createBrowserRouter([
    {
         path: "/",
        element: <MainLayout/>,
        // errorElement : <ErrorPage/>,
        children : [
            {
                path : "/",
                element : <App/>
            },
        ]
    }
]) 

export default Router;