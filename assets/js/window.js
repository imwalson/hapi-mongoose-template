// 响应窗体尺寸变化
window.onresize = function() {
  $resize();
}; 

function $resize(){
    var res;
    if (res){clearTimeout(res)}
    res = setTimeout(function(){
      var iframes = document.getElementsByTagName('iframe');
      //console.log(iframes.length);
      var w,h;
      if (window.innerWidth) w = window.innerWidth;
      else if ((document.body) && (document.body.clientWidth)) w = document.body.clientWidth;
      if (window.innerHeight) h = window.innerHeight;
      else if ((document.body) && (document.body.clientHeight)) h = document.body.clientHeight;
      for (var i = 0; i < iframes.length; i++) {
        iframes[i].style.height = (h - 110) + 'px';
        iframes[i].style.width = (w < 1200) ? '1046px' : (w - 154) + 'px';
      }
    },10);
};