export default function Row({client}){
    return <>
        <tr>
            <td>{client.Identifiant}</td>
            <td>{client.Nom}</td>
            <td>{client.Prenom}</td>
            <td>{client.Courrier}</td>
            <td>{client.NumeroTel}</td>
        </tr>
    </>
}