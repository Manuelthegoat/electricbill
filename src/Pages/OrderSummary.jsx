import React from "react";

const OrderSummary = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-12">
              <div class="row d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div className="col-lg-4">
                  <h4 class="">Order Summary</h4>
                </div>
                <div className="col-lg-6 d-flex">
                  <input type="date" class="form-control" />
                  <input type="date" class="form-control" />
                </div>
                {/* <div className="col-lg-2">
                  <a href="/create-order" class="btn btn-primary add-list">
                    <i class="las la-plus mr-3"></i>Sell Token
                  </a>
                </div> */}
              </div>
            </div>
            {/* <Regions /> */}
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
                      <th>Date</th>
                      <th>Status</th>
                      <th>Units Generated</th>
                      <th>Units Sold</th>
                      <th>Units Available</th>
                      <th>Grand Total</th>
                      <th>Number Of Units</th>
                      {/* <th>Fulfillment Date</th> */}
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
                      <td>14-11-2023 (11:45pm)</td>
                      <td>Paid</td>
                      <td>10,000kw</td>
                      <td>10,903</td>
                      <td>5000</td>
                      <td>78,000</td>
                      <td>20</td>
                      {/* <td>25-11-2023</td> */}
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

export default OrderSummary;
