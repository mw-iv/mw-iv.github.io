$(document).ready(function() {
	
	$('#vol').animate({width: '13.5em'}, 1000);
	
/*----- Volunteer animation ------*/
  $('#vol').click(function(){
	$(".hsWordsE").hide();
	$(".hsWordsV").fadeIn('slow');
	$("#colBox0").css("opacity", "0.0");
	$("#colBox1").css("opacity", "0.0");
	$("#colBox2").css("opacity", "0.0");
	$("#colBox3").css("opacity", "0.0");
	
	$("#exAct").hide();
	$("#volWo").show();
	$("#vol").hide();
	$("#ex").show();
	
	$("#vol").css("width", "14.5em");
	$('#ex').animate({width: '14.5em'},1000);
  });
  
 /*----- Ex. Activities animation ------*/
  $('#ex').click(function(){
	$(".hsWordsV").hide();
	$(".hsWordsE").fadeIn('slow');
	$("#colBox0").css("opacity", "1.0");
	$("#colBox1").css("opacity", "1.0");
	$("#colBox2").css("opacity", "1.0");
	$("#colBox3").css("opacity", "1.0");
	
	$("#volWo").hide();
	$("#exAct").show();
	$("#ex").hide();
	$("#vol").show();
	
	$("#ex").css("width", "12.5em");
	$('#vol').animate({width: '12.5em'},1000);
  });

});