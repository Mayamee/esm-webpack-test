import { joinArr } from "@/shared";
import { add_one } from "@/externalLib";

export function Component2() {
  const element = document.createElement("div");

  element.innerHTML = joinArr(["1", 2, 3], "+") + add_one("component2");

  return element;
}
