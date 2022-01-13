new WOW().init();
window.addEventListener("scroll", function () {
  var nav = document.querySelector(".navbar");
  nav.classList.toggle("sticky", window.scrollY > 100);
});
var btn = document.querySelector(".scrollup");
window.addEventListener("scroll", function () {
  btn.classList.toggle("scrollblock", window.scrollY > 100);
});
btn.addEventListener("click", () => {
  document.body.scrollTop = "0";
  document.documentElement.scrollTop = "0";
});
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTime: 500,
  nav: true,
  dots: false,
  responsive: { 0: { items: 1 }, 992: { items: 2 }, 1000: { items: 3 } },
});
