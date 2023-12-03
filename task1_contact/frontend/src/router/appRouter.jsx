import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "../app/App";
import RegistrationForm from "../components/RegistrationForm";

function AppRouter (){
    const router = createBrowserRouter([
            {path:"/",
            children:[
                {path:"/",
            element:<App/>},
        
        {
            path:"/form",
            element:<RegistrationForm/>
        }
        ]
            }
        ])

return (


<RouterProvider router={router}/>

)

}
export default AppRouter