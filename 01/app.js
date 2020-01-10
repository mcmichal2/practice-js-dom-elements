let secundo =[];
let first = Array.from(document.querySelectorAll(".comments__item" && ".comments__item--newest"));
for (el of first){
   secundo.push(el.hasAttribute("[data-info]"))
}
console.log(secundo.length);