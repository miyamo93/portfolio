$(function(){

  // ローディングgif////////////////////
  var h = $(window).height();
  
  $('.wrapper').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
  $(window).on('load', function () { // 読み込み完了したら実行する
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('.wrapper').css('display', 'block');
  });
  // ハンバーガーメニュー////////////////
  $(document).ready(function() {
    $('.drawer').drawer();
  });

  
  
  $('.slider').slick({
    slidesToShow:1,
    arrows: false,
    swipe:false,
    asNavFor:'.sliderThumb',
  });
  $('.sliderThumb').slick({
    slidesToShow:4,
    swipe:false,
    arrows: false,
    infinite:false,
    focusOnSelect: true,
    autoplay:false,
    asNavFor:'.slider',
  });

  $('.js-accordion').on("click", function() {
    $(this).next().slideToggle();
    $(this).hasClass("plus") && $(this).toggleClass("minus");
  });
});