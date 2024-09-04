import HeadBar from "./components/HeadBar.jsx";
import LeftBar from "./components/LeftBar.jsx";
import Content from "./components/Content.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCat, faDog, faHouse} from "@fortawesome/free-solid-svg-icons";
import {BrowserRouter, createBrowserRouter, NavLink, Outlet, Route, RouterProvider, Routes} from "react-router-dom";
import Accueil from "./components/pages/Accueil.jsx";
import Client from "./components/pages/Client.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Achat from "./components/pages/Achat.jsx";
import Produit from "./components/pages/Produit.jsx";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Rooter/>,
            children: [
                {
                    path: "",
                    element : <Accueil/>
                },
                {
                    path: "/client",
                    element: <Client/>
                },
                {
                    path: "/dashboard",
                    element: <Dashboard/>
                },
                {
                    path: "/achat",
                    element: <Achat/>
                },
                {
                    path: "/produit",
                    element: <Produit/>
                }

                ]
        }
    ]
)

function Rooter(){
    return <>
        <div>
            <div>
                <HeadBar/>
            </div>
            <div className={"grid grid-cols-[300px_auto]"}>
                <LeftBar/>
                <Content outlet={<Outlet/>}/>
            </div>
        </div>
    </>
}


function App() {
    return <>
        <RouterProvider router={router}/>
    </>
}

export default App
