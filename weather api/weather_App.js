// getting all tbe images 

image_array=
[
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg'
]

function xy()
{ 
    // selecting a random index
    random_index = Math.floor(Math.random()*image_array.length)

    //get an image at the random_index
    selected_image = image_array[random_index]
//display
// document.getElementsByClassName('whole').src= `./images/${selected_image}`
document.querySelector('body').style.backgroundImage = `url(./images/${selected_image})`  

}

///////// the above code is basically to get the random images out of my array as in the background 


let weather = 
{
   "apikey" : "f90703f23908dda832fb12836c94306d",

   x: function(city)
   {
    
    fetch( "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&appid=f90703f23908dda832fb12836c94306d"

        //"https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+this.apikey

         ).then((response) => response.json())  // problem was json is a function **************** json()
          .then((data) => this.displayWeather(data));  // isi data se sab excess hoga ab

   },

   displayWeather: function(data)
   {
       // class and there names 
     
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, pressure} = data.main;
        const { speed } = data.wind;
        const { country } = data.sys;
        // const { speed } = data.wind;
        // const { speed } = data.wind;

        // all the data that is being fetched from api !!

        document.querySelector(".city").innerText = "Weather in " + name;
    
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    
        document.querySelector(".description").innerText = description;
    
        document.querySelector(".temp").innerText = temp + " K";
    
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
    
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";

        document.querySelector(".pressure").innerText = "Pressure: " + pressure  ;

        document.querySelector(".ccode").innerText = "Country Code: " + country ;
   },

   y: function () {
    this.x(document.querySelector(".search-bar").value); // getting the value from search !!
  },

};

document.querySelector(".search button").addEventListener("click", function () {
    weather.y();
  });
  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.y();
      }
    });
  
  /////////////////// weather.x("Delhi"); //////////////// by default delhi fetch hoga 





// let weather = 
// {
//    "apikey" : "f90703f23908dda832fb12836c94306d",

//    x: function(city){
    
//     fetch( "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid="+this.apikey

// ).then((response) => response.json)
//         .then((data) => console.log(data));

//    },

//    displayWeather: function(data)
//    {

//    }



// };


// let weather = {
//     apiKey: "f90703f23908dda832fb12836c94306d",
//     x: function (city) {
//       fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=" +
//           city +
//           "&units=metric&appid=" +
//           this.apiKey
//       )
//         .then((response) => {
//           if (!response.ok) {
//             alert("No weather found.");
//             throw new Error("No weather found.");
//           }
//           return response.json();
//         })
//         .then((data) => console.log(data));
//     },
// }






