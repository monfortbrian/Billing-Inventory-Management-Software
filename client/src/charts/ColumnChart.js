import React from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = () => {
    const options = {
        chart: {
            type: "bar",
            height: 350,
        },
        colors: ["#38A169", "#001529"],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
            ],
        },
        yaxis: {
            title: {
                text: "BIF (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "BIF " + val + "K";
                },
            },
        },
    };

    const series = [
        {
            name: "Purchases",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: "Sales",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ];

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default ColumnChart;
