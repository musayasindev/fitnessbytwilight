$(document).ready(() => {




    $('#next').hide();


    $('#next').click(() => {
        window.location.href = '../../activity/content/activity.html'
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

        if (rangePercent < 25 && rangePercent >= 0) {
            range = 'light';
            $('#result').html('<span>🐌 ' + range +'</span>');

        } else if(rangePercent < 50 && rangePercent >= 25) {
            range = 'moderate';
            $('#result').html('<span>🚶 ' + range +'</span>');

        } else if(rangePercent < 75 && rangePercent >= 50) {
            range = 'agressive';
            $('#result').html('<span>🏃 ' + range +'</span>');

        } else {
            range = 'very agressive';
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