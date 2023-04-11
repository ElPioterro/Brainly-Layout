// ==UserScript==
// @name Brainly-Script
// @description:pl Darmowe nieskończone wyświetlanie odpowiedzi w brainly.pl
// @author ElPioterro
// @match https://brainly.pl/*
// @grant unsafeWindow
// @grant GM_addStyle
// @require https://code.jquery.com/jquery-3.6.4.min.js
// @version 1.0.0
// ==/UserScript==

(function () {
  "use strict";

  localStorage.clear(); //simply deletes cookies

  // Kill popup and fixed-footer also footer and unneccesary divs
  GM_addStyle(
    ".js-react-bottom-banner,#didomi-host,.js-dialog,.js-react-app-footer,.js-react-below-answers,.js-react-newest-questions,.AnswerBoxLayout-module__comments--DZU8h  {    display: none !important;  }"
  );

  //kill optional divs
  GM_addStyle(
    "[data-testid='textbooks_q_a_entry_point_options_classes_test_id'],.brn-header-container,.brn-qpage-layout__right   {    display: none !important;  }"
  );
  //fix for scrollbar
  GM_addStyle(".sg-dialog-no-scroll{position: relative;}");

  //even add grid
  GM_addStyle(
    ".brn-qpage-layout {    grid-template-areas: 'main' 'main-bottom'; grid-template-columns: 600px; } .brn-qpage-bottom-section { margin-top:0 }"
  );
})();
