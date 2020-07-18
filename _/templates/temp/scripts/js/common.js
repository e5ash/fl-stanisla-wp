$(document).ready(function() {

	$('.input.--phone .input__area').mask('+7 (000) 000-00-00');
	
	$('.select').each(function(index, el) {
		var inner 			= $(this).find('.select__inner'),
				parse 			= $(this).find('select'),
				placeholder = parse.attr('data-placeholder'),
				title				= $(this).find('.select__title');



		inner.append('<div class="select__list"></div>');

		var list = $(this).find('.select__list');

		parse.find('option').each(function(optionIndex) {
			var value  = $(this).val(),
					url    = $(this).attr('data-url'),
					id     = $(this).attr('data-id'),
					parent = $(this).attr('data-parent');
			if(value == '') {
				$(this).val('select-' + index + '-option-' + optionIndex);
			}
			list.append('<div class="select__item"'
			  + ' data-value="'+ $(this).val() +'"'
			  + ' data-url="'+ url +'"'
			  + ' data-id="'+ id +'"'
			  + ' data-parent="'+ parent +'">'
			  + $(this).text() +'</div>');


			if(optionIndex == 0) {
				if (placeholder == '') {
					title.text($(this).text());
				} else{
					title.text(placeholder);
				}
			}
		});

	});	
		
	$('body').on('click', '.select__item', function(event) {
		var text   = $(this).text(),
				block  = $(this).parents('.select'),
				title  = block.find('.select__title');
				option = block.find('option[value=' + $(this).attr('data-value') + ']');
				id     = $(this).attr('data-id');

		
		$('.go-to').attr('data-href', $(this).attr('data-url'));
		title.text(text);
		option.attr('selected', 'selected');
		option.siblings().removeAttr('selected');
		var optionSelected = block.find('option[selected = selected]');
		console.log(optionSelected.length);
		if (optionSelected.length == 1) {
			console.log($(this).next('.select'));
			$(this).parents('.select').next().find('.select__item').each(function(){
				$(this).hide();
				if ($(this).attr('data-parent') != id) {
					$(this).hide();
				} else{
					$(this).show();
				}
			});
		}
	});

	$('.select').on('click', function(event) {
		var select = $(this);
		if (!select.hasClass('--open')) {
			if (select.hasClass('--validate')) {
			var prevItems = $(this).prevAll('.select.--validate');
			if (prevItems.length == 0) {
				// если нет итемов перед
				select.toggleClass('--open');
				select.removeClass('--error');
				select.nextAll().removeClass('--no-valid --error');
			} else{
				// если есть итемы перед
				var arrPlaceholders = new Array(),
						alert           = select.find('.select__alert');
				prevItems.each(function(){
					var option = $(this).find('.select__hidden select option[selected]');
					if (option.length == 1) {
						select.addClass('--open');
						$(this).removeClass('--error');
					} else {
						select.addClass('--no-valid');
						$(this).addClass('--error');
						// $(this).nextAll('.select').each(function(index, el)
						arrPlaceholders.unshift($(this).find('.select__hidden select').attr('data-placeholder'));
						alert.text("Выберите пункты из следуюших выпадающих списков: " + arrPlaceholders);
					}	
				});
			}
			
		} else {
			select.toggleClass('--open');
			select.addClass('--error');
			select.nextAll().removeClass('--no-valid --error');
		}
	} else{
		select.removeClass('--open');
	}
		
	});
	$(document).mouseup(function (e){
		var div = $('.select.--open');
		if (!div.is(e.target) && div.has(e.target).length === 0) {
			div.removeClass('--open');
		}
	});
	
	$('.go-to').on('click', function(){
		var href = $(this).attr('data-href');
		if (href != undefined) {
			window.location = href;
		}
	})


	var center = {
		list   : $('.center__imgs'),
		nav    : $('.center__nav .desc__list'),
		dots   : $('.center__nav .desc__controls .controls__dots'),
		arrows : $('.center__nav .desc__controls .controls__arrows'),
	}
	center.list.slick({
		fade: true,
		arrows: false,
		asNavFor: center.nav
	});
	center.nav.slick({
		fade: true,
		dots: true,
		focusOnSelect: true,
		asNavFor: center.list,
		appendDots: center.dots,
		appendArrows: center.arrows
	});


	var reviews = {
		list   : $('.reviews__list'),
		dots   : $('.reviews__controls .controls__dots'),
		arrows : $('.reviews__controls .controls__arrows'),
	}
	reviews.list.slick({
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		adaptiveHeight: true,
		appendDots: reviews.dots,
		appendArrows: reviews.arrows,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	});


	var service = {
		list   : $('.service__slider'),
		dots   : $('.service__controls .controls__counts'),
		arrows : $('.service__controls .controls__arrows'),
	}
	service.list.slick({
		fade: true,
		dots: true,
		arrows: true,
		appendDots: service.dots,
		appendArrows: service.arrows
	});


	$('.controls__counts button').each(function(index, el) {
		$(this).text('0' + $(this).text());
	});

	var hum      = $('.hum'),
			humClass = '--toggle',
			nav      = $('.header'),
			navClass = '--show',
			bg       = $('.bg-mobile'),
			bgClass  = '--show';

	function navToggle(){
		hum.toggleClass(humClass);
		nav.toggleClass(navClass);
		bg.toggleClass(bgClass);
	}
	hum.on('click', function(){
		navToggle();
	});
	bg.on('click', function(){
		navToggle();
	});
	
	$(document).on('af_complete', function(event, response) {
        if (response.success) {
           $.fancybox.close();
           $.fancybox.open({src  : '#popup-thanks',type : 'inline'});
        }
    });
});
