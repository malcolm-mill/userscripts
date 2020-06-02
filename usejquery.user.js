// ==UserScript==
// @name         Hello World
// @namespace    http://github.com/malcolm-mill
// @version      0.1
// @description  try to take over the world!
// @author       malcolm-mill
// @match        http://*/*
// @match        https://*/*
// @require http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
   console.log("this script uses jquery");
    $('body').append('<input type="button" value="jquery used here" id="CP">');
    $("#CP").css("position", "fixed").css("top", 0).css("left", 0);
})();
