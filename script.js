let arr_crash = [
  3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
];

let crash_container = document.querySelectorAll(".crash-container");

crash_container.forEach((element) => {
  element.addEventListener("click", () => {
    let no_crash_container;

    console.log(element.classList.contains("left-crash"));
    if (element.classList.contains("left-crash")) {
      no_crash_container = document.querySelector(".right-crash");
    } else {
      no_crash_container = document.querySelector(".left-crash");
    }

    if (arr_crash.length == 0) {
      no_crash_container.remove();
      if (element.children[0].src.slice(-6, -4) == 23) {
        element.remove();
        document.querySelector(".good-video").style.display = "block";
        document.querySelector(".good-video").children[0].play();
      } else {
        element.remove();
        document.querySelector(".bad-video").style.display = "block";
        document.querySelector(".bad-video").children[0].play();
      }
    } else {
      no_crash_container.children[0].src = `files/${arr_crash[0]}.jpg`;
      arr_crash.shift();
    }

    console.log(arr_crash.length);
  });
});

console.log(crash_container);
