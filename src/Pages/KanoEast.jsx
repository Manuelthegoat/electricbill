import React from "react";
import Regions from "../Components/Regions";
import RegionsComponents from "../Components/RegionsComponents";

const KanoEast = ({
  handleSelectChange,
  selectedItem,
  setSelectedItem,
  regions,
  selectedCsps,
  csping,
  handleCspChange,
  selectedCsp,
  operators,
  handleOperatorChange,
  selectedOperator,
  operate,
}) => {
  const number = 2003883; // Replace with your number
  const formattedNumber = number.toLocaleString();
  return (
    <div>
      <div className="content-page">
        <div className="container-fluid">
          <RegionsComponents
           handleSelectChange={handleSelectChange}
           selectedItem={selectedItem}
           setSelectedItem={setSelectedItem}
           regions={regions}
           selectedCsp={selectedCsp}
           handleCspChange={handleCspChange}
           selectedCsps={selectedCsps}
           operators={operators}
           selectedOperator={selectedOperator}
           handleOperatorChange={handleOperatorChange}
          />
          <div className="row">
          {selectedOperator && (
              <div class="col-lg-3">
                <div class="card card-transparent card-block card-stretch card-height bToken-none">
                  <div class="card-body p-0 mt-lg-2 mt-0">
                    <h3 class="mb-3">{operate}</h3>
                    <p class="mb-0 mr-4">
                      techmint@techmint.com
                      <br />
                      08012345678
                    </p>
                    <h4 class="mt-3">Operator #188354</h4>
                  </div>
                </div>
              </div>
            )}
            <div class="col-lg-3 col-md-3">
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
                      <p class="mb-2">Operator Region:</p>
                      <h4>KANO East</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {selectedCsp && (
            <div class="col-lg-3 col-md-3">
              <div class="card card-block ">
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
                      <p class="mb-2">CSP:</p>
                      <h4>{csping}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
            <div class="col-lg-3 col-md-3">
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
                      <p class="mb-2">Operator Total Units:</p>
                      <h4>1</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
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
          </div>

          <div className="row mt-3">
            <div class="col-lg-12">
              <div class="row d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div className="col-lg-4">
                  <h4 class="mb-3">Operator History</h4>
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
                      <th>Operator</th>
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
                      <td>Operator #198228</td>
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
    </div>
  );
};

export default KanoEast;
