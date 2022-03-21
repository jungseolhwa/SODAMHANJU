 $(document).ready(function(){
	// 함수를 2초마다 실행합니다.

 
 
 var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });  });