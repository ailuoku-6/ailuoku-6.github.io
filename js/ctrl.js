
var $$ = mdui.JQ;

$$(function () {
  // appbar 自动隐藏
  var $appbar = $$('.gy-nav-header');
  $$(window).on('scroll', function () {
    $appbar[$$('.gy-nav-header').offset().top === 0 ? 'removeClass' : 'addClass']('mdui-shadow-2');
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
