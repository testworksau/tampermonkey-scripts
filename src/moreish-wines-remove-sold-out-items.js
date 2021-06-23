// ==UserScript==
// @name         Moreish Wines - hide sold out items
// @namespace    https://github.com/testworksau
// @version      1.0.0
// @description  Hides sold out items from the Moreish wines grid
// @author       Glenn McDonald
// @match        *://moreishwines.com/*
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://raw.githubusercontent.com/testworksau/tampermonkey-scripts/main/src/moreish-wines-remove-sold-out-items.js
// @downloadURL  https://raw.githubusercontent.com/testworksau/tampermonkey-scripts/main/src/moreish-wines-remove-sold-out-items.js
// @supportURL   https://github.com/testworksau/tampermonkey-scripts/issues
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("load", function () {
        waitForKeyElements("div.productgrid--items", hideUnavailable);
    }, false);

    function hideUnavailable(jNode) {
        console.log("Removing sold out items");
        $('article.productgrid--item:has(span:contains("Sold out"))').remove();
}
})();