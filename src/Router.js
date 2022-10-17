import React, { useEffect, useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Test } from "./Test";

export function Router(props) {
  const [currComponent, setCurrentComponent] = useState("");
  useEffect(function () {
    let allLinkElements = document.querySelectorAll(".customLink");
    allLinkElements.forEach(function (item) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();

        let link = this.href;
        let url = new URL(link);
        let path = url.pathname;

        let routerConfig = {
          "/about": <About />,
          "/contact": <Contact />,
          "/test": <Test />
        };
        let currComponent = routerConfig[path];
        setCurrentComponent(currComponent);
      });
    });
  });

  return (
    <div>
      {props.children}

      {currComponent}
    </div>
  );
}
