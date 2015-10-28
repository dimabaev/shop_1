// Объявление модуля
var accordionToggle = (function () {

	// Инициализирует наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушивает события 
	var _setUpListners = function () {
		$('.acordeon_styl-header').on('click', _itemToggle);//Скрывание и раскрывание элементов acordeon
	};
		//пишем функцию для скрытия и раскрытия отдельных элементов акордиона
	var _itemToggle = function (){
		var showHide = $('.showHide');
		if($(this).siblings(showHide).css('display') === 'block'){
				$(this).siblings(showHide).slideUp(300);
		}else{
				$(this).siblings(showHide).slideDown(300);
		}
	};
	

	// Возвращаем объект (публичные методы) 
	return {
		init: init
	};

})();

// Вызов модуля
accordionToggle.init();