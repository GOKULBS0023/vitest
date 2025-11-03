import "./style.css";
import sum from "./sum.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = sum(
  1,
  2,
  3
).toString();
