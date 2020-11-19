// ==UserScript==
// @name         NHIS acc nachtstand
// @namespace    https://github.com/zeehoavens
// @version      0.1.0
// @description  Forceer gebruik van nachtstand bij laden of herladen van de Visit Monitor.
// @author       zeehoavens
// @match        https://gsp-nhis-acc.quintor.nl/visitmonitor/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function tryChange(changes, observer) {
    let root = document.querySelector('#app-root[class]');
    if (root) {
      if(observer) {
        observer.disconnect();
      }
      root.className = 'theme-dark';
      return true;
    }
    return false;
  }

  if (!tryChange(null, null)) {
    (new MutationObserver(tryChange)).observe(document, {childList: true, subtree: true});
  }
})();
