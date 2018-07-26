// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import formValid from './modules/formValidate';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {

	$('#usersubscribe').on('keyup input', function() {

		let email = $("input[name='email']",this).val();
		formValid.validate(email);

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

})(jQuery);