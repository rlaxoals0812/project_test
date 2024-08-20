import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import About from "../pages/about"


const routes = [
    {path:"/about", element: <About/>},
    
]

const router = createBrowserRouter([{
    path:"/",
    element: <App/>,
    children: routes.map((route)=>{
        return {
            index: route.path ==="/",
            path: route.path === "/" ? undefined : route.path,
            element: route.element
        }

    })
}])

export default router