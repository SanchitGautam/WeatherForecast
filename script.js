var input = document.querySelector('.form-control');
var main = document.querySelector('#name');
var vis = document.querySelector('.vis');
var temp = document.querySelector('.temp');
var mintemp = document.querySelector('.mintemp');
var maxtemp = document.querySelector('.maxtemp');
var desc = document.querySelector('.desc');
var pressure = document.querySelector('.pressure');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var clouds = document.querySelector('.clouds');
var cont = document.querySelector('.cont');
var button= document.querySelector('.btn');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=78167b63f0be8769d4ba06fb38aa1caf')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var mintempValue = data['main']['temp_min'];
  var maxtempValue = data['main']['temp_max'];
  var cloudsValue = data['clouds']['all'];
  var pressureValue = data['main']['pressure'];
  var humidityValue = data['main']['humidity'];
  var windValue = data['wind']['speed'];
  var nameValue = data['name'];
  var visValue = data['visibility'];
  var contValue = data['sys']['country'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  vis.innerHTML = "Visibility - "+visValue+" m";
  desc.innerHTML = "Description - "+descValue;
  cont.innerHTML = contValue;
  wind.innerHTML = "Wind Speed - "+parseFloat(windValue*3.6).toFixed(2)+" Km/h";
  temp.innerHTML = "Temperature - "+tempValue+" K";
  humidity.innerHTML = "Humidity - "+humidityValue+" %";
  pressure.innerHTML = "Pressure - "+pressureValue+" hPa";
  clouds.innerHTML = "Clouds - "+cloudsValue+" %";
  mintemp.innerHTML = "Minimum Temperature - "+mintempValue+" K";
  maxtemp.innerHTML = "Maximum Temperature - "+maxtempValue+" K";
  input.value ="";

})

.catch(err => alert("Wrong city name !!!!"));
})