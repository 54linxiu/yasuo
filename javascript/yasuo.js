$(function () {
  var ull = $("#bigimg ul");

  var k = -632;
  var ulll = $("#snal ul");
  var lil = $("#snal ul li:eq(0)");
  lil.addClass("smallb");
  ulll.find("li").each(function () {
    //亚索图片切换
    $(this).click(function () {
      // alert($(this).index())
      $("#snal ul li:eq(" + $(this).index() + ")")
        .addClass("smallb")
        .siblings()
        .removeClass("smallb");
      ull.stop().animate({ top: $(this).index() * k + "px" }, 500);
    });
  });

  //头部隐藏显示更多信息
  var herd = $("#xxzlD");
  var mb = $("#mask");
  var gmore = $("#xxzl");
  herd
    .mouseenter(function () {
      herd.css("height", "330px");
      mb.removeClass("mask").addClass("makstwo");
      if (!gmore.is(":animated")) gmore.stop().slideDown(500);
    })
    .mouseleave(function () {
      mb.removeClass("makstwo").addClass("mask");
      herd.css({ height: "50px" });
      if (!gmore.is(":animated")) gmore.stop().fadeOut(500);
    });

  //二维码
  var cs = $("#cs");
  var ycewm = $("#ycewm");
  cs.mouseenter(function () {
    ycewm.stop().fadeIn(800);
  }).mouseleave(function () {
    ycewm.stop().fadeOut(800);
  });

  //登录
  var denglu = $("#denglu");
  var loginmoer = $("#loginmoer");
  denglu.mouseenter(function () {
    loginmoer.stop().slideDown(500);
  });

  loginmoer
    .mouseenter(function () {
      loginmoer.stop().slideDown(500);
    })
    .mouseleave(function () {
      loginmoer.stop().slideUp(500);
    });

  //技能介绍
  var jnli = $(".jn li");

  jnli.each(function (i) {
    $(this).click(function () {
      $(".jn li").eq(i).addClass("jnbk").siblings().removeClass("jnbk");
      $(".jnjs div.jnms")
        .eq(i)
        .removeClass("jnxs")
        .siblings(".jnjs div.jnms")
        .addClass("jnxs");
    });
  });
});
