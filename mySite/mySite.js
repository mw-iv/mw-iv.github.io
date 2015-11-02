$(document).ready(function() {

//hide to fade in l8r
  $('#whoPage').hide(); 
  $('#whatPage').hide();
  $('#whenPage').hide();
  $('#wherePage').hide();
  
  var t2fadeIn; //boolean for 2nd message
  
  $('#text2').hide();
  $('#text3').hide();
  
  /*----- navbar animations --------*/
  
  $('.nav').mouseenter(function(){
    $(this).animate({width: 200}, 20);
   // $(this).animate({height: 30}, 100);
    for (var f=0; f<5; f++)
      $('#a'+f).hide();
  });
  $('.nav').mouseleave(function(){
    $(this).animate({width: 60}, 100);
    for (var f=0; f<5; f++)
      $('#a'+f).hide();
  });
  
  /*----- front text animations ------*/
  
  $('body').mousemove(function(){
    $('#text2').fadeIn('slow');
    t2fadeIn = true;
  });
  $('body').hover(function(){
    if (t2fadeIn)
      $('#text3').fadeIn('slow');
  });
  
  /*----- navbar text animations ------*/
  
  function navbr(i) {
    var v = i;
    
  $('#nav'+i).mouseenter(function(){
    if ($('#nav'+i).width() == 60)
    $('#a'+i).fadeIn('fast');
  });
  $('#nav'+i).mouseleave(function(){
    $('#a'+i).hide();
  });
  }
  
  for (var n = 1; n<5; n++)
    {
      navbr(n);
    }
  
  /*----- nav1 (Who) animation ------*/
  $('#nav1').click(function(){
    $('#whoPage').fadeIn('slow');
	$('#whatPage').fadeOut();
	$('#whenPage').fadeOut();
	$('#wherePage').fadeOut();
	$('#frontText').fadeOut();
  });
  
  /*----- nav2 (What) animation ------*/
  $('#nav2').click(function(){
    $('#whatPage').fadeIn('slow');
	$('#whoPage').fadeOut();
	$('#whenPage').fadeOut();
	$('#wherePage').fadeOut();
	$('#frontText').fadeOut();
  });
  
  /*----- nav3 (When) animation ------*/
  $('#nav3').click(function(){
    $('#whenPage').fadeIn('slow');
	$('#whoPage').fadeOut();
	$('#whatPage').fadeOut();
	$('#wherePage').fadeOut();
	$('#frontText').fadeOut();
  });
  
  /*----- nav4 (Where) animation ------*/
  $('#nav4').click(function(){
    $('#wherePage').fadeIn('slow');
	$('#whoPage').fadeOut();
	$('#whatPage').fadeOut();
	$('#whenPage').fadeOut();
	$('#frontText').fadeOut();
  });
});