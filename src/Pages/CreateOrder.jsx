import React, { useState } from "react";
import PaystackPop from "@paystack/inline-js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [ApartmentType, setApartment] = useState("");
  const [amount, setAmount] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [pay, setPay] = useState(true);

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_972509dd74772ecce447370a9b51fc204504b972",
      amount: amount * 100,
      email,
      name,
      phoneNumber,
      onSuccess(transaction) {
        const randomNumber =
          Math.floor(Math.random() * 900000000000000) + 100000000000000;
        let message = `Payment Successfull, Token : ${randomNumber}`;
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: `Worth: ${amount} Token : ${randomNumber}`,
        });
        navigate("/all-orders");
      },
      onCancel() {
        Swal.file({
          icon: "error",
          title: "Oops",
          text: "You have cancelled the transaction",
        });
      },
    });
  };
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    // setIsVisible(selectedValue === "cash");
    if (selectedValue === "cash") {
      setIsVisible(true);
      setPay(false);
    } else if (selectedValue === "transfer") {
      setIsVisible(false);
      setPay(true);
    } else {
      setPay(true);
      setIsVisible(false);
    }
  };
  return (
    <>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Create Token</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form data-toggle="validator">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Customer Name</label>
                          <select
                            name="type"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            class=" form-control"
                            data-style="py-0"
                          >
                            <option selected>Emeka Tech.</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email Address</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
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
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
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
                            class=" form-control"
                            data-style="py-0"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
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
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Type Of Apartment*</label>
                          <select
                            name="type"
                            class=" form-control"
                            data-style="py-0"
                            value={ApartmentType}
                            onChange={(e) => setApartment(e.target.value)}
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
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Payment Method</label>
                          <select
                            name="type"
                            class=" form-control"
                            data-style="py-0"
                            onChange={handleSelectChange}
                          >
                            <option value="card">Card</option>
                            <option value="transfer">Transfer</option>
                            <option value="cash">Cash</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>CSP*</label>
                          <select
                            name="type"
                            class=" form-control"
                            data-style="py-0"
                          >
                            <option>BICHI</option>
                           
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Agent*</label>
                          <select
                            name="type"
                            class=" form-control"
                            data-style="py-0"
                          >
                            <option>Agent 177827</option>
                            <option>Agent 177827</option>
                            <option>Agent 177827</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {pay && (
                      <button
                        type="submit"
                        onClick={payWithPaystack}
                        class="btn btn-primary mr-2"
                      >
                        Proceed To Pay
                      </button>
                    )}

                    {isVisible && (
                      <button
                        type="submit"
                        // onClick={payCash}
                        class="btn btn-primary mr-2"
                      >
                        Create Token
                      </button>
                    )}
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
