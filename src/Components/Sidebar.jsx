import React from "react";

const Sidebar = () => {
  return (
    <>
      <div class="iq-sidebar  sidebar-default ">
        <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
          <a href="/" class="header-logo">
            <img
              src="assets/images/logo.png"
              class="img-fluid rounded-normal light-logo"
              alt="logo"
            />
            <h5 class="logo-title light-logo ml-3">Skoten</h5>
          </a>
          <div class="iq-menu-bt-sidebar ml-0">
            <i class="pl-15 fa-solid fa-bars wrapper-menu"></i>
          </div>
        </div>
        <div class="data-scrollbar" data-scroll="1">
          <nav class="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" class="iq-menu">
              <li class="active">
                <a href="/" class="svg-icon">
                  <svg
                    class="svg-icon"
                    id="p-dash1"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span class="ml-4">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/create-customer" class="svg-icon">
                  <svg
                    class="svg-icon"
                    id="p-dash1"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span class="ml-4">Create Customer</span>
                </a>
              </li>

              <li class=" ">
                <a
                  href="#token"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="svg-icon"
                    id="p-dash2"
                    width="20"
                    height="20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>

                  <span class="ml-4">Units</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="token"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/purchase-units">
                      <i class="fa-solid fa-minus"></i>
                      <span>Generate Unit</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/transfer-units">
                      <i class="fa-solid fa-minus"></i>
                      <span>Transfer Unit</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/transfered-units">
                      <i class="fa-solid fa-minus"></i>
                      <span>View Tranfered Units</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#product"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="svg-icon"
                    id="p-dash2"
                    width="20"
                    height="20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span class="ml-4">Token</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="product"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/all-orders">
                      <i class="fa-solid fa-minus"></i>
                      <span>all Token</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/create-order">
                      <i class="fa-solid fa-minus"></i>
                      <span>Sell Token</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#report"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="svg-icon"
                    id="p-dash2"
                    width="20"
                    height="20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>

                  <span class="ml-4">Reports</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="report"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/order-summary">
                      <i class="fa-solid fa-minus"></i>
                      <span>Order Summary</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#category"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="svg-icon"
                    id="p-dash2"
                    width="20"
                    height="20"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>

                  <span class="ml-4">Users</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="category"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/all-agents">
                      <i class="fa-solid fa-minus"></i> <span>Agent</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/kedco-staff">
                      <i class="fa-solid fa-minus"></i> <span>Kedco Staff</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/add-kedco-staff">
                      <i class="fa-solid fa-minus"></i>{" "}
                      <span>Create User</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/supervisors">
                      <i class="fa-solid fa-minus"></i> <span>Supervisors</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/create-agent">
                      <i class="fa-solid fa-minus"></i>
                      <span>Create Skoten Agent</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/remittance" class="svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="svg-icon"
                    width="20"
                    height="20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>

                  <span class="ml-4">Remittance</span>
                </a>
              </li>
            </ul>
          </nav>
          <div id="sidebar-bottom" class="position-relative sidebar-bottom">
            <div class="card border-none">
              <div class="card-body p-0">
                <div class="sidebarbottom-content">
                  <div class="image">
                    <img
                      src="assets/images/layouts/side-bkg.png"
                      class="img-fluid"
                      alt="side-bkg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3"></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
