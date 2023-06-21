import React from "react";

const CreateCustomer = () => {
  return (
    <>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Add Customer</h4>
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
                          <label>Email (optional)</label>
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
                          <label>Phone Number *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Phone Number"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
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
                          <label>Address</label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Enter Address"
                          />
                        </div>
                      </div>
                    
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>City *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter City"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>LGA *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter LGA"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Customer
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCustomer;
