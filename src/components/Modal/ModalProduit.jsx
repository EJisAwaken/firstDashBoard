import Input from "../forms/Input.jsx";
import {useState} from "react";
import Button from "../Button.jsx";

export default function ModalProduit() {

    const [nomProduit, setNomProduit] = useState("")
    const [prixProduit, setPrixProduit] = useState("")
    const [descriptionProduit, setDescritionProduit] = useState("")

    return <>
        <div className={"my-2"}>
            <h1>Veuillez remplir ces informations : </h1>
        </div>
        <div>
            <form>
                <label>Nom du produit : </label><br/>
                <Input type={"text"} value={nomProduit} onChange={setNomProduit}/>
                <br/><br/>
                <label>Prix du produit (Ariary) : </label><br/>
                <Input type={"number"} value={prixProduit} onChange={setPrixProduit}/><br/><br/>
                <label>Description du produit : </label><br/>
                <Input type={""} value={descriptionProduit} onChange={setDescritionProduit}/><br/><br/>
                <button
                    onClick={(e) => e.preventDefault()}
                    className={"bg-green-400 p-3 rounded-3xl w-1/3 hover:bg-green-500"}
                >
                    Enregistrer
                </button>
            </form>
        </div>


    </>
}