import React from "react";
import ReactApexChart from "react-apexcharts";

const chartData = {
  series: [
    {
      name: "Total Payments",
      data: [86, 80, 84, 95, 83, 75, 88, 76, 86, 93, 85, 65],
    },
    {
      name: "Total Orders",
    //   data: [76, 72, 76, 85, 74, 69, 80, 68, 78, 85, 77, 55],
    },
  ],
  chart: {
    type: "bar",
    height: 300,
  },
  colors: ["black", "red"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "80%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Agency",
      "Hq",
      "Jigawa North",
      "Jigawa South",
      "Kano Central",
      "Kano East",
      "Kano Industrial",
      "Kano North",
      "Kano West",
      "Katsina Central",
      "Katsina North",
      "Katsina South",
    ],
    labels: {
      minWidth: 0,
      maxWidth: 0,
    },
  },
  yaxis: {
    show: true,
    labels: {
      minWidth: 20,
      maxWidth: 20,
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val ;
      },
    },
  },
};

const MonthlyCollection = () => {
  return (
    <>
      <div class="col-lg-12">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Monthly Collection Chart</h4>
            </div>
            <div class="card-header-toolbar d-flex align-items-center">
              <div class="dropdown">
                <span
                  class="dropdown-toggle dropdown-bg btn"
                  id="dropdownMenuButton005"
                  data-toggle="dropdown"
                >
                  This Month<i class="ri-arrow-down-s-line ml-1"></i>
                </span>
                <div
                  class="dropdown-menu dropdown-menu-right shadow-none"
                  aria-labelledby="dropdownMenuButton005"
                >
                  <a class="dropdown-item" href="#">
                    Year
                  </a>
                  <a class="dropdown-item" href="#">
                    Month
                  </a>
                  <a class="dropdown-item" href="#">
                    Week
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            {/* <div id="layout1-chart-5"></div> */}
            <ReactApexChart
              options={chartData}
              series={chartData.series}
              height={500}
              type="bar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyCollection;
