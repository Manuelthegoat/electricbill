import React from "react";
import Swal from "sweetalert2";

const TransferUnits = () => {
  const success = () => {
    Swal.fire({
      icon: "success",
      title: "Transfer Successful",
      text: "You Have Successfully Transfer 5000 units",
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
                    <h4 class="card-title">Transfer Units</h4>
                  </div>
                </div>
                <div className="card-body">
                  <form action="">
                    <div className="row">
                      <div className="col-lg-12">
                        <div class="form-group">
                          <label>Select Region</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Kano West</option>
                            <option>Kano Central</option>
                            <option>Kano East</option>
                            <option>Kano North</option>
                            <option>Kano South</option>
                          </select>
                        </div>
                      </div>
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
                      Transfer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferUnits;
