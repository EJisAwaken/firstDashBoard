import Button from "./Button.jsx";
import {createBrowserRouter, NavLink} from "react-router-dom";



export default function LeftBar(){

    return <>
        <div className={'bg-gray-50 text-center'}>
            {/* Info sur l'admin*/}
            <div className={"text-center"}>
                <div className={"bg-blue-800 rounded-b-full"}>
                    <img
                        src={"src/assets/photoPdg.png"}
                        className={"w-[150px] h-[180px] m-auto"}
                    />
                </div>

                <h1 className={"my-4 bg-blue-900 w-10/12 text-center mx-auto rounded-2xl text-l text-white"}>Esoalahy Josefa</h1>
            </div>
            <div className={"grid text-center"}>
                <NavLink to={"/dashboard"}>{<Button value={"Dashboard"}/>}</NavLink><br/>
                <NavLink to={"/client"}>{<Button value={"Client"}/>}</NavLink><br/>
                <NavLink to={"/achat"}>{<Button value={"Achat"}/>}</NavLink><br/>
                <NavLink to={"/produit"}>{<Button value={"Produit"}/>}</NavLink>
            </div>

        </div>
    </>
}