console.log("loaded");

const header = document.querySelector(".main");
const grid = document.querySelector(".list");
const headerTemplate = document.getElementById("template2");
const cardTemplate = document.getElementById("template1");
header.append(headerTemplate.content.cloneNode(true));
for (let i = 0; i < 10; i++) {
  grid.append(cardTemplate.content.cloneNode(true));
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((posts) => {
    console.log("🚀 ~ file: script.js ~ line 13 ~ .then ~ posts", posts);
    grid.innerHTML = "";
    

    posts.forEach((post) => {
      const div = cardTemplate.content.cloneNode(true);
      div.querySelector("[data-title]").textContent = post.title;
      div.querySelector("[data-body]").textContent = post.body;
      grid.append(div);
    });
  });
