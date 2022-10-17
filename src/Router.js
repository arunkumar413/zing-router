import React, { useEffect, useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Test } from "./Test";

export function Router(props) {
  const [currComponent, setCurrentComponent] = useState("");
  const [currPath, setCurrPath] = useState("");

  const routerConfig = {
    "/about": <About />,
    "/contact": <Contact />,
    "/test": <Test />,
  };

  useEffect(function () {
    let allLinkElements = document.querySelectorAll(".customLink");
    allLinkElements.forEach(function (item) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();

        let link = this.href;
        let url = new URL(link);
        let path = url.pathname;

        // let currComponent = routerConfig[path];
        setCurrPath(path);
      });
    });
  });

  return (
    <div>
      {props.children}

      {routerConfig[currPath]}
    </div>
  );
}
