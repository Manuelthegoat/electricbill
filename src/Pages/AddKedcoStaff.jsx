import React, { useState } from "react";

const AddKedcoStaff = () => {
  const [selectedItem, setSelectedItem] = useState("Agent");
  const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
  const handleSelectChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <div>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Create Kedco Staff</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form action="" data-toggle="validator">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Staff Id *</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Staff Id"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Full Name"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Mobile Number *</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Mobile Number"
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

                      <div class="col-md-4">
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
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>CSP *</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Emmanuel</option>
                            <option>Taiwo</option>
                            <option>Sodiq</option>
                            <option>Bayo</option>
                            <option>Chinedu</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>User Status *</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Active</option>
                            <option>InActive</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>User Type *</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Sales</option>
                            <option>Admin</option>
                            <option>RM</option>
                            <option>CRO</option>
                            <option>Cashier</option>
                            <option>Senior Cashier</option>
                          </select>
                        </div>
                      </div>
                      {/* <div class="col-md-4">
                        <div class="form-group">
                          <label>Payment Limit *</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Payment Limit"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div> */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Password *</label>
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Enter Password"
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
                      Create Kedco Staff
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

export default AddKedcoStaff;
