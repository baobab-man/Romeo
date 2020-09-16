$(function() {
    var $slide_section=$("#slide_section").find("ul");
    var $slide_section_Width=$slide_section.children().outerWidth();
    var $slide_section_Height=$slide_section.children().outerHeight();
    var $length=$slide_section.children().length;
    var rollingId;
    rollingId = setInterval(function() {rollingStart();}, 1500);
    function rollingStart() {
        $slide_section.css("width", $slide_section_Width * $length +"px" );
        $slide_section.css("height", $slide_section_Height + "px" );
        $slide_section.animate({left: - $slide_section_Width + "px"}, 1500, function() {
            $(this).append("<li>"+$(this).find("li:first").html() +"</li>");
            $(this).find("li:first").remove();
            $(this).css("left", 0);
            
        });
    }
});

// /* 첫번째 방법 */
// var time; // 슬라이드 넘어가는 시간
// var slideImg;
// var slideImgCnt; // 슬라이드 사진 갯수
// var currentIndex; // 현재 보여지는 슬라이드 인덱스 값
// var slideInterval;
// var imgWidth; // 이미지 한장의 너비
// $(function(){
//     slideInit(510, 2000);
// });

// // 초기 설정 
// function slideInit( height, t ){  //(슬라이드 높이, 슬라이드 넘어가는 시간)
// 	time = t;
// 	$("#slide_section").height(height); // 슬라이드 높이 설정
// 	slideImg = $("#slide_section > ul > li");
// 	slideImgCnt = slideImg.length; // 슬라이드 사진 갯수
// 	currentIndex = 0; // 현재 보여지는 슬라이드 인덱스 값
// 	slidePosition();
// 	slide();
// }

// function slidePosition(){
// 	imgWidth = slideImg.width(); // 사진 한장의 너비	
// 	// 이미지 위치 조정
// 	for (var i = 0; i < slideImgCnt; i++) {
// 		if (i == currentIndex) {
// 			slideImg.eq(i).css("left", 0);
// 		} else {
// 			slideImg.eq(i).css("left", imgWidth);
// 		}
// 	}
// }

// function slide(){
// 	// 슬라이드 넘기기
// 	// 슬라이드 하나가 넘어간 후 다시 꼬리에 붙어야함
// 	// 화면에 보이는 슬라이드만 보이기
// 	slideInterval = setInterval(function(){
// 		var left = "-" + imgWidth;

// 		//현재 슬라이드를 왼쪽으로 이동 ( 마이너스 지점 )
// 		slideImg.eq(currentIndex).animate( { left: left }, function(){
// 			// 다시 오른쪽 (제자리)로 이동
// 			slideImg.eq(currentIndex).css("left", imgWidth);

// 			if (currentIndex == (slideImgCnt - 1)) {
// 				currentIndex = 0;
// 			} else {
// 				currentIndex ++;
// 			}
// 		} );

// 		// 다음 슬라이드 화면으로
// 		if (currentIndex == (slideImgCnt - 1)) {
// 			// 마지막 슬라이드가 넘어갈땐 처음 슬라이드가 보이도록
// 			slideImg.eq(0).animate( { left: 0 } );
// 		} else {
// 			slideImg.eq(currentIndex + 1).animate( { left: 0 } );
// 		}
// 	}, time);
// }


// window.onload = function() {
//     var bannerLeft = 0;
//     var first = 1;
//     var last;
//     var imgCnt = 0;
//     var $img = $(".MainImg img");
//     var $first;
//     var $last;
//     $img.each(function() {
//         $(this).css("left", bannerLeft);
//         bannerLeft += $(this).width()+1;
//         $(this).attr("id", "banner"+(++imgCnt));
//     });

//     if(imgCnt > 4) {
//         last = imgCnt;
//         setInterval(function() {
//             $img.each(function() {
//                 $(this).css("left", $(this).position().left-1);
//             });
//             $first = $("#banner"+first);
//             $last = $("#banner"+last);
//             if($first.position().left < -1000) {
//                 $first.css("left", $last.position().left + $last.width()+1);
//                 first++;
//                 last++;
//                 if(last > imgCnt) { last = 1;}
//                 if(first > imgCnt) { first = 1;}
//             } 
//         }, 50);
//     }

// }



// $(document).ready(function() {
//     (function() {  //이미지 움직이기
//         var IndexNum = 0;  //이미지 인덱스 번호
//         var Cnt = $('.MainImg > div img').length;  //이미지 갯수
//         var Run = null;  //이미지 재생담을 변수 초기화
//         var ArrImg = $('.MainImg > div img');  //이미지 집합
//         var Wrap = $('.MainImg > div');       //이미지 집합소
        
//         Starting(); //이미지 쇼 시작
        
//         Wrap.hover(  //마우스로 올려놨을때 멈춤, 마우스 떠나면 재개 
//             Stopping,
//             Starting
//         );

//         function ImgInterval () {  //이미지 페이드인, 페이드아웃 반복재생
//             ArrImg.eq(IndexNum).fadeOut(1000);  //이미지 집합소에 있는 이미지중에 현재 이미지 인덱스 번호를 가진 이미지가 페이드아웃
//             IndexNum = (IndexNum - 1) % Cnt;  //다음에 올 이미지 인덱스 번호 지정
//             ArrImg.eq(IndexNum).fadeIn(1000);  //다음 이미지 인덱스 번호를 가진 이미지가 페이드인  
//         }
        
//         function Starting () {  //
//             if (Run)
//                 return;
//             Run = setInterval(ImgInterval, 1000);
//         }
        
//         function Stopping () {
//             if (Run) {
//                 clearInterval(Run);
//                 Run = null;
//             }
//         }
//     })();
// });


// function() {
//                 clearInterval(imageInterval);
//             },
//             function() {
//                 imageInterval = setInterval(function() {


// $(document).ready(function() {
//     $(".MainImg div").each(function(e, i) {
//         console.log(i);
//         var $slides = $(this).find("img");
//         var slideCnt = $slides.length;
//         var currentIndexNum = 0;

//         $slides.eq(currentIndexNum).fadeIn(2000);
//         setInterval(showNextSlide, 2000);
//         function showNextSlide() {
//             var nextIndexNum = (currentIndexNum +1) % slideCnt;
//             $slides.eq(currentIndexNum).fadeOut(2000);
//             $slides.eq(nextIndexNum).fadeIn(2000);

//             currentIndexNum = nextIndexNum;
//         }
//     });
// });

// $(document).ready(function() {
//     var i = 0;
//     run = setInterval(function() {
//         $('.MainImg > div #img'+(i%3)).delay((i%3)*3000).fadeOut(3000);
//         i++;
//     });
// });


// $(document).ready(function() {
//     // var turn = 1;
//     // var imgData0 = $('.MainImg > div #img0');
//     // var imgData1 = $('.MainImg > div #img1');
//     // var imgData2 = $('.MainImg > div #img2');
//     // var go ="./img/main_img_0"+turn+".png";
//     var imageInterval = setInterval(function() {
//         for (var i = 0; i < 3; i++) {
//             $('.MainImg > div #img'+i).delay(i*3000).fadeOut(3000);
            
//         }
//         // imgData1.delay(3000).fadeOut(3000);
//         // imgData2.delay(6000).fadeOut(3000);
//     }); 

//     $(".MainImg > div").hover(
//         function() {
//             clearInterval(imageInterval);
//         },
//         function() {
//             imageInterval = setInterval(function() {
//                 for (var i = 0; i < 3;  i++) {
//                     $('.MainImg > div #img'+i).delay(i*3000).fadeOut(3000);
                    
//                 }
//             });
//         }
//     );
// }); 





// $(document).ready(function() {
//     var turn = 0;
//     var imgData = $(".MainImg > div img")
//     var imageInterval = setInterval(function() {
//         imgData.attr("src","./img/main_img_0"+turn+".png");
//         turn++;
//         if (turn == 3) {
//             turn =0;
//         }
//     },1000);

//     $(".MainImg > div").hover(
//         function() {
//             clearInterval(imageInterval);
//         },
//         function() {
//             imageInterval = setInterval(function() {
//                 imgData.attr("src","./img/main_img_0"+turn+".png");
//                 turn++;
//                 if (turn == 3) {
//                     turn =0;
//                 }
//             }, 1000);
//         }
//     , 1000);
// }); 



// $(document).ready(function() {
//     $(".MainImg > div:gt(0)").hide();
//     var imageInterval = setInterval(function() {  //setInterval
//         $('.MainImg > div:first')
//         .fadeOut(1000)
//         .next(1000)
//         .fadeIn(1000)
//         .end(1000)
//         .appendTo('.MainImg');
//     }, 1000);

//     $('.MainImg').hover(  //hover
//         function() {
//             clearInterval(imageInterval);  //clearInterval
//         },
//         function() {
//             imageInterval = setInterval(function() {
//                 $('.MainImg > div:first')
//                 .fadeOut(1000)
//                 .next(1000)
//                 .fadeIn(1000)
//                 .end(1000)
//                 .appendTo('.MainImg');
//             }, 1000);
//         }
//     );
// });


// $(document).ready(function() {
//     var i=1;
//     var j=2;
//     var k=3;
//     while(true){
//         if (i % 4 == 1) {
//             $(".MainImg > div #img"+i%4).delay(0).fadeOut(3000);
//             if (j % 4 == 2) {
//                 $(".MainImg > div #img"+j%4).delay(3000).fadeOut(3000);
//                 if (k % 4 == 3) {
//                     $(".MainImg > div #img"+k%4).delay(6000).fadeOut(3000);
//                     k=k+4;
//                 }
//                 j=j+4;
//             }
//             i=i+4;
//         }
//     }       
// });

//     $('.MainImg').hover(  //hover
//         function() {
//             clearInterval(imageInterval);  //clearInterval
//         },
//         function() {
//             imageInterval = setInterval(function() {
//                 var Cnt=1;
//                 while (Cnt==1){
//                     $(".MainImg > div #img"+Cnt).fadeOut(3000);
//                     $(".MainImg > div #img"+Cnt+1).delay(3000).fadeOut(3000);
//                     $(".MainImg > div #img"+Cnt+2).delay(6000).fadeOut(3000);
//                     Cnt++;
//                     if (Cnt == 2) {
//                         Cnt =1;
//                     }
//                 }
//             }, 3000);
// });


// $(document).ready(function() {
//     // $(".MainImg > div:gt(0)").hide();
//     var imageInterval = setInterval(function() {  //setInterval
//         var currentImg = 0;
//         while( currentImg < 4 ) {
//             $("#img" + currentImg).fadeOut(1000)    
//             .next(1000);
//             currentImg++;
//             if (currentImg == 3){
//                 currentImg = 0;
//             }
//             $("#img" + currentImg).fadeIn(1000)
//             .end(1000);
//         }
//     }, 1000);

//     $('.MainImg').hover(  //hover
//         function() {
//             clearInterval(imageInterval);  //clearInterval
//         },
//         function() {
//             imageInterval = setInterval(function() {  //setInterval
//                 var currentImg = 0;
//                 while( currentImg < 4 ) {
//                     $("#img" + currentImg).fadeOut(1000)    
//                     .next(1000);
//                     currentImg++;
//                     if (currentImg == 3){
//                         currentImg = 0;
//                     }
//                     $("#img" + currentImg).fadeIn(1000)
//                     .end(1000);
//                 }
//             }, 1000);
//         }
//     );
// });