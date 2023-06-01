import React from "react";

const Overview = () => {
  return (
    <>
      <div class="col-lg-6">
        <div class="card card-block card-stretch card-height">
          <div class="card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="card-title">Overview</h4>
            </div>
            <div class="card-header-toolbar d-flex align-items-center">
              <div class="dropdown">
                <span
                  class="dropdown-toggle dropdown-bg btn"
                  id="dropdownMenuButton001"
                  data-toggle="dropdown"
                >
                  This Month<i class="ri-arrow-down-s-line ml-1"></i>
                </span>
                <div
                  class="dropdown-menu dropdown-menu-right shadow-none"
                  aria-labelledby="dropdownMenuButton001"
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
          <div class="card-body">
            <div id="layout1-chart1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
