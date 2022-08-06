const myVideo = document.querySelector(".about-video");
var button_play = document.querySelector(".about-play");
const activeClass = "active";
function playPause() {
  if (myVideo.paused) {
    myVideo.play();
    button_play.classList.add(activeClass);
    myVideo.setAttribute("controls", "true");
  } else {
    myVideo.pause();
    myVideo.setAttribute("controls", "false");
  }
}

const toggle_menu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const hero = document.querySelector(".hero");

const showClass = "is-show";
const active_hero_Class = "is-hero-active";
let check = true;

toggle_menu.addEventListener("click", function () {
  if (check == true) {
    menu.classList.add(showClass);
    hero.classList.add(active_hero_Class);
    check = false;
  } else {
    menu.classList.remove(showClass);
    hero.classList.remove(active_hero_Class);
    check = true;
  }
});

