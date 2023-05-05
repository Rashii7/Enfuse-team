import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Doughnutchart({ labels, datasets }) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    fontColor: "#fff",
                    padding: 20,
                },
            },
        },
    };

    const data = {
        labels: ["High", "Medium", "Low"],
        datasets: [
            {
                data: [19, 12, 3],
                backgroundColor: ["#D81B60", "#01058A", "#FF9800"],
                hoverBorderColor: ["#D81B60", "#01058A", "#FF9800"],
                hoverBorderWidth: 3,
            },
        ],
    };

    const customData = {
        labels: [...labels],
        datasets: [{
            data: datasets,
            backgroundColor: ["#D81B60", "#01058A", "#FF9800", "#D0598c", "#BF1980"],
            hoverBorderColor: ["#D81B60", "#01058A", "#FF9800", "#D0598c", "#BF1980"],
            hoverBorderWidth: 3,
        },],
    };

    return (
        <div
            className="px-3"
            style={{ width: "100%", height: 350, textAlign: "center" }}
        >
            <Doughnut
                data={labels ? customData : data}
                options={options}
            />
        </div>
    );
}
