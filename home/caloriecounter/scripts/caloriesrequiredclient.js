let gender =  null;
let age = document.getElementById('inputAge');
let height = document.getElementById('inputHeight');
let weight = document.getElementById('inputWeight');
let activitylevel = null;
let goal = null;
let approach = null;
let submitClick = document.getElementById('submitbtn')
let form = document.getElementById('form')

$(document).ready(function() {


$('#submitbtn').click(()=> {


    // input to values


    if(document.getElementById('m').checked == true) {
        gender = 'male';
    } else if(document.getElementById('f').checked == true) {
        gender = 'female';
    } else {
       gender = 'null'
    }
    
    if(document.getElementById('sedentary').checked == true) {
        activitylevel = 'sedentary';
    } else if(document.getElementById('light').checked == true) {
        activitylevel = 'light';
    } else if(document.getElementById('moderate').checked == true) {
        activitylevel = 'moderate';
    } else if(document.getElementById('high').checked == true) {
        activitylevel = 'high';
    } else if(document.getElementById('extreme').checked == true) {
        activitylevel = 'extreme';
    }
    
    if(document.getElementById('reduction').checked == true) {
        goal = 'reduction';
    } else if(document.getElementById('maintain').checked == true) {
        goal = 'maintain';
    } else if(document.getElementById('gain').checked == true) {
        goal = 'gain';
    }  else {
        goal = 'null'
    }
    
    if(document.getElementById('slow').checked == true) {
        approach = 'slow';
    } else if(document.getElementById('normal').checked == true) {
        approach = 'normal';
    } else if(document.getElementById('aggressive').checked == true) {
        approach = 'agressive';
    } else if(document.getElementById('very aggressive').checked == true) {
        approach = 'very agressive';
    } else {
        approach = 'null'
    }

    let values = {
        'gender' : gender,
        'age' : document.getElementById('inputAge').value,
        'height' : document.getElementById('inputHeight').value,
        'weight' : document.getElementById('inputWeight').value,
        'activitylevel' : activitylevel,
        'goal' : goal,
        'approach' : approach,
    }


    //



    localStorage.setItem('gender', gender)
    localStorage.setItem('age', document.getElementById('inputAge').value)
    localStorage.setItem('height', document.getElementById('inputHeight').value)
    localStorage.setItem('weight', document.getElementById('inputWeight').value)
    localStorage.setItem('activitylevel', activitylevel)
    localStorage.setItem('goal', goal)
    localStorage.setItem('approach', approach)


    

    console.log(values);

    // async function getCaloriesRequired() {
        
    axios.post('http://localhost:8000/api/caloriesrequired', {
                'gender' : gender,
                'age' : parseInt(document.getElementById('inputAge').value),
                'height' : parseInt(document.getElementById('inputHeight').value),
                'weight' : parseInt(document.getElementById('inputWeight').value),
                'activitylevel' : activitylevel,
                'goal' : goal,
                'approach' : approach,
    }).then(function(response) {
                console.log(response.data);
                localStorage.setItem('caloriesrequired', response.data)
    })
        
    // }

    // const getCalories = await getCaloriesRequired()
    // console.log(getCalories);


    axios.post('http://localhost:8000/api/bmr', {
                'gender' : gender,
                'age' : parseInt(document.getElementById('inputAge').value),
                'height' : parseInt(document.getElementById('inputHeight').value),
                'weight' : parseInt(document.getElementById('inputWeight').value),
                'activitylevel' : activitylevel,
                'goal' : goal,
                'approach' : approach,
    }).then(function(response) {
                console.log(response.data);
                localStorage.setItem('bmr', response.data)
    })

})

// axios.post('http://localhost:8000/api/tdee', {
//     'gender' : gender,
//     'age' : parseInt(document.getElementById('inputAge').value),
//     'height' : parseInt(document.getElementById('inputHeight').value),
//     'weight' : parseInt(document.getElementById('inputWeight').value),
//     'activitylevel' : activitylevel,
//     'goal' : goal,
//     'approach' : approach,
// }).then(function(response) {
//     console.log(response.data);
// })

// axios.post('http://localhost:8000/api/idealweight', {
//     'gender' : gender,
//     'age' : parseInt(document.getElementById('inputAge').value),
//     'height' : parseInt(document.getElementById('inputHeight').value),
//     'weight' : parseInt(document.getElementById('inputWeight').value),
//     'activitylevel' : activitylevel,
//     'goal' : goal,
//     'approach' : approach,
// }).then(function(response) {
//     console.log(response.data);
// })


// prevents refresh on submit
$("#form").submit(function(e) {
    e.preventDefault();
});

})





//async problem solved 

// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }






