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
            <i class="fa-solid fa-bars wrapper-menu"></i>
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
                    class="svg-icon"
                    id="p-dash2"
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
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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
                    <a href="/all-orders">
                      <i class="fa-solid fa-minus"></i>
                      <span>Request Unit</span>
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
                    class="svg-icon"
                    id="p-dash2"
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
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
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
                  href="#category"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    class="svg-icon"
                    id="p-dash3"
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
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
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
                    <a href="/supervisors">
                      <i class="fa-solid fa-minus"></i> <span>Supervisors</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/create-agent">
                      <i class="fa-solid fa-minus"></i>
                      <span>Create User</span>
                    </a>
                  </li>
                </ul>
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
