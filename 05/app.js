const curr = document.querySelector('.js-curr');
const parent = curr.parentElement;
const parentParent = parent.parentElement;
const parentSibling = parent.nextElementSibling;
const parentSecondSibling = parentSibling.nextElementSibling;
const children= parent.children;
const btn = document.createElement("button");
const btn2 = document.createElement("button");
const p = document.createElement("p");
const p2 = document.createElement("p");
const article = document.createElement("article");
const h1 = document.createElement("h1");
const buttonIndex = [...parentSecondSibling.children].findIndex(el=>el.classList.contains("article__btn"));
//dodanie buttona 
btn.innerText="usuń z koszyka";
parent.appendChild(btn);
//dodanie klas do rodzeństwa
for(child of children){
    if(child.classList.contains("js-curr")){
       null
    }
    else{
        child.classList.add("sibling")
    }
}
//dodanie atrbutu title
parentSibling.setAttribute("title","nextElementSibling");
//dodanie paragrafu przed buttonem
p.innerText="Lorem Ipsume extra paragraph";
parentSecondSibling.insertBefore(p, parentSecondSibling.children[buttonIndex])
//dodanie artykułu o takiej samej zawartości (jako pierwszy)
article.setAttribute("class","articles__item article")
h1.innerText="DODANY ARTYKUŁ";
p2.innerText="tekst dodanego artykułu";
btn2.innerText = 'Kupuje!';
article.appendChild(h1);
article.appendChild(p2);
article.appendChild(btn2);
parentParent.insertBefore(article,parent)