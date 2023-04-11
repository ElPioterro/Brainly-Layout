// ==UserScript==
// @name Brainly-Script
// @description:pl Darmowe nieskończone wyświetlanie odpowiedzi w brainly.pl
// @author ElPioterro
// @match https://brainly.pl/*
// @grant unsafeWindow
// @grant GM_addStyle
// @version 1.0.0
// ==/UserScript==

(function () {
  "use strict";

  localStorage.clear();

  //   GM_addStyle(
  //     `.js-react-bottom-banner,#didomi-host,.js-dialog,.brn-expanded-bottom-banner,.brn-brainly-plus-box,.brn-fullscreen-toplayer,.sg-overlay,.sg-overlay--dark {    display: none !important;  }`
  //   );
  window.onload = function () {
    document
      .getElementsByClassName(
        `brn-expanded-bottom-banner 
        brn-brainly-plus-box 
        brn-fullscreen-toplayer 
        sg-overlay sg-overlay--dark 
        js-react-bottom-banner
        js-dialog`
      )[0]
      .remove();
    document.getElementById("didomi-host")[0].remove();
  };
})();
