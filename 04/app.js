
// solution1:
// const nav = document.createElement("nav");
// const ul = document.createElement("ul");
// const links = ["/", "/gallery", "/contact"];
// const names=["start","galeria","kontakt"];

// document.body.appendChild(nav);
// document.querySelector("nav").appendChild(ul);
// const ul1 = document.querySelector("ul");

// for(let i =0; i<3; i++){
//     const a = document.createElement("a");
//     a.setAttribute("href",links[i]);
//     a.innerText=names[i];
//     const li = document.createElement("li");
//     li.appendChild(a);   
//    ul1.appendChild(li);
// }

// solution2
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
]
const nav = document.createElement("nav");
const ul = document.createElement("ul");

document.body.appendChild(nav);
document.querySelector("nav").appendChild(ul);
const ul1 = document.querySelector("ul");

for(let i =0; i<menuItems.length; i++){
    const a = document.createElement("a");
    a.setAttribute("href",menuItems[i].url);
    a.innerText=menuItems[i].text;
    const li = document.createElement("li");
    li.appendChild(a);   
   ul1.appendChild(li);
}