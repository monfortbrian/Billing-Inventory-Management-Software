import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
    const series = [
        {
            name: "Payment sent",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: "Payment received",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ];

    const options = {
        chart: {
            with: "100%",
            height: 350,
            type: "line",
            zoom: {
                enabled: false,
            },
        },
        colors: ["#38A169", "#001529"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },

        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.4,
            },
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
            ],
        },
    };
    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={350}
                width="100%"
            />
        </div>
    );
};

export default LineChart;
