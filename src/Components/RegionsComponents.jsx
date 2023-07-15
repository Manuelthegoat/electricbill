import React from "react";
import { ClipLoader } from "react-spinners";

const RegionsComponents = ({
  handleSelectChange,
  selectedItem,
  setSelectedItem,
  isLoading,
  regions,
  selectedCsps,
}) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-lg-2">
          <select
            name="type"
            class=" form-control"
            value={selectedItem}
            onChange={handleSelectChange}
            data-style="py-0"
          >
            <option value="" selected>
              Transaction List
            </option>
            <option value="Transactions">Transaction</option>
            <option value="">Performance</option>
            <option value="Remitance">Remittance</option>
            <option value="">Summary</option>
            <option value="">Analysis</option>
            <option value="">Remit Sales</option>
            <option value="">NonRemit Sales</option>
            <option value="">Reprint/Cancellations</option>
          </select>
        </div>
        <div className="col-lg-2 d-flex">
          <input type="date" class="form-control" placeholder="mm/dd/yyyy" />
        </div>
        <div className="col-lg-2">
          <select
            name="type"
            class=" form-control"
            value={selectedItem}
            onChange={handleSelectChange}
          >
            <option value="HQ" selected>
              Select A Region
            </option>
            {regions?.map((region, index) => (
              <option key={index} value={region?.val}>
                {region?.region}
              </option>
            ))}
          </select>
          {isLoading && <ClipLoader />}
        </div>

        <div className="col-lg-2">
          {selectedCsps?.length > 0 && (
            <select className="form-control">
              <option value="">Select a CSP</option>
              {selectedCsps?.map((csp, index) => (
                <option key={index} value={csp}>
                  {csp}
                </option>
              ))}
            </select>
          )}
          {/* <select name="" id="" className="form-control">
            <option value="">Choose Csp</option>
          </select> */}
        </div>
        <div className="col-lg-2">
          <select name="" id="" className="form-control">
            <option value="">Choose Operator</option>
          </select>
        </div>
        {/* <div className="col-lg-2">
          <button className="btn btn-primary">Search</button>
        </div> */}
      </div>
    </>
  );
};

export default RegionsComponents;
