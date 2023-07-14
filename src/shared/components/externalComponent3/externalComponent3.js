export function Component3(content = "") {
  const element = document.createElement("div");
  const pre = document.createElement("pre");
  pre.innerHTML = content;
  element.appendChild(pre);
  return element;
}
