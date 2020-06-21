const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click", () => {
  document.querySelector(".header-container").classList.toggle("open");
});

const bannerEl = document.querySelector(".banner .caption");
anime({
  targets: bannerEl.children,
  opacity: [0, 1],
  duration: 400,
  easing: "linear",
  delay: anime.stagger(400, { start: 300 }),
  translateY: [anime.stagger([40, 10]), 0],
});

// 滚动展示
const staggeringOption = {
  delay: 300,
  distance: "50px",
  duration: 500,
  easing: "ease-in-out",
  origin: "bottom",
};

ScrollReveal().reveal(".board", { ...staggeringOption, interval: 350 });
ScrollReveal().reveal(".service>:first-child", {
  ...staggeringOption,
  interval: 350,
  origin: "left",
});
ScrollReveal().reveal(".service>:last-child", {
  ...staggeringOption,
  interval: 350,
  origin: "right",
});
