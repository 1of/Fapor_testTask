// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var formValid = {
   validate: function(email) {

	var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
	var valid = regexp.test(email);

		if (regexp.test(email)) {
			$( "#message" ).text( "All fine, try to subscribe...").css({'color':'lightgreen', 'font-size': '12px'});
		}
		else {
			$( "#message" ).text( "Invalid email format...").css({'color':'pink', 'font-size': '12px'});
		}

		$( "#usersubscribe" ).submit(function( event ) {
			event.preventDefault();
			$( "#message" ).text( "Thank you").css({'color':'lightblue', 'font-size': '12px'});
		});

  return valid;

   }
};

export default formValid;