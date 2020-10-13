window.addEventListener('scroll', function () {
  let navbar = document.querySelector('.navbar');
  let windowPosition = window.scrollY > 10;
  navbar.classList.toggle('sticky', windowPosition);
});
