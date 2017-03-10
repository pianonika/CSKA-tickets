$(function () {

  $('select, input').styler();

  $(".remember-password").on('click', function () {
    $('.popup__body--login').hide();
    $('.popup__body--remember-password').show();
    console.log('123');
  })

  $('.js_submit').click(function(){
		$(this).parents('form').submit();
	});

	$('.js_mask-phone').mask("+7 (999) 999-99-99",{placeholder:"+7 (ХХХ) ХХХ-ХХ-ХХ"});

  $('.js_form-validate').each(function (){
  		var $this_form = $(this);

  		$this_form.validate({
    		errorPlacement: function(error, element) {
    			$(element).parents('.form__row').find('.form__error-text').text('');
    			error.appendTo( $(element).parents('.form__row').find('.form__error-text') );

    			setTimeout(function(){
    				$('form select, form input').trigger('refresh');
    			}, 10);
    		},
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('error').parents('.form__row').find('.form__error').removeClass('visible');
        },
        highlight: function(element, errorClass, validClass) {
          $(element).addClass('error').parents('.form__row').find('.form__error').addClass('visible');
        },
    		success: function(error, element) {
    			if( $(element).is('[type="radio"]') || $(element).is('[type="checkbox"]') ){
    				setTimeout(function(){
    					$('form select, form input').trigger('refresh');
    				}, 10);
    			}
    		}
    	});

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

var year_limit=new Date().getFullYear()-1;


$('.js_form-validate--with-data').validate({
  errorPlacement: function(error, element) {
    $(element).parents('.form__row').find('.form__error-text').text('');
    error.appendTo( $(element).parents('.form__row').find('.form__error-text') );

    setTimeout(function(){
      $('form select, form input').trigger('refresh');
    }, 10);
  },
  unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('error').parents('.form__row').find('.form__error').removeClass('visible');
  },
  highlight: function(element, errorClass, validClass) {
    $(element).addClass('error').parents('.form__row').find('.form__error').addClass('visible');
  },
  success: function(error, element) {
    if( $(element).is('[type="radio"]') || $(element).is('[type="checkbox"]') ){
      setTimeout(function(){
        $('form select, form input').trigger('refresh');
      }, 10);
    }
  },
  rules: {
     day: {
        required: true,
        digits: true,
        min: 1,
        max: 31
      },
     year: {
        number: true,
        required: true,
        min: 1900,
        max: year_limit,
        minlength: 4
      }
  },
  messages:{
      day:{
          required: "Поле не заполнено",
          digits: "Некорректная дата",
          min: "Некорректная дата",
          max: "Некорректная дата"
      },
      year:{
          required: "Поле не заполнено",
          min: "Некорректное значение",
          max: "Некорректное значение",
          number: "Некорректное значение",
          minlength: "Некорректное значение"
      }
  },
});




    $('input.check-email"]').on('focusout', function() {
        $.ajax({
            url: '/api/checkemail?email=' + $(this).val(),
            dataType: 'json'
        }).then(function(response) {
            if (response.emailExists) {
                console.log('email exists');
            } else {
                console.log('email doesnt exist');
            }
        });
    })


});
