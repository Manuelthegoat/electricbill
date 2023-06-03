import React from "react";

const CreateOrder = () => {
  return (
    <>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Create Order</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form
                    action="https://templates.iqonic.design/posdash/html/backend/page-list-returns.html"
                    data-toggle="validator"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Customer Name</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Manuel U.</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email Address</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Email"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Phone No *</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Enter Phone No"
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
                            placeholder="Enter Customer Address"
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
                            <option>Kano South</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Type Of Apartment*</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>1 Room</option>
                            <option>Mini Flat</option>
                            <option>2 Bedroom Flat</option>
                            <option>3 Bedroom Flat</option>
                            <option>4 Bedroom Flat</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Amount</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Amount"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Payment Method</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Cash</option>
                            <option>Card</option>
                            <option>Transfer</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Agent*</label>
                          <select
                            name="type"
                            class="selectpicker form-control"
                            data-style="py-0"
                          >
                            <option>Agent 177827</option>
                            <option>Agent 177827</option>
                            <option>Agent 177827</option>
                          </select>
                        </div>
                      </div>

                     
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Create Order
                    </button>
                    <button type="reset" class="btn btn-danger">
                      Reset
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

export default CreateOrder;
