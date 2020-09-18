import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

console.log(nav());
console.log(bottom, makeButton("makeButton"), makeColorStyle("cyan"));
console.log("The dependency tree was started here");
