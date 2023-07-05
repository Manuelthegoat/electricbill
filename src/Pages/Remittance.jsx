import React from "react";

const Remittance = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-12">
              <div class="row d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div className="col-lg-4">
                  <h4 class="">Remittance</h4>
                </div>
                <div className="col-lg-6 d-flex">
                  <select name="type" class="form-control" data-style="py-0">
                    <option>Day</option>
                    <option>Month</option>
                    <option>Year</option>
                  </select>
                  &nbsp;
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
                      <th>Region</th>
                      <th>CSP</th>
                      <th>Agent</th>
                      <th>Phone</th>
                      <th>Slip ID</th>
                      <th>Date</th>
                      <th>Remit To</th>
                      <th>Amount</th>
                      <th>Remark</th>
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
                      <td>HQ</td>
                      <td>Revenue Assurance</td>
                      <td>Ahmed Alihu Omar</td>
                      <td>0801234567</td>
                      <td>NT8836635456</td>
                      <td>2023-06-22</td>
                      <td>Fatima Binta</td>
                      <td>&#8358;10,000.00</td>
                      <td><div class="badge badge-success">Recieved</div></td>
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

export default Remittance;
