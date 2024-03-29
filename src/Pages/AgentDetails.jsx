import React from "react";

const AgentDetails = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-4">
              <div class="card card-transparent card-block card-stretch card-height bToken-none">
                <div class="card-body p-0 mt-lg-2 mt-0">
                  <h3 class="mb-3">Emeka Tech.</h3>
                  <p class="mb-0 mr-4">
                    techmint@techmint.com
                    <br />
                    08012345678
                  </p>
                  <h4 class="mt-3">Agent #188354</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card card-block card-stretch card-height">
                <div class="card-body">
                  <div class="d-flex align-items-center card-total-sale">
                    <div class="icon iq-icon-box-2 bg-info-light">
                      <img
                        src="assets/images/product/1.png"
                        class="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div>
                      <p class="mb-2">Agent Region:</p>
                      <h4>KANO EAST</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="card card-block card-stretch card-height">
                <div class="card-body">
                  <div class="d-flex align-items-center card-total-sale">
                    <div class="icon iq-icon-box-2 bg-info-light">
                      <img
                        src="assets/images/product/1.png"
                        class="img-fluid"
                        alt="image"
                      />
                    </div>
                    <div>
                      <p class="mb-2">Agent Total Token:</p>
                      <h4>1</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row mt-3">
            <div class="col-lg-12">
            <div class="row d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div className="col-lg-4">
                <h4 class="mb-3">Agent i History</h4>
                </div>
                <div className="col-lg-6 d-flex">
                  <input type="date" class="form-control" />
                  <input type="date" class="form-control" />
                </div>
               
              </div>
            </div>
            <div class="col-lg-12">
              <div class="table-responsive rounded mb-3">
                <table class="data-table table mb-0 tbl-server-info">
                  <thead class="bg-white text-uppercase">
                    <tr class="ligth ligth-data">
                      <th>
                        <div class="checkbox d-inline-block">
                          <input
                            type="checkbox"
                            class="checkbox-input"
                            id="checkbox1"
                          />
                          <label for="checkbox1" class="mb-0"></label>
                        </div>
                      </th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Address&nbsp;&nbsp;&nbsp;</th>
                      <th>Region</th>
                      <th>Apartment</th>
                      <th>Payment Method</th>
                      <th>Amount</th>
                      <th>Date&Time</th>
                      <th>Period Of Payment</th>
                      <th>Agent</th>
                      <th>Confirmation</th>
                      <th>Recurrent</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody class="ligth-body">
                    <tr>
                      <td>
                        <div class="checkbox d-inline-block">
                          <input
                            type="checkbox"
                            class="checkbox-input"
                            id="checkbox2"
                          />
                          <label for="checkbox2" class="mb-0"></label>
                        </div>
                      </td>
                      <td>Emeka Tech.</td>
                      <td>08012345678</td>
                      <td>no 7 jesus street</td>
                      <td>Nigeria</td>
                      <td>1 room</td>
                      <td>
                        <div class="badge badge-success">Paid Cash</div>
                      </td>
                      <td>#10,000</td>
                      <td>01 jan 2021 (14:39)</td>
                      <td>January</td>
                      <td>Agent #198228</td>
                      <td>
                        <div class="badge badge-success">Paid</div>
                      </td>
                      <td>Yes</td>
                      <td>
                        <div class="d-flex align-items-center list-action">
                          <a
                            class="badge bg-success mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Edit"
                            href="#"
                          >
                            <i class="ri-pencil-line mr-0"></i>
                          </a>
                          <a
                            class="badge bg-warning mr-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Delete"
                            href="#"
                          >
                            <i class="ri-delete-bin-line mr-0"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AgentDetails;
