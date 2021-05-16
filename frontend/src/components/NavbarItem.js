import React from "react";

function NavbarItem(props) {
  return (
    <li className="nav-item">
      <a
        className="nav-link"
        data-test={`nav-link-${props.label}`}
        href={props.href}
      >
        {props.label}
      </a>
    </li>
  );
}

export default NavbarItem;
