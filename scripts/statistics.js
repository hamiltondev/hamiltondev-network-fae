$(function(){
  $(".stat-count").each(function(){
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 2500,
      easing: 'swing',
      
      step: function(now){
        $(this).text(Math.ceil(now)).digits();
      }
    });
  });

  $(".stat-reset").each(function(){
    $(this).prop('Counter', 0).animate({
      Counter: 999
    }, {
      duration: 2500,
      easing: 'swing',
      
      step: function(now){
        if(now == 999)
          $(this).text("--,---");
        else
          $(this).text(Math.ceil(now)).digits();
      }
    });
  });
});

$.fn.digits = function(){ 
  return this.each(function(){ 
    $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
  });
};