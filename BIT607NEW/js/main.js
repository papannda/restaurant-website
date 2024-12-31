'use strict';
$(".qa-list-title").on("click", function (e) {
    $(this).toggleClass("open"); 

    var content = $(this).next();
    content.slideToggle();
});



$('.js-fadein-left').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },
  
  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

$('.js-fadein-right').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },
  
  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

  
