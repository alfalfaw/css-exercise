const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click", () => {
  document.querySelector("header").classList.toggle("open");
});

const switchEl = document.querySelector(".switch");
const videoEl = document.querySelector("video");
switchEl.addEventListener("click", () => {
  const span = switchEl.children[0];

  span.classList.toggle("icon-sound-mute");
  span.classList.toggle("icon-sound-");
  if (span.classList.contains("icon-sound-")) {
    videoEl.muted = false;
  } else {
    videoEl.muted = true;
  }
});
