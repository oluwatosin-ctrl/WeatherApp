var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')
var nane = document.querySelector('.nane');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q='+inputvalue.value+'&appid=55b52394dec57189292c5378a4e35bbdunits=metric')
    .then(response => response.json())
    .then(data => {
        var namevalue = data['name'];
        var tempvalue = data['main']['temp'];
        var descvalue = data['weather'][0]['description'];

        inputvalue.innerHTML = inputvalue;
        nane.innerHTML = namevalue;
        temp.innerHTML = tempvalue;
        desc.innerHTML = descvalue;
    })

.catch(err => alert("Wrong city name!"))
})

/**var namevalue = data['name'];
        var tempvalue = data['main']['temp'];
        var descvalue = data['weather'][0]['description'];

        name.innerHTML = namevalue;
        temp.innerHTML = tempvalue;
        desc.innerHTML = descvalue;
 */
