import React from "react";
export function Sidebar() {
  return (
    <div className="sidebar">
      <h4>Sidebar</h4>
      <div>
        <br />
        <a className="customLink" href="/about">
          About
        </a>
        <br />
        <a className="customLink" href="/contact">
          Contact
        </a>
        <br />
        <a className="customLink" href="/test">
          test
        </a>
        <br />
        <a className="customLink" href="/2323242">
          test numeric
        </a>
      </div>
    </div>
  );
}
