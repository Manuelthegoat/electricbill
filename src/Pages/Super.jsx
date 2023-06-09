import React from "react";

const Super = () => {
  return (
    <>
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
                <p class="mb-2">Units Generated</p>
                <h4>3154</h4>
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
                <p class="mb-2">Unit Sold</p>
                <h4>98</h4>
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
                <p class="mb-2">Available Units</p>
                <h4>5</h4>
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
      </div>
      <div class="col-lg-6 ">
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
                <p class="mb-2">Grand Total</p>
                <h4>5</h4>
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
      </div>
    </>
  );
};

export default Super;
