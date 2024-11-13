import {createBrowserRouter, RouteObject} from 'react-router-dom';
import HomePage from '../views/HomePage';



const routes:RouteObject[]=[
    {
        path:"/",
        children:[
            {
                path:"",
                element:<HomePage/>,
            }
        ]

    }
]



const router=createBrowserRouter(routes);
export default router;