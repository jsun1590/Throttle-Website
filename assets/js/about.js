$(document).ready(() => {
  new TypeIt("#i-am", {
    speed: 70,
    startDelay: 900,
    deleteSpeed: 60,
  })
    .type("I am an <span class='highlight'>EDM artist.</span>", {delay: 2000})
    .delete(13)
    .type(" <span class='highlight'>guitarist.</span>", {delay: 2000})
    .delete(10)
    .type(" <span class='highlight'>musician.</span>", {delay: 2000})
    .delete(9)
    .type(" <span class='highlight'>DJ.</span>", {delay: 2000})
    .delete(3)
    .type(" <span class='highlight'>Producer.</span>", {delay: 2000})
    .delete(14)
    .type("<span class='highlight'>Throttle.</span>")
    .go();
});
