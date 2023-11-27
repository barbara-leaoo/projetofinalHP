// No arquivo seuarquivo.js
$('.next').click(function() {
    $('.carousel').animate({marginLeft: '-=120px'}, 'slow');
  });
  
  $('.prev').click(function() {
    $('.carousel').animate({marginLeft: '+=120px'}, 'slow');
  });

  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const nextButton = document.querySelector('.next');
  
    nextButton.addEventListener('click', function() {
      const firstImage = carousel.firstElementChild;
      const lastImage = carousel.lastElementChild;
      const currentScroll = carousel.scrollLeft;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  
      if (currentScroll >= maxScroll) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: 100, behavior: 'smooth' });
      }
    });
  });
  
  