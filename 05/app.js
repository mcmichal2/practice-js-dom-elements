

const curr = document.querySelector('.js-curr');


const parent = curr.parentElement;
const btn = document.createElement("button");
btn.innerText="usuń z koszyka";
parent.appendChild(btn);
const children= parent.children;

for(child of children){
    if(child.classList.contains("js-curr")){
        console.log("da")
    }
    else{
        child.classList.add("sibling")
    }
}
const parentSibling = parent.nextElementSibling;
parentSibling.setAttribute("title","nextElementSibling")