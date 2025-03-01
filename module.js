document.querySelector("#parent")?.addEventListener("click", function (e) {
  // e.stopPropagation();
  console.log("parent clicked");
});

document.querySelector("#outer")?.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("outer clicked");
});

document.querySelector("#inner")?.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("inner clicked");
});
