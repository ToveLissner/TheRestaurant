import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
    {path:"/", element: <App/>, children:[
        // {path:"/home",element:</Home>, index:true},{path:"/contact",element:</Contact>},{path:"/booking",element:</Booking>}
    ]}
]);