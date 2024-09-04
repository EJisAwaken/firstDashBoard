import Row from "../tables/Row.jsx";
import {useState} from "react";
import ModalProduit from "../Modal/ModalProduit.jsx";
import RowProduit from "../tables/RowProduit.jsx";

export default function Produit(){

    const produits = [
        { NomProduit: 'Ordinateur Portable', Description: 'Ordinateur portable avec processeur Intel Core i7', Prix: '1200€' },
        { NomProduit: 'Smartphone', Description: 'Smartphone Android avec écran AMOLED', Prix: '800€' },
        { NomProduit: 'Tablette', Description: 'Tablette 10 pouces avec 64Go de stockage', Prix: '400€' },
        { NomProduit: 'Casque Audio', Description: 'Casque audio sans fil avec réduction de bruit', Prix: '250€' },
        { NomProduit: 'Souris Gaming', Description: 'Souris de gaming avec 16000 DPI', Prix: '60€' },
        { NomProduit: 'Clavier Mécanique', Description: 'Clavier mécanique rétroéclairé', Prix: '100€' },
        { NomProduit: 'Écran 4K', Description: 'Écran 4K de 27 pouces', Prix: '500€' },
        { NomProduit: 'Disque Dur Externe', Description: 'Disque dur externe de 2 To', Prix: '90€' },
        { NomProduit: 'Imprimante Laser', Description: 'Imprimante laser monochrome', Prix: '150€' },
        { NomProduit: 'Caméra de Surveillance', Description: 'Caméra de surveillance avec vision nocturne', Prix: '120€' },
        { NomProduit: 'Routeur Wi-Fi', Description: 'Routeur Wi-Fi double bande', Prix: '70€' },
        { NomProduit: 'Clé USB 128Go', Description: 'Clé USB avec cryptage matériel', Prix: '30€' },
        { NomProduit: 'Enceinte Bluetooth', Description: 'Enceinte Bluetooth portable avec basses améliorées', Prix: '85€' },
        { NomProduit: 'Montre Connectée', Description: 'Montre connectée avec suivi d\'activité', Prix: '200€' },
        { NomProduit: 'Projecteur', Description: 'Projecteur LED Full HD', Prix: '300€' },
        { NomProduit: 'Chargeur Solaire', Description: 'Chargeur solaire portable', Prix: '50€' },
        { NomProduit: 'Boîtier PC', Description: 'Boîtier PC ATX avec panneau en verre trempé', Prix: '120€' },
        { NomProduit: 'Ventilateur PC', Description: 'Ventilateur RGB pour PC', Prix: '25€' },
        { NomProduit: 'SSD 1To', Description: 'SSD interne NVMe 1 To', Prix: '150€' },
        { NomProduit: 'Carte Mère', Description: 'Carte mère ATX pour processeurs Intel', Prix: '180€' }
    ];


    const [showModal, setShowModal] = useState(true)

    const handleModal = ()=>{
        setShowModal(!showModal)
    }

    return <>
        <div className={''}>
            <h1 className={"text-xl text-center"}>Produit</h1>
            <div>
                <button className={"bg-green-400 p-2 m-6 rounded-2xl text-white cursor-pointer hover:bg-green-500"} onClick={handleModal} >Ajouter un produit</button>
            </div>

            {
                showModal ?
                    <div className={"bg-green-100 rounded-2xl absolute w-[400px] h-[400px] text-center m-auto"}>{
                        <ModalProduit/>
                    }
                    </div>  : undefined
            }

            <div>
                <table className={"text-center mx-auto border-red-700"}>
                    <thead>
                    <tr>
                        <td>Nom produit</td>
                        <td>Description</td>
                        <td>Prix</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        produits.map((produit) => (
                            <RowProduit key={produit.NomProduit} produit={produit}/>))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    </>
}