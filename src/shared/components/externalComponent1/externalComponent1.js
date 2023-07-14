import { add_one } from "@/externalLib";
import { joinArr } from "@/shared";

export function Component() {
  const element = document.createElement("div");
  element.innerHTML = joinArr(['1', 2, 3], "-") + add_one("component1");
  return element;
}
