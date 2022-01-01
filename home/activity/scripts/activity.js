$(document).ready(() => {




    $('#next').hide();




    $('#next').click(() => {
        window.location.href = '../../other/content/other.html'
    })


})





$(function() {
	var rangePercent = $('[type="range"]').val();
	$('[type="range"]').on('change input', function() {
        $('#next').show(400);
		rangePercent = $('[type="range"]').val();
		$('h4').html(rangePercent+'<span></span>');
		$('[type="range"], h4>span').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
		// $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
		$('h4').css({'transform': 'translateX(-50%) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});


        var range;

        if (rangePercent < 20 && rangePercent >= 0) {
            range = 'sedentary';
            $('#result').html('<span>🐌 ' + range +'</span>');

        } else if(rangePercent < 40 && rangePercent >= 20) {
            range = 'slow';
            $('#result').html('<span>🚶 ' + range +'</span>');

        } else if(rangePercent < 60 && rangePercent >= 40) {
            range = 'moderate';
            $('#result').html('<span>🏃 ' + range +'</span>');

        } else if(rangePercent < 80 && rangePercent >= 60) {
            range = 'high';
            $('#result').html('<span>🐎 ' + range +'</span>');

        } else {
            range = 'extreme';
            $('#result').html('<span>🐎 ' + range +'</span>');

        } 
        
        // else if((1+(rangePercent/100)) > 25 && (1+(rangePercent/100)) < 50) {
        //     $('#result').html('<span>🚶</span>');
        // } else if((1+(rangePercent/100)) > 50 && (1+(rangePercent/100)) < 75) {
        //     $('#result').html('<span>🏃</span>');
        // } else if((1+(rangePercent/100)) > 75) {
        //     $('#result').html('<span>🐎</span>');
        // }


	});
});