// Объявление модуля
var accordionToggle = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события
	var _setUpListners = function () {
		$('.filter__title-link').on('click', _itemToggle);//Скрывание и раскрывание элементов acordeon
	};
		//пишем функцию для скрытия и раскрытия отдельных элементов акордиона
	var _itemToggle = function (){

		var
				container = $(this).closest('.filter__content');
				content = container.find('.filter__content');

		if (!container.hasClass('active')){
					container.addClass('active');
					content.stop(true, true).slideDown();
		} else {
					container.removeClass('active');
					content.stop(true, true).slideUp();
		}
	};


	// Возвращаем объект (публичные методы)
	return {
		init: init
	};

})();

// Вызов модуля
accordionToggle.init();
