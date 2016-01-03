$(document).ready(function() {

//hide to fade in l8r
  $('#whoPage').hide(); 
  $('#whatPage').hide();
  $('#whenPage').hide();
  $('#wherePage').hide();
  $('#realEmail').hide();
  
  var t2fadeIn; //boolean for 2nd message
  
  $('#text2').hide();
  $('#text3').hide();
  
  $('#n1').hide();
  
    for (var i= 1.0; i>=0.05; i=i-0.05) //creation of navbar
    {
     $('#navbar').append('<div style= "background-color: grey; opacity: '+i+'; width: 100%; height: 3.5px"></div>');
    }
  
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
    $('#n'+i).fadeIn('fast');
  });
  $('#nav'+i).mouseleave(function(){
    $('#n'+i).fadeOut('fast');
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
	$('#frontPage').hide();
  });
  
  /*----- nav2 (What) animation ------*/
  $('#nav2').click(function(){
    $('#whatPage').fadeIn('slow');
	$('#whoPage').fadeOut();
	$('#whenPage').fadeOut();
	$('#wherePage').fadeOut();
	$('#frontPage').hide();
  });
  
  /*----- nav3 (When) animation ------*/
  $('#nav3').click(function(){
    $('#whenPage').fadeIn('slow');
	$('#whoPage').fadeOut();
	$('#whatPage').fadeOut();
	$('#wherePage').fadeOut();
	$('#frontPage').hide();
  });
  
  /*----- nav4 (Where) animation ------*/
  $('#nav4').click(function(){
    $('#wherePage').fadeIn('slow');
	$('#whoPage').fadeOut();
	$('#whatPage').fadeOut();
	$('#whenPage').fadeOut();
	$('#frontPage').hide();
  });
  
  /*----- 'Email' animation ------*/
  $('#email').click(function(){
	$('#email').hide();
	$('#realEmail').fadeIn();
  });
});