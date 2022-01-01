$(document).ready(() => {




    $('#next').hide();




    $('#next').click(() => {
        window.location.href = '../../profile/content/profile.html'
    })


})





$(function() {

3

	$('#range1').on('change input', function() {
	let rangePercent1 = $('#range1').val();
        $('#next').show(400);
		rangePercent1 = $('#range1').val();
		$('#range1, h4>span').css('filter', 'hue-rotate(-' + rangePercent1 + 'deg)');
		// $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
        $('#result1').html('<span>' + rangePercent1 +'</span>'); 
  
	})

    $('#range2').on('change input', function() {
        let rangePercent2 = $('#range2').val();
    
        $('#next').show(400);
        rangePercent2 = $('#range2').val();
        $('#range2, h4>span').css('filter', 'hue-rotate(-' + rangePercent2 + 'deg)');
        // $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
        $('#result2').html('<span>' + rangePercent2 +'cm</span>'); 
    
    });
    
    $('#range3').on('change input', function() {
        let rangePercent3 = $('#range3').val();
    
        $('#next').show(400);
        rangePercent3 = $('#range3').val();
        $('#range3, h4>span').css('filter', 'hue-rotate(-' + rangePercent3 + 'deg)');
        // $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
        $('#result3').html('<span>' + rangePercent3 +'kg</span>'); 
    
    });


});


