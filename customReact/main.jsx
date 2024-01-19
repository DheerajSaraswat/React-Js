function customRender(element, container) {
//   const tag = document.createElement(`${element.type}`);
//   tag.setAttribute("href", `${element.attributes.href}`);
//   tag.setAttribute("target", `${element.attributes.target}`);
//   tag.innerHTML = element.content
//   container.appendChild(tag);\
const tag = document.createElement(element.type)
tag.innerHTML = element.content
    for (const key in element.attributes) {
        tag.setAttribute(`${key}`,`${element.attributes[key]}`)
        // tag.setAttribute(`${key}`, `${element.attributes.key}`); // it does not work because object's key is changing so when key is dynamic we use []
    }
    container.appendChild(tag)
}

const root = document.getElementById("root");

const reactElement = {
  type: "a",
  content: "click to go to google website",
  attributes: {
    target: "_blank",
    href: "https://www.google.com",
  },
};
customRender(reactElement, root);
