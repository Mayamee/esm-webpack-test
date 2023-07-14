import { Component as C0 } from "@/modules/m0";
import { Component as C1 } from "@/modules/m1";
import {
  Component as ExtC0,
  Component2 as ExtC2,
  Component3 as ExtC3,
} from "@/shared";
import { default as test } from "@data/test";
import { default as test2 } from "@data/test2";

const addComponent = (c) => {
  document.body.appendChild(c);
};

addComponent(C0());
addComponent(C1());
addComponent(ExtC0());
addComponent(ExtC2());
addComponent(ExtC3(JSON.stringify(test, null, 2)));
addComponent(ExtC3(JSON.stringify(test2, null, 2)));
