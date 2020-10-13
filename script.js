window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.navbar');
  let windowPosition = window.scrollY > 10;
  navbar.classList.toggle('sticky', windowPosition);
});

function navSlide() {
  const burger = document.querySelector('.menu-btn');
  const nav = document.querySelector('.navbar .menu');
  const burgerIcon = document.querySelector('.menu-btn i');
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
  });
}

navSlide();
