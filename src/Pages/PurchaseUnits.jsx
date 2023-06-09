import React from "react";
import Swal from "sweetalert2";

const PurchaseUnits = () => {
  const success = () => {
    Swal.fire({
      icon: "success",
      title: "Generated Successfully",
      text: 'You Have Successfully Generated 5000 units',
    });
  };
  return (
    <div>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Generate Units</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div >
                    <div className="row">
                      <div className="col-lg-12">
                        <div class="form-group">
                          <label>Number Of Units</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Number Of Units"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="btn btn-primary mr-2"
                      onClick={success}
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseUnits;
