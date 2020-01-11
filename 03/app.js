

const buttonSettings = {
    attr: {
        class: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}
const parent = document.querySelector(".parent-for-button");
const button = document.createElement("button");
const css = [];

for (const attr in buttonSettings.css) {

    let value = `${attr}:${buttonSettings.css[attr]};`;
    css.push(value);

}
button.setAttribute("style", css.join(""));
for (let attr1 in buttonSettings.attr) {
    button.setAttribute(attr1, buttonSettings.attr[attr1]);
};
button.innerText = buttonSettings.text;


parent.appendChild(button);
