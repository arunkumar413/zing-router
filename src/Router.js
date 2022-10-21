import React, { useEffect, useState } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { Test } from "./Test";
import UrlPattern from "url-pattern";
import { NumericTest } from "./NumericPath";

export function Router(props) {
  const [currComponent, setCurrentComponent] = useState("");
  const [currPath, setCurrPath] = useState("");

  const routerConfig = {
    "/about": <About />,
    "/contact": <Contact />,
    "/test": <Test />,
    "/:id(\\d+)": <NumericTest />,
  };

  useEffect(function () {
    let allLinkElements = document.querySelectorAll(".customLink");
    allLinkElements.forEach(function (item) {
      item.addEventListener("click", function (evt) {
        evt.preventDefault();
        history.pushState("", this.href, this.href);

        var link = this.href;
        let url = new URL(link);
        let path = url.pathname;

        // let currComponent = routerConfig[path];
        setCurrPath(path);
        let pattern = new URLPattern({ pathname: "/:id(\\d+)" });
        let res = pattern.test(link);
        if (res === true) {
        }

        let keys = Object.keys(routerConfig);
        keys.forEach(function (item, index) {
          let pattern = new URLPattern({ pathname: item });
          if (pattern.test(link)) {
            setCurrPath(item);
          }
        });
        console.log(keys);
        console.log(link);
        console.log(res);
      });
    });
  }, []);
  return (
    <div className="zing-router">
      <div className="container">
        {props.children}

        {routerConfig[currPath]}
      </div>
    </div>
  );
}
