// ==UserScript==
// @name
// @description:pl Darmowe nieskończone wyświetlanie odpowiedzi w brainly.pl
// @author ElPioterro
// @match https://brainly.pl/*
// @grant unsafeWindow
// @grant GM_addStyle
// @version 1.0.0
// ==/UserScript==

localStorage.clear();

// Kill banners and ads
// GM_addStyle(
//   "  .js-react-bottom-banner {    display: none !important;  }  #didomi-host {    display: none !important;  }  "
// );

//Alternative solution
window.onload = function () {
  document.getElementsByClassName("brn-expanded-bottom-banner")[0].remove();
  document.getElementsByClassName("brn-brainly-plus-box")[0].remove();
  document.getElementsByClassName("brn-fullscreen-toplayer")[0].remove();
  document.getElementsByClassName("sg-overlay sg-overlay--dark")[0].remove();
};
