import {Chart as ChartJS} from 'chart.js/auto';
import { Bar, Doughnut, Line } from'react-chartjs-2';
function Histogrammes() {
    // Couleurs personnalisées pour chaque barre
    const backgroundColors = ['#FF6384', 'blue', 'darkblue'];

    return (
        <>
            <div style={{ width: '1000px', height: '600px', margin: "auto"}}>
                <Line data={{
                    labels: ['Chiffre dAffaire', 'Client', 'Salaire Moyenne'],
                    datasets: [
                        {
                            label: "Histogrammes de l'Entreprise",
                            data: [50, 100, 25],
                            backgroundColor: backgroundColors, // Utilisation des couleurs définies
                        },
                    ]
                }} />
            </div>
        </>
    )
}

export default Histogrammes;
