export default function RowProduit({produit}){

    return <>
        <tr>
            <td>{produit.NomProduit}</td>
            <td>{produit.Description}</td>
            <td>{produit.Prix}</td>
        </tr>
    </>
}