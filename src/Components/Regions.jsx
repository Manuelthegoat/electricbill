import React from "react";
import ReactApexChart from "react-apexcharts";

const chartDatas = {
  series: [
    {
      name: "Desktops",
      data: [17, 23, 15, 28, 22, 32],
    },
  ],
  colors: ["#FF7E41"],
  chart: {
    height: 150,
    type: "line",
    zoom: {
      enabled: false,
    },
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 12,
      left: 1,
      blur: 2,
      opacity: 0.2,
    },
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  title: {
    text: "",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
};

const Regions = (props) => {
  return (
    <>
      <div className="col-lg-4">
        <div class="card card-block card-stretch card-height-helf">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div class="">
                <p class="mb-0">{props.title}</p>
                <h5>&#8358;{props.titleV}</h5>
              </div>
              <div class="card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle dropdown-bg btn"
                    id="dropdownMenuButton003"
                    data-toggle="dropdown"
                  >
                    This Month<i class="ri-arrow-down-s-line ml-1"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow-none"
                    aria-labelledby="dropdownMenuButton003"
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
            {/* <div id="layout1-chart-3" class="layout-chart-1"></div> */}
            <ReactApexChart
              options={chartDatas}
              series={chartDatas.series}
              class="layout-chart-1"
              type="line"
            />{" "}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div class="card card-block card-stretch card-height-helf">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div class="">
                <p class="mb-0">{props.title2}</p>
                <h5>&#8358;{props.title2V}</h5>
              </div>
              <div class="card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle dropdown-bg btn"
                    id="dropdownMenuButton003"
                    data-toggle="dropdown"
                  >
                    This Month<i class="ri-arrow-down-s-line ml-1"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow-none"
                    aria-labelledby="dropdownMenuButton003"
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
            {/* <div id="layout1-chart-3" class="layout-chart-1"></div> */}
            <ReactApexChart
              options={chartDatas}
              series={chartDatas.series}
              class="layout-chart-1"
              type="line"
            />{" "}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div class="card card-block card-stretch card-height-helf">
          <div class="card-body">
            <div class="d-flex align-items-top justify-content-between">
              <div class="">
                <p class="mb-0">{props.title3}</p>
                <h5>&#8358;{props.title3V}</h5>
              </div>
              <div class="card-header-toolbar d-flex align-items-center">
                <div class="dropdown">
                  <span
                    class="dropdown-toggle dropdown-bg btn"
                    id="dropdownMenuButton003"
                    data-toggle="dropdown"
                  >
                    This Month<i class="ri-arrow-down-s-line ml-1"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right shadow-none"
                    aria-labelledby="dropdownMenuButton003"
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
            {/* <div id="layout1-chart-3" class="layout-chart-1"></div> */}
            <ReactApexChart
              options={chartDatas}
              series={chartDatas.series}
              class="layout-chart-1"
              type="line"
            />{" "}
          </div>
        </div>
      </div>
      {/*       
        <div class="col-lg-4 ">
          <div class="card card-block card-stretch card-height">
            <div class="card-body">
              <div class="d-flex align-items-center mb-4 card-total-sale">
                <div class="icon iq-icon-box-2 bg-info-light">
                  <img
                    src="assets/images/product/1.png"
                    class="img-fluid"
                    alt="image"
                  />
                </div>
                <div>
                  <p class="mb-2">{props.title}</p>
                  <h4>{props.titleV}</h4>
                </div>
              </div>
              <div class="iq-progress-bar mt-2">
                <span
                  class="bg-info iq-progress progress-1"
                  data-percent="85"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class="card card-block card-stretch card-height">
            <div class="card-body">
              <div class="d-flex align-items-center mb-4 card-total-sale">
                <div class="icon iq-icon-box-2 bg-danger-light">
                  <img
                    src="assets/images/product/2.png"
                    class="img-fluid"
                    alt="image"
                  />
                </div>
                <div>
                  <p class="mb-2">{props.title2}</p>
                  <h4>{props.title2V}</h4>
                </div>
              </div>
              <div class="iq-progress-bar mt-2">
                <span
                  class="bg-danger iq-progress progress-1"
                  data-percent="70"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 ">
          <div class="card card-block card-stretch card-height">
            <div class="card-body">
              <div class="d-flex align-items-center mb-4 card-total-sale">
                <div class="icon iq-icon-box-2 bg-success-light">
                  <img
                    src="assets/images/product/3.png"
                    class="img-fluid"
                    alt="image"
                  />
                </div>
                <div>
                <p class="mb-2">{props.title3}</p>
                  <h4>{props.title3V}</h4>
                </div>
              </div>
              <div class="iq-progress-bar mt-2">
                <span
                  class="bg-success iq-progress progress-1 widtho"
                  data-percent="75"
                ></span>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default Regions;
