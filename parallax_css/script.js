// based on: https://css-tricks.com/books/greatest-css-tricks/scroll-animation/

console.log("scrtiped :)");
const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener(
  "scroll",
  () => {
    const bottom = wrapper.scrollHeight - wrapper.offsetHeight;
    const scrollValue = wrapper.scrollTop;
    let percent = scrollValue / bottom;
    console.log("🚀 > ", percent);
    document.body.style.setProperty("--scroll", percent);
  },
  false
);
