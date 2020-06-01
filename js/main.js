$(function(){
  // ハンバーガーメニュー////////////////
  $(document).ready(function() {
    $('.drawer').drawer();
  });

  // ローディングgif////////////////////
    var h = $(window).height();
    
    $('.wrapper').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','block');
    
  $(window).on('load', function () { // 読み込み完了したら実行する
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('.wrapper').css('display', 'block');
  });
});