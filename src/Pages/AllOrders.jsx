import React from "react";
import Regions from "../Components/Regions";

const AllOrders = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-12">
              <div class="row d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div className="col-lg-4">
                  <h4 class="">All Token Sold</h4>
                </div>
                <div className="col-lg-6 d-flex">
                  <input type="date" class="form-control" />
                  <input type="date" class="form-control" />
                </div>
                <div className="col-lg-2">
                  <a href="/create-order" class="btn btn-primary add-list">
                    <i class="las la-plus mr-3"></i>Sell Token
                  </a>
                </div>
              </div>
            </div>
             <Regions
                title="Today Sales"
                titleV={formattedNumber}
                title2V={formattedNumber}
                title3V={formattedNumber}
                title4V={formattedNumber}
                title5V={formattedNumber}
                title2="Week Sales"
                title3="Month Sales"
                title4="Remit Sales"
                title5="Un-Remit Sales"
              />
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
                      <td>Manuel U.</td>
                      <td>09029021962</td>
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

export default AllOrders;
