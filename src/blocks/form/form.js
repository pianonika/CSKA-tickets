$(function () {
  $(".remember-password").on('click', function () {
    $('.popup__body--login').hide();
    $('.popup__body--remember-password').show();
  })

  $("#auth").validate({
      onsubmit: false,
      focusInvalid: true,
      focusCleanup: false,
      rules: {
          email: {
              required: true,
              email: true
          }
      },
	    success: "valid",
	    errorElement: 'span',
	    errorPlacement: function(error, element) {
	      error.addClass('form_error-label');
	      error.appendTo(element.closest('.form_field'));
	    },

  });
})
