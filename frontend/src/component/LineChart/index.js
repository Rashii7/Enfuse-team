import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";





const LineChart = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        xAxes: [
            {
                maxBarThickness: 50,
            },
        ],
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 2",
                data: [900, 750, 800, 200, 300, 450],
                barThickness: 16,
                backgroundColor: "#B6D9FF",
                borderRadius: 5,
                hoverBackgroundColor:
                    "linear-gradient(219.09deg, #D320C1 9.2%, #C624C6 27.68%, #1461FF 83.68%)",
            },
        ],
    };

    return (
        <div style={{ width: "100%", height: 300 }}>
            <Bar options={options} data={data} />
        </div>
    );
};

export default LineChart;