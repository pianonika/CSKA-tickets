$(function () {
  
  $('select, input').styler();

  $(".remember-password").on('click', function () {
    $('.popup__body--login').hide();
    $('.popup__body--remember-password').show();
  })

  $('.js_submit').click(function(){
		$(this).parents('form').submit();
	});

	$('.js_mask-phone').mask("+7 (999) 999-99-99",{placeholder:"+7 (ХХХ) ХХХ-ХХ-ХХ"});

	$('.js_form-validate').validate({
		errorPlacement: function(error, element) {
			$(element).parents('.form__row').find('.form__error-text').text('');
			error.appendTo( $(element).parents('.form__row').find('.form__error-text') );
			$(element).parents('.form__row').find('.form__error').addClass('visible');

			setTimeout(function(){
				$('form select, form input').trigger('refresh');
			}, 10);
		},
		success: function(error, element) {
			$(error).parents('.form__error').removeClass('visible');

			if( $(element).is('[type="radio"]') || $(element).is('[type="checkbox"]') ){
				setTimeout(function(){
					$('form select, form input').trigger('refresh');
				}, 10);
			}
		}
	});
	$('body').on('change','.js_form-validate input[type="radio"], .js_form-validate input[type="checkbox"]',function(){
		if( $(this).val()!='' && $(this).hasClass('error') ){
			$(this).parents('form').valid();
		}

		var name = $(this).attr('name');

		if( $('.form__table input[name="'+name+'"]').length ){
			$('.form__table input[name="'+name+'"]').parents('.form__table').find('input[type="text"]').attr('disabled','disabled');
		}

		if( $(this).val()!='' && $(this).parents('.form__table').find('input[type="text"]').length ){
			$(this).parents('.form__table').find('input[type="text"]').removeAttr('disabled');
		}

	});
})
