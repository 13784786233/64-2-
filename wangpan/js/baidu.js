function media(){
    var iw=window.innerWidth;
    var newiw=iw*100/1080;
    document.getElementsByTagName("html")[0].style.fontSize=newiw+"px";
}
window.onresize=media;
media();
$(function(){
    $(".nav li").mouseenter(function(){
        $(this).css("border-bottom","4px solid #1a89ed").siblings().css("border-bottom","transparent")
    })
})
$(function(){
   $(".jieshao img").click(function(){
       $(this).siblings().toggle()
   })
})
$(function(){
    $(".ys2_dao_1_1").mouseenter(function(){
        $(this).css("box-shadow","0rem 0.06rem 0.08rem #ccc").siblings().css("box-shadow","none")
    })
})
$(function(){
    $(".ys2_dh2121").mouseenter(function(){
        $(this).css({"background":"#64b7f7","color":"#fff"}).siblings().css({"background":"none","color":"#000"})
    })
})
$(function(){
    $(".ys2_gz1111").mouseenter(function(){
        $(this).css({"background":"#fff","color":"#000"}).siblings().css({"background":"transparent","color":"#fff"})
    })
})