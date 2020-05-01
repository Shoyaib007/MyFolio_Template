 $(function () {

     var tp = $(".top");
     var $dis = $(".full-nav").offset().top;
     var fn = $(".full-nav");


     tp.on('click', function () {
         $("html,body").animate({
             scrollTop: 0

         });
     });

     $(window).on('scroll', function () {
         var $scroll = $(this).scrollTop();


         if ($scroll != 0) {
             tp.fadeIn();
         } else {
             tp.fadeOut();
         }
     });

     //     back to top


     $(window).on('scroll', function () {
         var $scrolling = $(this).scrollTop();

         if ($scrolling > $dis) {
             fn.addClass("stricky");


         } else {
             fn.removeClass("stricky");

         }
     });


     //     sticky menu



 });
