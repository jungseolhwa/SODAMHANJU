$(document).ready(function(){
	// 함수를 2초마다 실행합니다.

	
	$(window).scroll(function(){
				if($(this).scrollTop() > 4700){					
				  $("#cup ul li:nth-child(1)").css("left","350px");	
				  $("#cup ul li:nth-child(2)").css("top","600px");	
				  $("#cup ul li:nth-child(3)").css("left","1200px");		
				}else{
				  $("#cup ul li:nth-child(1)").css("left","0px");	
				  $("#cup ul li:nth-child(2)").css("top","900px");	
				  $("#cup ul li:nth-child(3)").css("left","1500px");	
				}
			});
			/*$("#top_bt").click(function(){
				$("html,body").animate({scrollTop:0},200);*/
	

	
	/*******신상품마우스오버시 이미지변환***********/
 
  $('#a').hover(function(){ 
      $(this).css('opacity','0');
	  $('#a2').css('opacity','1');
  },function(){
      $(this).css('opacity','1');
	  $('#a2').css('opacity','0');
  });
  
  $('#b').hover(function(){ 
      $(this).css('opacity','0');
	  $('#b2').css('opacity','1');
  },function(){
      $(this).css('opacity','1');
	  $('#b2').css('opacity','0');
  });
  
  $('#c').hover(function(){ 
      $(this).css('opacity','0');
	  $('#c2').css('opacity','1');
  },function(){
      $(this).css('opacity','1');
	  $('#c2').css('opacity','0');
  });
  
  $('#d').hover(function(){ 
      $(this).css('opacity','0');
	  $('#d2').css('opacity','1');
  },function(){
      $(this).css('opacity','1');
	  $('#d2').css('opacity','0');
  });


	
	
/***********소개쪽 스크롤시 서서히등장***********/


	
  function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('#int1,#int2,#made');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  })
}



window.addEventListener('scroll', handleScroll);



			
			
/***********팝업메뉴사진효과***********/			
$('#menu1 li:nth-child(2)').on('click',function(){
	$('#menupop').css('display','block');
});

$(".close").click(function(){
		$("#menupop").css("display","none");
	
});

$('.bodybox2 ul li:nth-child(1)').mouseover(function(){
		$('#menupop1').css('display','inline');
			});
	
		
$('.bodybox2 ul li:nth-child(1)').mouseout(function(){
		$('#menupop1').css('display','none');
	
		});
		
		
$('.bodybox2 ul li:nth-child(2)').mouseover(function(){
		$('#menupop2').css('display','inline');
			});
	
		
$('.bodybox2 ul li:nth-child(2)').mouseout(function(){
		$('#menupop2').css('display','none');
	
		});
		
		
$('.bodybox2 ul li:nth-child(3)').mouseover(function(){
		$('#menupop3').css('display','inline');
			});
	
		
$('.bodybox2 ul li:nth-child(3)').mouseout(function(){
		$('#menupop3').css('display','none');
	
		});
		
$('.bodybox2 ul li:nth-child(4)').mouseover(function(){
		$('#menupop4').css('display','inline');
			});
	
		
$('.bodybox2 ul li:nth-child(4)').mouseout(function(){
		$('#menupop4').css('display','none');
	
		});
	
	
$('.bodybox2 ul li:nth-child(5)').mouseover(function(){
		$('#menupop5').css('display','inline');
			});
	
		
$('.bodybox2 ul li:nth-child(5)').mouseout(function(){
		$('#menupop5').css('display','none');
	
		});
	
	
$('.bodybox2 ul li:nth-child(6)').mouseover(function(){
		$('#menupop6').css('display','inline');
			});
	
		
$('.bodybox2 ul li:nth-child(6)').mouseout(function(){
		$('#menupop6').css('display','none');
	
		});
	

var i=10;
/*-----   best  -----*/
/**** 오른쪽 화살표 누르면 ****/
$('#R_arrow').click(function(){
	i++;		
	imgSize=363*i;
	
	if((i%21)==0){			
		$('#best_img').css("left","-3630px");  	
		i=10;        		
	} else{
		$('#best_img').stop().animate({'left':-imgSize+"px"},1200,'linear');
	}	
	
	back();	
});

/**** 왼쪽 화살표 누르면 ****/
$('#L_arrow').click(function(){
	i--;	
	imgSize=363*(i);
	
	if((i%16)==0){
		i=10;
		$('#best_img').css("left","-3630px");  	
	} else{
		$('#best_img').stop().animate({'left':-imgSize+"px"},1200,'linear');
	}	
		
	back();	
});


function back(){
	//alert(i);

	var index=(i%5);
	//alert(index);
	if(index==0){		
	    $('#best').removeClass().addClass('bg3'); 
	}
	else if(index==1){
	    $('#best').removeClass().addClass('bg4'); 		 
	}
	else if(index==2){
	    $('#best').removeClass().addClass('bg5'); 		
	}
	else if(index==3){			
	    $('#best').removeClass().addClass('bg1');     
	}
	else if(index==4){
	    $('#best').removeClass().addClass('bg2'); 		
	}	
}//back()	

			
/***********광고***********/


$(".close2").click(function(){
		$("#adpop").css("display","none");
	
});

/***********올라가는버튼나타남***********/

var btn = $('.upbt');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


				
				
});//전체