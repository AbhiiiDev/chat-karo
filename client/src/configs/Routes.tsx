import {createBrowserRouter, RouteObject} from 'react-router-dom';
import HomePage from '../views/HomePage';
import Chat from '../components/Chat';



const routes:RouteObject[]=[
    {
        path:"/",
        children:[
            {
                path:"",
                element:<HomePage/>,
            },
            {
                path:"/chat",
                element:<Chat/>
            }
        ]

    }
]



const router=createBrowserRouter(routes);
export default router;