import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyBill} from "@fortawesome/free-solid-svg-icons";
import Histogrammes from "../Charts/Histogrammes.jsx";

export default function Dashboard(){

    return <>
        <div className={''}>
            <h1 className={"text-xl text-center"}>Dashboard</h1>
            <div className={"grid grid-cols-3 gap-4 m-4"}>
                <div className={"bg-green-200 p-2"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1>Chiffre D'Affaire : <span><FontAwesomeIcon icon={faMoneyBill}/></span>  </h1>
                    <p className={"text-3xl"}>
                        {"50 000 Ar"}
                    </p>
                </div>

                <div className={"bg-blue-200 p-2"}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <h1>Nombre de Client : <span><FontAwesomeIcon icon={faMoneyBill}/></span>  </h1>
                    <p className={"text-3xl"}>
                        {"50 000 Ar"}
                    </p>
                </div>

                <div className={"bg-blue-100 p-2"}>
                    <h1>Nombre de Produit : <span><FontAwesomeIcon icon={faMoneyBill}/></span>  </h1>
                    <p className={"text-3xl"}>
                        {"50 000 Ar"}
                    </p>
                </div>
            </div>
            <div>
                <Histogrammes/>
            </div>
        </div>
    </>
}