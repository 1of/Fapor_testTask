(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _formValidate = require('./modules/formValidate');

var _formValidate2 = _interopRequireDefault(_formValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {

    $('.menu').on('click', function (event) {
      if ($('.nav-menu').hasClass('display-toggle')) {
        $('.nav-menu').removeClass('display-toggle');
      } else {
        $('.nav-menu').addClass('display-toggle');
      }
      //$('.nav-menu').hasClass('dispaly-toggle') ? $('.nav-menu').removeClass('dispaly-toggle') : $('.nav-menu').addClass('dispaly-toggle');
    });

    $('#usersubscribe').on('keyup input', function () {

      var email = $("input[name='email']", this).val();
      _formValidate2.default.validate(email);
    });
    //carousel
    $('#carouselText').carousel({
      interval: 4000
    });
    //review carousel
    $('#carouselControls').carousel({
      interval: 2000
    });
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/formValidate":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var formValid = {
	validate: function validate(email) {

		var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
		var valid = regexp.test(email);

		if (regexp.test(email)) {
			$("#message").text("All fine, try to subscribe...").css({ 'color': 'lightgreen', 'font-size': '12px' });
		} else {
			$("#message").text("Invalid email format...").css({ 'color': 'pink', 'font-size': '12px' });
		}

		$("#usersubscribe").submit(function (event) {
			event.preventDefault();
			$("#message").text("Thank you").css({ 'color': 'lightblue', 'font-size': '12px' });
		});

		return valid;
	}
};

exports.default = formValid;

},{}]},{},[1]);
