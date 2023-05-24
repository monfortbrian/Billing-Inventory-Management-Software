import React from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
    const options = {
        chart: {
            type: "donut",
        },
        legend: {
            show: true,
            position: "bottom",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        colors: ["#38A169", "#001529", "#66DA26", "#546E7A", "#62bd62"],
    };
    const series = [44, 55, 41, 17, 15];

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="donut" />
        </div>
    );
};

export default PieChart;
