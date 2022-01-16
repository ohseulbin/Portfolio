$(function(){
  $('#fullpage').fullpage({
    autoScrolling:true,
    //scrollHorizontally: true,
    showActiveTooltip:true,
    scrollOverflow: true,
    //메뉴 내비게이션
    menu: '#menu',
    anchors:['section1','section2','section3','section4','section5']
  });
});

$(function(){
  $("#youtube").YTPlayer();
});

$(window).on("hashchange", function () {
  let hashtagname = location.hash; 
  if (hashtagname == "#section1") { 
    $("header a").css({ 'color': '#fff' }); 
  } else if (hashtagname == "#section2") { 
    $("header a").css({ 'color': '#000' }); 
  } else if (hashtagname == "#section3") { 
    $("header a").css({ 'color': '#fff' }); 
  } else if (hashtagname == "#section4") {
    $("header a").css({ 'color': '#000' });
  }
});

$(window).on("hashchange", function () {
  let btn_up = location.hash; 
  if (btn_up == "#section1") { 
    $("#btn_up").css({ 'display': 'none' }); 
  } else if (btn_up == "#section2") { 
    $("#btn_up").css({ 'display': 'inline' }); 
  }
});

$("#btn_up").hide();