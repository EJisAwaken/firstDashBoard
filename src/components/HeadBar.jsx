import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faHouse} from "@fortawesome/free-solid-svg-icons";

export default function HeadBar(){

    return <>
        <div className={"p-5 flex justify-between items-center font-extrabold bg-blue-100"}>
            <FontAwesomeIcon icon={faBars} className={"text-3xl cursor-pointer"}/>
            <h1>ESOALAHY JOSEFA</h1>
        </div>
    </>
}