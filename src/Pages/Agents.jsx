import React from "react";

const Agents = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div class="col-lg-12">
              <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div>
                  <h4 class="mb-3">All Agents</h4>
                </div>
                <a href="page-add-sale.html" class="btn btn-primary add-list">
                  <i class="las la-plus mr-3"></i>Add Agent
                </a>
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
                      <th>Agent ID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Address&nbsp;&nbsp;&nbsp;</th>
                      <th>Email</th>
                      <th>Picture</th>
                      <th>Region</th>
                      <th>Guarantor Name</th>
                      <th>Guarantor NO</th>
                      <th>Guarantor Address</th>
                      <th>Guarantor Occupation</th>
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
                      <td>#Agent&nbsp;188354</td>
                      <td>Manuel&nbsp;U.</td>
                      <td>09029021962</td>
                      <td>no&nbsp;7&nbsp;jesus&nbsp;street</td>
                      <td>manuelcreation247@gmail.com</td>
                      <td>
                        <img
                          class="avatar-50 rounded-small"
                          src="assets/images/user/01.jpg"
                          alt="01"
                        />
                      </td>
                      <td>
                        Nil
                      </td>
                      <td>Mr Emmanuel</td>
                      <td>09029021962</td>
                      <td>no 7 jesus street</td>
                      <td>Developer</td>
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

export default Agents;
