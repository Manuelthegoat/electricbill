import React from "react";

const HomeHead = () => {
  return (
    <>
      <div class="col-lg-8">
        <div class="row">
          <div class="col-lg-5 col-md-4">
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
                    <p class="mb-2">Total Payments</p>
                    <h4>&#8358;31.50</h4>
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
          <div class="col-lg-5 col-md-4">
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
                    <p class="mb-2">Total Orders</p>
                    <h4>150</h4>
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
          </div>
      </div>
    </>
  );
};

export default HomeHead;
