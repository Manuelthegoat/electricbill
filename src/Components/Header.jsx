import React from "react";
import HeaderModal from "./HeaderModal";

const Header = ({ handleSelectChange, selectedItem }) => {
  return (
    <>
      <div class="iq-top-navbar">
        <div class="iq-navbar-custom">
          <nav class="navbar navbar-expand-lg navbar-light p-0">
            <div class="iq-navbar-logo d-flex align-items-center justify-content-between">
              <i class="ri-menu-line wrapper-menu"></i>
              <a href="index.html" class="header-logo">
                <img
                  src="assets/images/logo.png"
                  class="img-fluid rounded-normal"
                  alt="logo"
                />
                <h5 class="logo-title ml-3">Skoten Startup</h5>
              </a>
            </div>
            <div className="col-lg-6 d-flex">
            <input type="date" class="form-control" placeholder="mm/dd/yyyy"  />
            <input type="date" class="form-control" placeholder="mm/dd/yyyy" />
          </div>

            <div class="d-flex align-items-center">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <i class="ri-menu-3-line"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-list align-items-center">
                  <li class="nav-item nav-icon search-content">
                    <a
                      href="#"
                      class="search-toggle rounded"
                      id="dropdownSearch"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ri-search-line"></i>
                    </a>
                    <div
                      class="iq-search-bar iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownSearch"
                    >
                      <form action="#" class="searchbox p-2">
                        <div class="form-group mb-0 position-relative">
                          <input
                            type="text"
                            class="text search-input font-size-12"
                            placeholder="type here to search..."
                          />
                          <a href="#" class="search-link">
                            <i class="las la-search"></i>
                          </a>
                        </div>
                      </form>
                    </div>
                  </li>
                  <select
                    name="type"
                    class=" form-control"
                    value={selectedItem}
                    onChange={handleSelectChange}
                    data-style="py-0"
                  >
                    <option value="HQ" selected>
                      HQ
                    </option>
                    <option value="KanoWest">Kano West</option>
                    <option value="KanoCentral">Kano Central</option>
                    <option value="KanoEast">Kano East</option>
                    <option value="KanoNorth">Kano North</option>
                    <option value="KanoSouth">Kano South</option>
                    <option value="KanoSouth">Jigawa South</option>
                    <option value="KanoSouth">Jigawa North</option>
                    <option value="KanoSouth">Katsina Central</option>
                    <option value="KanoSouth">Katsina North</option>
                    <option value="KanoSouth">Katsina South</option>
                  </select>
                  <li class="nav-item nav-icon dropdown">
                    <a
                      href="#"
                      class="search-toggle dropdown-toggle btn border add-btn"
                      id="dropdownMenuButton02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Transaction &#8964;
                    </a>
                    <div
                      class="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <div class="card shadow-none m-0">
                        <div class="card-body p-3">
                          <a class="iq-sub-card" href="#">
                            Transaction List
                          </a>
                          <a class="iq-sub-card" href="#">
                            Performance
                          </a>
                          <a class="iq-sub-card" href="#">
                            Remmitance
                          </a>
                          <a class="iq-sub-card" href="#">
                            Summary
                          </a>
                          <a class="iq-sub-card" href="#">
                            Analysis
                          </a>
                          <a class="iq-sub-card" href="#">
                            Reprint / Cancellations
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item nav-icon dropdown">
                    <a
                      href="#"
                      class="search-toggle dropdown-toggle"
                      id="dropdownMenuButton2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span class="bg-primary"></span>
                    </a>
                    <div
                      class="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <div class="card shadow-none m-0">
                        <div class="card-body p-0 ">
                          <div class="cust-title p-3">
                            <div class="d-flex align-items-center justify-content-between">
                              <h5 class="mb-0">All Messages</h5>
                              <a
                                class="badge badge-primary badge-card"
                                href="#"
                              >
                                3
                              </a>
                            </div>
                          </div>
                          <div class="px-3 pt-0 pb-0 sub-card">
                            <a href="#" class="iq-sub-card">
                              <div class="media align-items-center cust-card py-3 border-bottom">
                                <div class="">
                                  <img
                                    class="avatar-50 rounded-small"
                                    src="assets/images/user/01.jpg"
                                    alt="01"
                                  />
                                </div>
                                <div class="media-body ml-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="mb-0">Emma Watson</h6>
                                    <small class="text-dark">
                                      <b>12 : 47 pm</b>
                                    </small>
                                  </div>
                                  <small class="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" class="iq-sub-card">
                              <div class="media align-items-center cust-card py-3 border-bottom">
                                <div class="">
                                  <img
                                    class="avatar-50 rounded-small"
                                    src="assets/images/user/02.jpg"
                                    alt="02"
                                  />
                                </div>
                                <div class="media-body ml-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="mb-0">Ashlynn Franci</h6>
                                    <small class="text-dark">
                                      <b>11 : 30 pm</b>
                                    </small>
                                  </div>
                                  <small class="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" class="iq-sub-card">
                              <div class="media align-items-center cust-card py-3">
                                <div class="">
                                  <img
                                    class="avatar-50 rounded-small"
                                    src="assets/images/user/03.jpg"
                                    alt="03"
                                  />
                                </div>
                                <div class="media-body ml-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="mb-0">Kianna Carder</h6>
                                    <small class="text-dark">
                                      <b>11 : 21 pm</b>
                                    </small>
                                  </div>
                                  <small class="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                          <a
                            class="right-ic btn btn-primary btn-block position-relative p-2"
                            href="#"
                            role="button"
                          >
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item nav-icon dropdown">
                    <a
                      href="#"
                      class="search-toggle dropdown-toggle"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-bell"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                      <span class="bg-primary "></span>
                    </a>
                    <div
                      class="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div class="card shadow-none m-0">
                        <div class="card-body p-0 ">
                          <div class="cust-title p-3">
                            <div class="d-flex align-items-center justify-content-between">
                              <h5 class="mb-0">Notifications</h5>
                              <a
                                class="badge badge-primary badge-card"
                                href="#"
                              >
                                3
                              </a>
                            </div>
                          </div>
                          <div class="px-3 pt-0 pb-0 sub-card">
                            <a href="#" class="iq-sub-card">
                              <div class="media align-items-center cust-card py-3 border-bottom">
                                <div class="">
                                  <img
                                    class="avatar-50 rounded-small"
                                    src="assets/images/user/01.jpg"
                                    alt="01"
                                  />
                                </div>
                                <div class="media-body ml-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="mb-0">Emma Watson</h6>
                                    <small class="text-dark">
                                      <b>12 : 47 pm</b>
                                    </small>
                                  </div>
                                  <small class="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" class="iq-sub-card">
                              <div class="media align-items-center cust-card py-3 border-bottom">
                                <div class="">
                                  <img
                                    class="avatar-50 rounded-small"
                                    src="assets/images/user/02.jpg"
                                    alt="02"
                                  />
                                </div>
                                <div class="media-body ml-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="mb-0">Ashlynn Franci</h6>
                                    <small class="text-dark">
                                      <b>11 : 30 pm</b>
                                    </small>
                                  </div>
                                  <small class="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                            <a href="#" class="iq-sub-card">
                              <div class="media align-items-center cust-card py-3">
                                <div class="">
                                  <img
                                    class="avatar-50 rounded-small"
                                    src="assets/images/user/03.jpg"
                                    alt="03"
                                  />
                                </div>
                                <div class="media-body ml-3">
                                  <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="mb-0">Kianna Carder</h6>
                                    <small class="text-dark">
                                      <b>11 : 21 pm</b>
                                    </small>
                                  </div>
                                  <small class="mb-0">
                                    Lorem ipsum dolor sit amet
                                  </small>
                                </div>
                              </div>
                            </a>
                          </div>
                          <a
                            class="right-ic btn btn-primary btn-block position-relative p-2"
                            href="#"
                            role="button"
                          >
                            View All
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item nav-icon dropdown caption-content">
                    <a
                      href="#"
                      class="search-toggle dropdown-toggle"
                      id="dropdownMenuButton4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="assets/images/user/1.png"
                        class="img-fluid rounded"
                        alt="user"
                      />
                    </a>
                    <div
                      class="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div class="card shadow-none m-0">
                        <div class="card-body p-0 text-center">
                          <div class="media-body profile-detail text-center">
                            <img
                              src="assets/images/page-img/profile-bg.jpg"
                              alt="profile-bg"
                              class="rounded-top img-fluid mb-4"
                            />
                            <img
                              src="assets/images/user/1.png"
                              alt="profile-img"
                              class="rounded profile-img img-fluid avatar-70"
                            />
                          </div>
                          <div class="p-3">
                            <h5 class="mb-1">michael@skoten.com</h5>
                            <p class="mb-0">Since 10 march, 2020</p>
                            <div class="d-flex align-items-center justify-content-center mt-3">
                              <a
                               
                                class="btn border mr-2"
                              >
                                Profile
                              </a>
                              <a href="auth-sign-in.html" class="btn border">
                                Sign Out
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <HeaderModal />
    </>
  );
};

export default Header;
