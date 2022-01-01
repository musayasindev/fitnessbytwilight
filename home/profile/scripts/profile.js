
let percentage = -90;
let resultant = -90;
let status;
let needle = document.getElementById("needleholder");
let colorscheme;



$(document).ready(()=>{

    const gender = window.localStorage.getItem('gender');
    const age = window.localStorage.getItem('age');
    const height = window.localStorage.getItem('height');
    const weight =  window.localStorage.getItem('weight');
    const activitylevel = window.localStorage.getItem('activitylevel');
    const goal = window.localStorage.getItem('goal');
    const approach = window.localStorage.getItem('approach')
    
    const caloriesrequired = window.localStorage.getItem('caloriesrequired')
    const bmr = window.localStorage.getItem('bmr')


    // class meterfunction
    // random gibberish testing for the health meter
    // needs a future update


    if(age > 0 > 9) {
        resultant = resultant + 15;
    } else if(age > 9 > 14) {
        resultant = resultant + 25;
    } else if(age > 14 > 25) {
        resultant = resultant + 45;
    } else if(age > 25) {
        resultant = resultant + 25;
    } 

    if(height > 0 > 50) {
       resultant = resultant + 15
    } else if(height > 50 > 100) {
       resultant = resultant + 21
    } else if(height > 100 > 150) {
        resultant = resultant + 31
    } else if(height > 150) {
        resultant = resultant + 45
    }

    if(weight > 0 > 10) {
       resultant = resultant - 15
    } else if(weight > 10 > 20) {
       resultant = resultant - 8;
    } else if(weight > 20 > 40) {
       resultant = resultant + 20
    } else if(weight > 40 > 60) {
        resultant = resultant + 45
    } else if(weight > 60 > 85) {
        resultant = resultant + 65
    } else if(weight > 85 > 130) {
        resultant = resultant + 25
    } else {
        resultant = resultant - 8
    }

    if(activitylevel == 'sedentary') {
        resultant = resultant + 11
    } else if(activitylevel == 'light') {
        resultant = resultant + 25
    } else if(activitylevel == 'moderate') {
        resultant = resultant + 45
    } else if(activitylevel == 'high') {
        resultant = resultant + 55
    } else if(activitylevel == 'extreme') {
        resultant = resultant + 65
    }

    if(goal == 'reduction') {
        resultant = resultant + 15
    } else if(goal == 'maintain') {
        resultant = resultant + 25
    } else if(activitylevel == 'gain') {
        resultant = resultant + 35
    }

    if(approach == 'slow') {
        resultant = resultant + 25
    } else if (approach == 'normal') {
        resultant = resultant + 35
    } else if(approach == 'agressive') {
        resultant = resultant + 25
    } else if (approach == 'very agressive') {
        resultant = resultant + 19
    }



    // end meterfunction



    console.log(resultant);



            setInterval(() => {
                while(percentage < resultant) {
                percentage++
                return document.getElementById("needleholder").style.transform = "rotate("+percentage+"deg)";
                }
            }, 10);

        if(resultant <= -20) {
            colorscheme = 'red'
            document.getElementById("profilevisual").style.borderTop = "3px solid "+colorscheme+"";
            status = 'you need to put some effort do not worry we will<br> get you there :)... goal = '+goal+''
        } else if(resultant <= 20) {
            colorscheme = 'yellow'
            document.getElementById("profilevisual").style.borderTop = "3px solid "+colorscheme+"";
            status = 'you are healthy! but thats one step <br> of the ladder... goal = '+goal+''
        } else {
            colorscheme = 'green'
            document.getElementById("profilevisual").style.borderTop = "3px solid "+colorscheme+"";
            status = 'you healthy follow the instructions to <br> get you those results!... goal = '+goal+''
        }

        console.log(status);
         $('#containerStatusMessage').append(`<div class="holders">${status}</div>`)
          $('#caloriesdaily').append(`<div style="position: absolute; right: 0;" class="holders">${caloriesrequired}</div>`)
          $('#bmr').append(`<div style="position: absolute; right: 0;" class="holders">${bmr}</div>`)






          $('#btnGetImage').click((e)=>{
              e.preventDefault();
              alert('click')
             axios.post('http://localhost:8000/api/getimage', {
                 'val' : document.getElementById('getimage').value
             }).then(function(response) {
                console.log(response.data.url);
                localStorage.setItem('image', response.data.url)
                var image = localStorage.getItem('image')
                $('#child').html('<img style="max-width : 300px; max-height : 300px;" src="' + image + '"></img>')
             })
          })


          var image = localStorage.getItem('image')
          $('#child').html('<img style="max-width : 300px; max-height : 300px;" src="' + image + '"></img>')


//           google.charts.load('current',{packages:['corechart']});
// google.charts.setOnLoadCallback(drawChart);

// function drawChart() {
// // Set Data
// var data = google.visualization.arrayToDataTable([
//   ['Price', 'Size'],
//   [50,7],[60,8],[70,8],[80,9],[90,9],
//   [100,9],[110,10],[120,11],
//   [130,14],[140,14],[150,15]
// ]);
// // Set Options
// var options = {
//   title: 'Days vs Progress',
//   hAxis: {title: 'Days'},
//   vAxis: {title: 'progress weight loss'},
//   legend: 'none'
// };
// // Draw
// var chart = new google.visualization.LineChart(document.getElementById('myChart'));
// chart.draw(data, options);
// }






})


