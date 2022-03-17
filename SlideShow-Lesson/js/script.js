
// $(".theTarget").skippr({
//   transition: "fade",
//   speed: 1000,
//   easing: "easeOutQuart",
//   navType: "block",
//   childrenElementType: "div",
//   arrows: true,
//   autoPlay: false,
//   autoPlayDuration: 5000,
//   keyboardOnAlways: true,
//   hidePrevious: false
// })


// ボタンどこ ?

// $('セレクタ名').animate({
//   変化対象のプロパティ名:変化値
// }, アニメーションの動作時間);
$(function () {
  $("#back a").on("click", function (event) {
    $("body, html").animate({
      scrollTop: 0
    }, 800);
    event.preventDefault();
  });
});