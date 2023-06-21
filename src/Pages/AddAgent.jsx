import React, { useState } from "react";

const AddAgent = () => {
  const [selectedItem, setSelectedItem] = useState("Agent");
  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <>
    {selectedItem === "Agent" && (
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Create Agent</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form action="" data-toggle="validator">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Name *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Phone Number *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Phone No"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Email"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Address *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Address"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Gender</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Picture</label>
                          <input
                            type="file"
                            class="form-control image-file"
                            name="pic"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Region *</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Kano West</option>
                            <option>Kano Central</option>
                            <option>Kano East</option>
                            <option>Kano North</option>
                            <option value="KanoSouth">Kano South</option>
 <option value="KanoSouth">Jigawa South</option>
                  <option value="KanoSouth">Jigawa North</option>
                  <option value="KanoSouth">Katsina Central</option>
                  <option value="KanoSouth">Katsina North</option>
                  <option value="KanoSouth">Katsina South</option>

                          </select>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Role *</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                            value={selectedItem}
                            onChange={handleSelectChange}
                          >
                            <option value={"Agent"}>Agent</option>
                            <option value={"Agent"}>Supervisor</option>
                            <option value={"Kedco"}>Kedco Staff</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Guarantor Name *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Guarantor Name"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Guarantor Phone Number *</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Guarantor Phone Number"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Guarantor Address *</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Guarantor Address"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Guarantor Occupation *</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Guarantor Occupation"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Password</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Password"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Confirm Password</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Confirm Password"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-md-12">
                        <div class="checkbox d-inline-block mb-3">
                          <input
                            type="checkbox"
                            class="checkbox-input mr-2"
                            id="checkbox1"
                            checked=""
                          />
                          <label for="checkbox1">Notify User by Email</label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Create Agent
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default AddAgent;
