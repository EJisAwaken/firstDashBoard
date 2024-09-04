import LeftBar from "../LeftBar.jsx";
import HeadBar from "../HeadBar.jsx";
import Content from "../Content.jsx";
import Row from "../tables/Row.jsx";

const clients = [
    { Identifiant: '001', Nom: 'Doe', Prenom: 'John', Courrier: 'john.doe@example.com', NumeroTel: '+1234567890' },
    { Identifiant: '002', Nom: 'Smith', Prenom: 'Jane', Courrier: 'jane.smith@example.com', NumeroTel: '+0987654321' },
    { Identifiant: '003', Nom: 'Brown', Prenom: 'Charlie', Courrier: 'charlie.brown@example.com', NumeroTel: '+1122334455' },
    { Identifiant: '004', Nom: 'Johnson', Prenom: 'Emily', Courrier: 'emily.johnson@example.com', NumeroTel: '+2233445566' },
    { Identifiant: '005', Nom: 'Williams', Prenom: 'Michael', Courrier: 'michael.williams@example.com', NumeroTel: '+3344556677' },
    { Identifiant: '006', Nom: 'Jones', Prenom: 'Jessica', Courrier: 'jessica.jones@example.com', NumeroTel: '+4455667788' },
    { Identifiant: '007', Nom: 'Garcia', Prenom: 'David', Courrier: 'david.garcia@example.com', NumeroTel: '+5566778899' },
    { Identifiant: '008', Nom: 'Martinez', Prenom: 'Maria', Courrier: 'maria.martinez@example.com', NumeroTel: '+6677889900' },
    { Identifiant: '009', Nom: 'Davis', Prenom: 'James', Courrier: 'james.davis@example.com', NumeroTel: '+7788990011' },
    { Identifiant: '010', Nom: 'Rodriguez', Prenom: 'Sophia', Courrier: 'sophia.rodriguez@example.com', NumeroTel: '+8899001122' },
    { Identifiant: '011', Nom: 'Hernandez', Prenom: 'Oliver', Courrier: 'oliver.hernandez@example.com', NumeroTel: '+9900112233' },
    { Identifiant: '012', Nom: 'Lopez', Prenom: 'Isabella', Courrier: 'isabella.lopez@example.com', NumeroTel: '+1011121314' },
    { Identifiant: '013', Nom: 'Gonzalez', Prenom: 'Ethan', Courrier: 'ethan.gonzalez@example.com', NumeroTel: '+1213141516' },
    { Identifiant: '014', Nom: 'Wilson', Prenom: 'Ava', Courrier: 'ava.wilson@example.com', NumeroTel: '+1314151617' },
    { Identifiant: '015', Nom: 'Anderson', Prenom: 'Lucas', Courrier: 'lucas.anderson@example.com', NumeroTel: '+1415161718' },
    { Identifiant: '016', Nom: 'Thomas', Prenom: 'Mia', Courrier: 'mia.thomas@example.com', NumeroTel: '+1516171819' },
    { Identifiant: '017', Nom: 'Taylor', Prenom: 'Logan', Courrier: 'logan.taylor@example.com', NumeroTel: '+1617181920' },
    { Identifiant: '018', Nom: 'Moore', Prenom: 'Amelia', Courrier: 'amelia.moore@example.com', NumeroTel: '+1718192021' },
    { Identifiant: '019', Nom: 'Jackson', Prenom: 'Alexander', Courrier: 'alexander.jackson@example.com', NumeroTel: '+1819202122' },
    { Identifiant: '020', Nom: 'Martin', Prenom: 'Charlotte', Courrier: 'charlotte.martin@example.com', NumeroTel: '+1920212223' }
];

export default function Client(){

    return <>
        <div className={'text-center'}>
            <h1 className={"text-xl text-center"}>Client</h1>
            <div>
                <table className={"text-center mx-auto border-red-700"}>
                    <thead>
                    <tr>
                        <th>Identifiant</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>N° Tel</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        clients.map((client) => (
                            <Row key={client.Identifiant} client={client}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    </>
}