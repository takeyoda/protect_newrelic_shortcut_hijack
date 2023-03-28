// ==UserScript==
// @name         Protects keyboard Hijacking on NewRelic website
// @namespace    https://github.com/takeyoda/
// @version      0.1
// @description  Protects keyboard hijackiing on NewRelic website
// @author       takeyoda
// @match        https://one.newrelic.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
  'use strict';
  const orig = EventTarget.prototype.addEventListener;
  orig('DOMContentLoaded', function() {
    EventTarget.prototype.addEventListener = orig;
  });

  EventTarget.prototype.addEventListener = function(type, listener, useCapture) {
    if (type === 'keydown') {
      console.log('Shortcut HIJACKING detected!', type, listener, useCapture);
    } else {
      orig(type, listener, useCapture);
    }
  };
})();
