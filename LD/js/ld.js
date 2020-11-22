$(function(){
    $(".b1").click(function(){
        $(this).parent().next().find(".u1").slideToggle()
    })
    function aa(){
        var a=0
      var b=0
      function cc(){
        z=b-a
      if(z>0){
          $(".bac").stop().animate({"top":"-91px"},300)
        }else{
          $(".bac").stop().animate({"top":"0"},300)
        }
     }
  
    $(window).scroll(function(){
     b=$(window).scrollTop()
        cc()
        a=b
     })
      }
      aa()
})
    