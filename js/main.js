let joinbuts = document.querySelectorAll(".all_buttons_join");
for (let joinbut of joinbuts) {
  joinbut.onclick = function (event) {
    window.location.href = "./join.html";
  };
}
