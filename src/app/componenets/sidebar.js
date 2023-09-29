"use client"

import React from "react";
import Link from "next/link"; // Import the Link component
import { usePathname } from 'next/navigation'


const SideBar = () => {
  const pathname = usePathname()
console.log(pathname==='/about'?"active":"");
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
        <span className="fs-4 px-4 "> Sidebar</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
      <li>
        <Link  className={"nav-link text-light "+(pathname=='/'?"active":"")}  href="/">Vendors</Link>
        </li>

        <li className="nav-item">    
            <Link  className={"nav-link text-light "+(pathname=='/about'?"active":"")}  href="/about">About</Link>
        </li>
        <li className="nav-item">    
        <Link className={"nav-link text-light " + (pathname.startsWith('/assets') ? "active" : "")} href="/assets/asset-list">Assets</Link>
        </li>
       
        
      </ul>
      {/* <hr></hr> */}
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          ></img>
          <strong>mdo</strong>
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark text-small shadow"
          aria-labelledby="dropdownUser1"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          {/* <#bootstrapli><hr className="dropdown-divider"> </hr></li> */}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
