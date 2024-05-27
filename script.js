const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  // toggle allows you to open and unopen so you can open or close the search bar
  search.classList.toggle("active");
  //   the focus will make sure that once the search bar opens the user can directly start typing instead of having to click in the box before typing
  input.focus();
});
