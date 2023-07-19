import React from "react";

const Overview = () => {
  return (
    <>
      <div class="col-lg-12">
        <div class="row d-flex flex-wrap align-items-center justify-content-between mb-4">
          <div className="col-lg-6">
            <h4 class="">All Token Sold</h4>
          </div>
          <div class="iq-search-bar device-search">
            <form action="#" class="searchbox">
              <a class="search-link" href="#">
                <i class="ri-search-line"></i>
              </a>
              <input
                type="text"
                class="text search-input"
                placeholder="Search here..."
              />
            </form>
          </div>
          {/* <a href="page-add-sale.html" class="btn btn-primary add-list">
            <i class="las la-plus mr-3"></i>Add Order
          </a> */}
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
                <th>Apartment</th>
                <th>Payment Method</th>
                <th>Agent</th>
                <th>Regions</th>
                <th>CSP</th>
                <th>Operator</th>
                <th>Amount</th>
                <th>Token</th>
                <th>Token Units</th>
                <th>Date&Time</th>
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
                <td>1 room</td>
                <td>
                  <div class="badge badge-success">Paid Cash</div>
                </td>
                <td>Ayomied</td>
                <td>Kano West</td>
                <td>Ajingi</td>
                <td>Chinedu</td>
                <td>#10,000</td>
                <td>009977645563778</td>
                <td>20KW</td>
                <td>01 jan 2021 (14:39)</td>
                <td>
                  <div class="d-flex align-items-center list-action">
                    {/* <a
                      class="badge badge-info mr-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="View"
                      href="#"
                    >
                      <i class="ri-eye-line mr-0"></i>
                    </a> */}
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
                <td>1 room</td>
                <td>
                  <div class="badge badge-success">Paid Cash</div>
                </td>
                <td>Ayomied</td>
                <td>Kano West</td>
                <td>Ajingi</td>
                <td>Chinedu</td>
                <td>#10,000</td>
                <td>009977645563778</td>
                <td>20KW</td>
                <td>01 jan 2021 (14:39)</td>
                <td>
                  <div class="d-flex align-items-center list-action">
                    {/* <a
                      class="badge badge-info mr-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="View"
                      href="#"
                    >
                      <i class="ri-eye-line mr-0"></i>
                    </a> */}
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
                <td>1 room</td>
                <td>
                  <div class="badge badge-success">Paid Cash</div>
                </td>
                <td>Ayomied</td>
                <td>Kano West</td>
                <td>Ajingi</td>
                <td>Chinedu</td>
                <td>#10,000</td>
                <td>009977645563778</td>
                <td>20KW</td>
                <td>01 jan 2021 (14:39)</td>
                <td>
                  <div class="d-flex align-items-center list-action">
                    {/* <a
                      class="badge badge-info mr-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="View"
                      href="#"
                    >
                      <i class="ri-eye-line mr-0"></i>
                    </a> */}
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
                <td>1 room</td>
                <td>
                  <div class="badge badge-success">Paid Cash</div>
                </td>
                <td>Ayomied</td>
                <td>Kano West</td>
                <td>Ajingi</td>
                <td>Chinedu</td>
                <td>#10,000</td>
                <td>009977645563778</td>
                <td>20KW</td>
                <td>01 jan 2021 (14:39)</td>
                <td>
                  <div class="d-flex align-items-center list-action">
                    {/* <a
                      class="badge badge-info mr-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="View"
                      href="#"
                    >
                      <i class="ri-eye-line mr-0"></i>
                    </a> */}
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
                <td>1 room</td>
                <td>
                  <div class="badge badge-success">Paid Cash</div>
                </td>
                <td>Ayomied</td>
                <td>Kano West</td>
                <td>Ajingi</td>
                <td>Chinedu</td>
                <td>#10,000</td>
                <td>009977645563778</td>
                <td>20KW</td>
                <td>01 jan 2021 (14:39)</td>
                <td>
                  <div class="d-flex align-items-center list-action">
                    {/* <a
                      class="badge badge-info mr-2"
                      data-toggle="tooltip"
                      data-placement="top"
                      title=""
                      data-original-title="View"
                      href="#"
                    >
                      <i class="ri-eye-line mr-0"></i>
                    </a> */}
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
    </>
  );
};

export default Overview;
