$(function () {
    $('.registration').magnificPopup({
      items: {
				type: 'inline',
				src: '.login-form'
			},
      callbacks: {
        close: function() {
          $('.popup__body--login').show();
          $('.popup__body--remember-password').hide();
        }
      }
    });
})
