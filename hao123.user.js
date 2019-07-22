// ==UserScript==
// @name         hao123
// @namespace    http://tampermonkey.net/
// @version      0.1
// @icon         https://www.hao123.com/favicon.ico
// @description  hao123
// @author       Mirror
// @match        https://www.hao123.com/
// @grant        none
// ==/UserScript==

(function() {
  var rigth = document.querySelector(".layout-right");
  var left = document.querySelector(".layout-left");
  var script = document.querySelectorAll("script");
  var wrapper = document.querySelector(".topbe-wrapper");
  var hotsearchCon = document.querySelector(".hotsearch-box");
  var notice = document.querySelector(".notice");
  script.forEach((item) => {
      item.parentNode.removeChild(item);
  });
  left.parentNode.removeChild(left);
  rigth.parentNode.removeChild(rigth);
  wrapper.parentNode.removeChild(wrapper);
  hotsearchCon.parentNode.removeChild(hotsearchCon);
  notice.parentNode.removeChild(notice);
})();