//============== пишем слайдер ================
var SliderWidget = (function(){

  var _insertValues = function($this) {
    var
        container = $this.closest('.filter__slider'),
        from =   container .find('.filter__slider-input_from'),
        to =   container .find('.filter__slider-input_to');
    var values = $this.slider('option', 'values'); //передаем значения в input

    from.val(values[0]);
    to.val(values[1]);


  };

             return {
                init: function() {

                  $('.filter__slider-element').each(function(){
                    var
                      $this = $(this),
                      min = parseInt($this.data('min')),
                      max = parseInt($this.data('max'));

                    $this.slider({
                      range: true,
                      animate: "fast",
                      min: min,
                      max: max,
                      values: [ min, max ],
                      slide: function( event, ui ) {
                        _insertValues($this);
                      },
                      create: function(){
                        _insertValues($this);
                      }
               });

           });

         }
      };
}());

$(document).ready(function() {
  if ($('.filter__slider-element').length) {
    SliderWidget.init();
  }
});
