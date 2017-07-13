/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global jQuery, $, document, Site, Modernizr */

Site = {
  mobileThreshold: 601,
  init: function() {
    var _this = this;

    $(window).resize(function(){
      _this.onResize();
    });

    //_this.Dictionary.init();

  },

  onResize: function() {
    var _this = this;

  },

  fixWidows: function() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  },
};

Site.Dictionary = {
  init: function() {
    var _this = this;

    _this.dictionary();
  },

  dictionary: function() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const list = document.getElementById('dictionary-list');
    const date = new Date();
    const year = date.getFullYear();
    let opacity = 1 - (1 / year);
    let i;
    const number = Math.random().toString().substr(2);
    const letter = alphabet[Math.floor(Math.random() * 26)];
    let word = '';

    for(l = 0; l < number.length; l++) {
      word += alphabet[number[l]];
    }

    for(i = 0; i < year; i++) {
      let item = document.createElement('li');
      item.innerHTML = word;
      list.appendChild(item);
      item.style.opacity = opacity;
      opacity -= (1 / year);
      word += letter;
    }
  },
};

jQuery(document).ready(function () {
  'use strict';

  Site.init();

});
