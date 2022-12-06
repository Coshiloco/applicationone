export { default as Article } from "./article/Article.jsx";
export { default as Brand } from "./brand/Brand.jsx";
export { default as CTA } from "./cta/CTA.jsx";
export { default as Feature } from "./feature/Feature.jsx";
export { default as Navbar } from "./navbar/Navbar.jsx";

const hidden = {
  hiddenArrowUpOne : 'none',
  hiddenArrowUpDown : 'none',

}

console.log(hidden)

hidden.hiddenArrowUpOne = "flex"

console.log(hidden)
