// ==UserScript==
// @name         floating button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @require      http://code.jquery.com/jquery-latest.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var input=document.createElement("input");
    input.type="button";
    input.value="GreaseMonkey Button";
    input.onclick = showAlert;
    input.setAttribute("style", "font-size:18px;position:fixed;display:block;padding:8px;top:100px;left:8px;");
    document.body.appendChild(input);

    function showAlert()
    {
        alert("Hello World");
    }
})();
