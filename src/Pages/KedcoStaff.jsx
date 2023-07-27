import React, { useState } from "react";

const KedcoStaff = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-12">
              <div class="row d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div className="col-lg-4">
                  <h4 class="">Kedco Staff</h4>
                </div>
                <div className="col-lg-6 d-flex">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
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
                      <th>ID</th>
                      <th>Staff</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Region</th>

                      <th>CSP</th>
                      <th>User Type</th>
                      <th>Funding Limit</th>
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
                      <td>#973655467</td>
                      <td>Danjuma Micheal</td>
                      <td>Micheal.d@example.com</td>
                      <td>+2349947664588</td>
                      <td>Kano&nbsp;Central</td>
                      <td>Emmanuel</td>
                      <td>Sales</td>
                      <td>500,000</td>
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

export default KedcoStaff;
