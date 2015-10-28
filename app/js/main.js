//slider 
    $( "#slider" ).slider({
      range: true,
      animate: "normal",
      min: 0,
      max: 12000,
      values: [ 3000, 6000 ],
        stop: function(event, ui) {
          jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
          jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
        slide: function(event, ui){
          jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
          jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
  });

    $(function() {
    $( "#accordion" ).accordion();
  });