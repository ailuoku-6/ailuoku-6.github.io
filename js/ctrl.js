
var $$ = mdui.JQ;

$$(function () {
  // appbar 自动隐藏
  var $appbar = $$('.mdui-appbar');
  $$(window).on('scroll', function () {
    $appbar[$$('header').offset().top === 0 ? 'addClass' : 'removeClass']('mdui-shadow-0');
  });
});

function checkHttps () {
  BaiduHttps.useHttps();
};
function baiduWithHttps (formname) {
  var data = BaiduHttps.useHttps();
  if (data.s === 0) {
    return true;
  }else {
    formname.action = 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
    return true;
  }
};
