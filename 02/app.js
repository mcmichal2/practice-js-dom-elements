
const a = document.querySelectorAll("a").forEach(el=>{if(el.hasAttribute("data-url")){
el.setAttribute("href",el.getAttribute("data-url"));
}});

