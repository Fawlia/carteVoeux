var cadeau1 = anime({
		  targets: '#cadeau2',
		  translateX: 6,
		  loop: true,
		  direction: 'alternate'
	});
	
	
	var cadeau2 = anime({
		
		targets: '#cadeau4',
		translateX: [
		{ value: 8, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 0, dduration: 300, delay: 100, elasticity: 1000 },
		{ value: 6, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 0, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 10, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 0, duration: 300, delay: 2000, elasticity: 1000 },
		],
			easing:[.91,-0.54,.29,1.56],
		loop: true
	});
	
	var cadeau3 = anime({
		
		targets: '#cadeau3',
		translateX: [
		{ value: 6, duration: 500, delay: 100, elasticity: 1000 },
		{ value: 0, duration: 500, delay: 100, elasticity: 1000 },
		{ value: 6, duration: 500, delay: 100, elasticity: 1000 },
		{ value: 0, duration: 500, delay: 100, elasticity: 1000 },
		{ value: 6, duration: 500, delay: 100, elasticity: 1000 },
		{ value: 0, duration: 500, delay: 3000, elasticity: 1000 },
		],
		easing:[.91,-0.54,.29,1.56],
		loop: true
	});	

var etoile = anime({
		targets: '#Calque_14',
		translateX: [
		{ value: 6, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 0, dduration: 300, delay: 100, elasticity: 1000 },
		{ value: 6, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 0, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 6, duration: 300, delay: 100, elasticity: 1000 },
		{ value: 0, duration: 300, delay: 2000, elasticity: 1000 },
		],
		easing:[.91,-0.54,.29,1.56],
		loop: true
	});

var pauseButton = document.querySelector("#Calque_14");
	pauseButton.addEventListener("click", function() {
  	etoile.pause();
	});

var pauseButton = document.querySelector("#cadeau2");
	pauseButton.addEventListener("click", function() {
  	cadeau1.pause();
	});

var pauseButton = document.querySelector("#cadeau4");
	pauseButton.addEventListener("click", function() {
  	cadeau2.pause();
	});

var pauseButton = document.querySelector("#cadeau3");
	pauseButton.addEventListener("click", function() {
  	cadeau3.pause();
	});

$( document ).ready(function() {
	
    	
	$('.animLeft').hide();
	
	
	anime({
		targets: '#sapin',
		translateX: '1500',
		scale: [1, 1],
		duration: 3000,
		delay: function(el, index) {
			return index * 80;
		},
		direction: 'reverse',
		loop: 1
	});
});



function shake(){
	
	$('.partS').each(function(){
		if($(this).hasClass('partSS')){
			
			$(this).removeClass('partSS');
						
		}else{
			$('.partS').addClass('partSS');
		}
	})
}




function showDeco(){
	
	$("#cadeau2").delay(150).show(500);
	$("#cadeau3").delay(250).show(500);
	$("#cadeau4").delay(350).show(500);
	
	
}

function showBoule(){
	
	$("#Boule").delay(250).animate({left:1000, opacity:"show"}, 500);
	$("#Boule2").delay(500).animate({left:1000, opacity:"show"}, 500);
	$("#Boule3").delay(750).animate({left:1000, opacity:"show"}, 500);
	$("#Boule4").delay(1000).animate({left:1000, opacity:"show"}, 500);
	$("#Guirlande_3").delay(1250).animate({left:1000, opacity:"show"}, 500);
	$("#Guirlande2").delay(1500).animate({left:1000, opacity:"show"}, 500);
	$("#Guirlande1").delay(1750).animate({left:1000, opacity:"show"}, 500);
	$("#boulej").delay(2000).animate({left:1000, opacity:"show"}, 500);
	$("#boulej2").delay(2250).animate({left:1000, opacity:"show"}, 500);
	$("#boulej3").delay(2500).animate({left:1000, opacity:"show"}, 500);
	$("#boulej4").delay(2750).animate({left:1000, opacity:"show"}, 500);
	$("#boulej5").delay(3000).animate({left:1000, opacity:"show"}, 500);
	$("#boulej6").delay(3250).animate({left:1000, opacity:"show"}, 500);
	$("#boulej7").delay(3500).animate({left:1000, opacity:"show"}, 500);
	$("#boulej8").delay(3750).animate({left:1000, opacity:"show"}, 500);
	$("#boulej9").delay(4000).animate({left:1000, opacity:"show"}, 500);
	$("#bouleb1").delay(4250).animate({left:1000, opacity:"show"}, 500);
	$("#bouleb2").delay(4500).animate({left:1000, opacity:"show"}, 500);
	$("#bouleb3").delay(4750).animate({left:1000, opacity:"show"}, 500);
	$("#bouleb4").delay(5000).animate({left:1000, opacity:"show"}, 500);
	
	
	

	/*anime({
		targets: '#cadeau2',
		translateX: 0,
		loop: true
	});
	*/
	$('.cach').animate({  textIndent: 0 }, {
		step: function(now,fx) {
		  $(this).css('-webkit-transform','rotate('+45+'deg)'); 
		},
		duration:'slow'
		},'linear');
		/*$(".cach").delay(150).hide(500);*/
	
};


function showAcs(){
	$("#titre").delay(150).show(500);
	
	
	$('.cache1').animate({  textIndent: 0 }, {
		step: function(now,fx) {
		  $(this).css('-webkit-transform','rotate('+45+'deg)'); 
		},
		duration:'slow'
		},'linear');
	}



function showFete(){
	$("#titre2").delay(150).show(500);
	
	
	$('.cache').animate({  textIndent: 0 }, {
		step: function(now,fx) {
		$(this).css('-webkit-transform','rotate('+45+'deg)'); 
		},
		duration:'slow'
		},'linear');
	/*
	$(".cache").delay(150).hide(500);*/

}



/*
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 6;

  for (var i = 0; i < (times + 1); i++) {
    $(thing).animate({
      left:
        (i % 2 == 0 ? distance : distance * -1)
    }, interval);
  }
	
  $(thing).animate({
    left: 0,
    top: 0
  }, interval);
}

$('#haloetoile').click(function() {
  shake($('.BouleG'));
});
*/



