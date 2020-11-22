// $(function(){
// 	$(".e_left").children("li").eq(0).hover(function(){
// 		$(this).children("a").children("img").attr("src","../images/hwb.jpg")
// 	},function(){
// 		$(this).children("a").children("img").attr("src","../images/wbb.jpg")
// 	})
// 	$(".e_left").children("li").eq(1).hover(function(){
// 		$(this).children("a").children("img").attr("src","../images/hwx.jpg")
// 	},function(){
// 		$(this).children("a").children("img").attr("src","../images/huwxx.jpg")
// 	})
// })

// // 点击获取内容
// $(function(){
// 	$(".dh").children("li").children("a").click(function(){
// 		var a=$(this).text();
// 		$(".wz").text(a)
// 	})
// })
// //二级菜单
// $(function(){
// 	$(".dh").children("li").hover(function(){
// 		$(this).children(".ejlb").css("display","block")
// 		$(this).children(".ejlb1").css("display","block")
// 	},function(){
// 		$(this).children(".ejlb").css("display","none")
// 		$(this).children(".ejlb1").css("display","none")
// 	})
// })
// //手机端
// $(function(){
// 	$(".a1").click(function(){
// 		$(".sjx").slideToggle()
// 	})
// })

// $(function(){
// 	$("#zp2").children().click(function(){
// 		var a=$(this).text();
// 		$(".wz").text(a)
// 		$(".div_img").css("transform","rotate(360deg)")
// 		if($(".div_zp_erji").css("display")=="none"){
// 			$(".div_zp_erji").css("display","block")
// 		}else{
// 			$(".div_zp_erji").css("display","none")
// 		}
// 	})
	
// 	$(".wz,.rz").click(function(){
// 		if($(".div_zp_erji").css("display")=="none"){
// 			$(".div_zp_erji").css("display","block")
// 			$(".div_img").css("transform","rotate(180deg)")
// 			$(".div_img").css("top","-26px")
// 		}else{
// 			$(".div_zp_erji").css("display","none")
// 			$(".div_img").css("top","-24px")
// 			$(".div_img").css("transform","rotate(360deg)")
// 		}
// 	})
	
// })
// window.onscroll=function(){
// var x=document.documentElement.scrollTop;
// var con=document.getElementById("a")
// var con1=document.getElementById("b")
// if(x>=470){
// 	con.style.display="none";
// 	con1.style.display="block";
	
// }else{
// 	con.style.display="block";
// 	con1.style.display="none";
	
// }
// var mg=document.getElementById("con")
// 			if(x>1800){
// 				mg.style.left="25%"
// 				mg.style.width="20%"
// 				setTimeout(2000)
// 				if(mg.style.width=="20%"){
// 					mg.style.width="12.5%"
// 				}
// 				if(x>2920){
// 					mg.style.left="37.5%"
// 					if(x>4100){
// 						mg.style.left="50%"
// 						if(x>5280){
// 							mg.style.left="62.5%"
// 						}
// 						if(x>6460){
// 							mg.style.left="75%"
// 						}
// 						if(x>7640){
// 							mg.style.left="87.5%"
// 						}
// 					}
// 				}
// 			}else{
// 				mg.style.left="12.5%"
// 			}
		
// }


// $(document).ready(function(){
// 		    $("#btn").hide();
// 		    $(function() {
// 		      $(window).scroll(function() {
// 		        if ($(window).scrollTop() >=0) {
// 		          $("#btn").fadeIn(200);
// 		        } else {
// 		          $("#btn").fadeOut(200);
// 		        }
// 		      });
// 		      $("#btn").click(function() {
// 		        $('body,html').animate({
// 		          scrollTop: 0
// 		        },500);
// 		      })
// 		    })
// 		  })
		