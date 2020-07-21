var response, responseJOSN, hospital, hospitalJSON;
var citySelector, hospitalSelector, search;
var x, i, info, boxDiv, hideButton;
var weatherSelector, horoscopeSelector;
var horoscope, horoscopeText, weather, weather_query, jokeText;
var temperature, humidity, weatherDescription;
var joke, table;
var newJoke;
var flightText, hotelText;
var yogaText, doctorText, cnslngText, helplineText, movieText, travelText, shoppingText, gameText;
var weatherHeader, horoscopeHeader, hospitalHeader, jokeHeader;
var yoga, yogaSelector1, yogaSelector2, yogaSelector3, yogaSelector4;
var doctor, doctorSelector1, doctorSelector2, doctorSelector3, doctorSelector4;
var cnslng, cnslngSelector1, cnslngSelector2;
var helpline, helplineSelector;
var movie, movieSelector1, movieSelector2, movieSelector3;
var travel, travelSelector1, travelSelector2, travelSelector3, travelSelector4;
var hotelSelector1, hotelSelector2, hotelSelector3, hotelSelector4;
var shopping, shoppingSelector1, shoppingSelector2, shoppingSelector3, shoppingSelector4, shoppingSelector5;
var game, gameSelector1, gameSelector2, gameSelector3, gameSelector4, gameSelector5, gameSelector6;
var weatherIcon, horoscopeIcon, hospitalIcon, jokeIcon;

var cityArr = [];
var hospitals = [];
var weatherData = [];
var horoscopes = [];
var horoscopeNames = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];

var clicked = false;

function setup(){
  //createCanvas(displayWidth, displayHeight);

  getData();

  yoga = createElement("img");
  yoga.elt.src = "Pictures/yoga.jpg";
  yoga.elt.width = displayWidth/2;
  yoga.elt.height = displayWidth/2 - 350;
  yoga.position(0, 160);

  yogaText = createElement("h3");
  yogaText.html("Yoga");
  yogaText.elt.id = "imgText";
  yogaText.style("color","#c5cfb0");
  yogaText.position(yoga.elt.width/2 - 30, yoga.y);

  
  doctor = createElement("img");
  doctor.elt.src = "Pictures/doctor.jpg";
  doctor.elt.width = displayWidth/2;
  doctor.elt.height = yoga.elt.height;
  doctor.position(yoga.x + yoga.elt.width, yoga.y);

  doctorText = createElement("h3");
  doctorText.html("Doctor");
  doctorText.elt.id = "imgText";
  doctorText.style("color","#a0b4ce");
  doctorText.position(doctor.x + doctor.elt.width/2 + 100, doctor.y + 70);


  cnslng = createElement("img");
  cnslng.elt.src = "Pictures/counselling.png";
  cnslng.elt.width = yoga.elt.width;
  cnslng.elt.height = displayWidth/2 - 300;
  cnslng.position(0, yoga.y + yoga.elt.width/2 - 10);

  cnslngText = createElement("h3");
  cnslngText.html("Counselling");
  cnslngText.elt.id = "imgText";
  cnslngText.style("color","#35a0dd");
  cnslngText.position(cnslng.x + cnslng.elt.width/2 - 120, cnslng.y - 30);


  helpline = createElement("img");
  helpline.elt.src = "Pictures/helpline.jpg";
  helpline.elt.width = displayWidth/2;
  helpline.elt.height = cnslng.elt.height;
  helpline.position(cnslng.x + cnslng.elt.width, cnslng.y);

  helplineText = createElement("h3");
  helplineText.html("Helpline Numbers");
  helplineText.elt.id = "imgText";
  helplineText.style("color","#00bcd4");
  helplineText.position(helpline.x + helpline.elt.width/2 - 170, helpline.y - 30);


  movie = createElement("img");
  movie.elt.src = "Pictures/movie.jpg";
  movie.elt.width = displayWidth/2;
  movie.elt.height = cnslng.elt.height;
  movie.position(0, cnslng.y + cnslng.elt.width/2 + 40);

  movieText = createElement("h3");
  movieText.html("Book Movie Tickets");
  movieText.elt.id = "imgText";
  movieText.style("color","#ff7f16");
  movieText.position(movie.x + movie.elt.width/2 - 260, movie.y - 30);


  travel = createElement("img");
  travel.elt.src = "Pictures/ticket.jpg";
  travel.elt.width = displayWidth/2;
  travel.elt.height = movie.elt.height;
  travel.position(movie.x + movie.elt.width, movie.y);

  travelText = createElement("h3");
  travelText.html("Flight and Hotel Booking");
  travelText.elt.id = "imgText";
  travelText.style("color","#ffc400");
  travelText.position(travel.x + travel.elt.width/2 - 270, travel.y - 30);


  shopping = createElement("img");
  shopping.elt.src = "Pictures/shopping.jpg";
  shopping.elt.width = displayWidth/2;
  shopping.elt.height = movie.elt.height;
  shopping.position(0, movie.y + movie.elt.width/2 + 40);

  shoppingText = createElement("h3");
  shoppingText.html("Online Shopping");
  shoppingText.elt.id = "imgText";
  shoppingText.style("color","#ffc400");
  shoppingText.position(shopping.x + shopping.elt.width/2 - 200, shopping.y + 60);


  game = createElement("img");
  game.elt.src = "Pictures/game.jpg";
  game.elt.width = displayWidth/2;
  game.elt.height = travel.elt.height;
  game.position(shopping.x + shopping.elt.width, shopping.y);

  gameText = createElement("h3");
  gameText.html("Video Games");
  gameText.elt.id = "imgText";
  gameText.style("color","#00bcd4");
  gameText.position(game.x + game.elt.width/2 - 120, game.y - 30);

  
  weatherIcon = createInput();
  weatherIcon.elt.type = "image";
  weatherIcon.elt.src = "Pictures/weathericon.gif";
  weatherIcon.elt.alt = "Weather";
  weatherIcon.elt.id = "weatherIcon";
  weatherIcon.position(displayWidth/4 - 100,10);

  weatherHeader = createElement("h3");
  weatherHeader.html("Weather");
  weatherHeader.elt.id = "iconText";
  weatherHeader.position(weatherIcon.x + 10, weatherIcon.y + 80);


  horoscopeIcon = createInput();
  horoscopeIcon.elt.type = "image";
  horoscopeIcon.elt.src = "Pictures/horoscopeicon.png";
  horoscopeIcon.elt.alt = "Horoscope";
  horoscopeIcon.elt.id = "horoscopeIcon";
  horoscopeIcon.position(weatherIcon.x + 250,10);
  horoscopeIcon.style("animation","spin 20s linear infinite");

  horoscopeHeader = createElement("h3");
  horoscopeHeader.html("Horoscope");
  horoscopeHeader.elt.id = "iconText";
  horoscopeHeader.position(horoscopeIcon.x + 10, horoscopeIcon.y + 80);


  hospitalIcon = createInput();
  hospitalIcon.elt.type = "image";
  hospitalIcon.elt.src = "Pictures/hospitalicon.png";
  hospitalIcon.elt.alt = "Hospoital Infomation";
  hospitalIcon.elt.id = "weatherIcon";
  hospitalIcon.position(horoscopeIcon.x + 250,10);

  hospitalHeader = createElement("h3");
  hospitalHeader.html("Hospital<br>Information");
  hospitalHeader.elt.id = "iconText";
  hospitalHeader.position(hospitalIcon.x, hospitalIcon.y + 80);


  jokeIcon = createInput();
  jokeIcon.elt.type = "image";
  jokeIcon.elt.src = "Pictures/laughing.gif";
  jokeIcon.elt.alt = "Joke";
  jokeIcon.elt.id = "horoscopeIcon";
  jokeIcon.position(hospitalIcon.x + 250,10);

  jokeHeader = createElement("h3");
  jokeHeader.html("Jokes");
  jokeHeader.elt.id = "iconText";
  jokeHeader.position(jokeIcon.x + 20, jokeIcon.y + 80);


  boxDiv = createDiv();
  boxDiv.elt.id = "buttonBg";
  boxDiv.position(displayWidth/2 - 150, 100);
  boxDiv.style("width","300px");
  boxDiv.style("height","500px");
  boxDiv.hide();

  hideButton = createButton("<i class='fa fa-times' style='font-size:20px;'></i>");
  hideButton.elt.id = "cross";
  hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
  hideButton.hide();

  weatherSelector = createSelect();
  weatherSelector.position(displayWidth/2 - 60,250);
  weatherSelector.hide();

  temperature = createElement("h3");
  temperature.elt.id = "weatherDescription";
  temperature.position(weatherSelector.x - 50, weatherSelector.y + 70);
  temperature.html("Loading...");
  temperature.hide();

  humidity = createElement("h3");
  humidity.elt.id = "weatherDescription";
  humidity.position(temperature.x, temperature.y + 30);
  humidity.html("Please Wait");
  humidity.hide();

  weatherDescription = createElement("h3");
  weatherDescription.elt.id = "weatherDescription";
  weatherDescription.position(humidity.x, humidity.y + 30);
  weatherDescription.hide();


  horoscopeSelector = createSelect();
  horoscopeSelector.position(displayWidth/2 - 60,230);
  horoscopeSelector.hide();

  for(i of horoscopeNames){
    horoscopeSelector.option(i);
  }

  horoscopeText = createElement("h3");
  horoscopeText.elt.id = "weatherDescription";
  horoscopeText.position(horoscopeSelector.x - 320, horoscopeSelector.y + 25);
  horoscopeText.style("width","750px");
  horoscopeText.html("Loading...<br>Please Wait");
  horoscopeText.hide();


  citySelector = createSelect();
  citySelector.position(displayWidth/2 - 80,250);
  citySelector.hide();

  hospitalSelector = createSelect();
  hospitalSelector.position(citySelector.x - 200, citySelector.y + 50);
  hospitalSelector.style("width","510px");
  hospitalSelector.hide();
  
  search = createButton("Search <i class='fa fa-search' aria-hidden='true'></i>");
  search.position(citySelector.x, hospitalSelector.y + 50);
  search.elt.id = "buttonLink";
  search.style("width","4cm");
  search.hide();

  info = createElement("p");
  info.position(hospitalSelector.x, search.y + 25);
  info.elt.id = "weatherDescription";
  info.style("width","510px");
  info.html("Loading...<br>Please Wait");
  info.hide();


  jokeText = createElement("h3");
  jokeText.elt.id = "weatherDescription";
  jokeText.position(displayWidth/2 - 120,220);
  jokeText.style("width","7cm");
  jokeText.html("Loading...<br>Please Wait");
  jokeText.hide();

  newJoke = createButton("New Joke");
  newJoke.elt.id = "buttonLink";
  newJoke.position(boxDiv.x + 50, jokeText.y + 200);
  newJoke.hide();

  createButtons();

  flightText = createElement("h3");
  flightText.elt.id = "weatherDescription";
  flightText.position(travelSelector1.x + 70, travelSelector1.y - 80);
  flightText.html("Flights&nbsp&nbsp<i class='fa fa-plane' style='font-size:20px;'></i>");
  flightText.hide();

  hotelText = createElement("h3");
  hotelText.elt.id = "weatherDescription";
  hotelText.position(hotelSelector1.x + 70, hotelSelector1.y - 80);
  hotelText.html("Hotels&nbsp&nbsp<i class='fa fa-hotel' style='font-size:20px;'></i>");
  hotelText.hide();

  table = document.getElementsByTagName("table")[0];
  table.style = "left:" + (displayWidth/4 - 70) + "px; top:500px; display:none";
}

function draw(){
  background("lightgray");


  citySelector.changed(()=>{
    hospitalSelector.show();
    hospitalSelector.elt.innerHTML = "";

    for(x in hospitals){
      if(hospitals[x][0] === citySelector.value()){
        hospitalSelector.option(hospitals[x][1]);
      }
    }
  })

  search.mousePressed(()=>{
    for(x in hospitals){
      if(hospitals[x][1] === hospitalSelector.value()){
        info.html("City: " + hospitals[x][0] + "<br>Name: " + hospitals[x][1] + "<br>Address: " + hospitals[x][2] + "<br>Email: " + hospitals[x][3]);
      }
    }
  })

  weatherSelector.changed(()=>{
    weather_query = weatherSelector.value();

    for(x in weatherData){
      if(weatherData[x].city === weather_query){
        temperature.html("Temperature: " + weatherData[x].temperature);
        humidity.html("Humidity: " + weatherData[x].humidity);
        weatherDescription.html("Description: " + weatherData[x].description);
      }
    }
  })

  hideButton.mousePressed(()=>{
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
    table.style = "left:" + displayWidth/4 + "px; top:450px; display:none";
  })

  weatherIcon.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 150, 200);
      boxDiv.style("height","300px");
      hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
      boxDiv.show();
      hideButton.show();
      weatherSelector.show();
      temperature.show();
      humidity.show();
      weatherDescription.show();
      weatherSelector.elt.value = "defaultValue";
      temperature.html("Please select a city.");
      humidity.html("");
      weatherDescription.html("");
      
      clicked = true;
    }
  })


  horoscopeIcon.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 400, 200);
      boxDiv.style("height","300px");
      boxDiv.style("width","800px");
      hideButton.position(boxDiv.x + 780, boxDiv.y - 10);
      boxDiv.show();
      hideButton.show();
      horoscopeSelector.show();
      horoscopeSelector.elt.value = "defaultValue";
      horoscopeText.show();
      horoscopeText.html("Please select your Sun Sign.");
      clicked = true;
    }
  })

  horoscopeSelector.changed(()=>{
    for(x in horoscopes){
      if(horoscopes[x].name === horoscopeSelector.value()){
        horoscopeText.html("Horoscope: " + horoscopes[x].horoscope);
      }
    }
  })


  hospitalIcon.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 300, 200);
      boxDiv.style("width","550px");
      boxDiv.style("height","350px");
      hideButton.position(boxDiv.x + 530, boxDiv.y - 10);
      boxDiv.show();
      hideButton.show();
      citySelector.show();
      info.show();
      search.show();
      hospitalSelector.hide();
      citySelector.elt.value = "defaultValue";
      hospitalSelector.elt.value = "defaultValue";
      info.html("Please select a city and a hospital.<br>Select a city then press the search button to select a hospital.");
      clicked = true;
    }
  })


  jokeIcon.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 150, 200);
      boxDiv.style("height","300px");
      hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
      boxDiv.show();
      hideButton.show();
      jokeText.show();
      newJoke.show();
      clicked = true;
    }
  })

  newJoke.mousePressed(()=>{
    getJoke();
  })

  yoga.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 150, 200);
      boxDiv.style("height","250px");
      hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
      boxDiv.show();
      hideButton.show();
      yogaSelector1.show();
      yogaSelector2.show();
      yogaSelector3.show();
      yogaSelector4.show();
      clicked = true;
    }
  })

  yogaSelector1.mousePressed(()=>{
    window.open("https://silverageyoga.org/online-classes");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector2.mousePressed(()=>{
    window.open("https://patanjaleeyoga.com/online-yoga-classes");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector3.mousePressed(()=>{
    window.open("https://www.artofliving.org/in-en/yoga/health-and-wellness/yoga-for-seniors");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  yogaSelector4.mousePressed(()=>{
    window.open("https://www.vishuddhiyogaindia.com/yoga-online-courses/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  

  doctor.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 175, 200);
      boxDiv.style("height","220px");
      boxDiv.style("width","350px");
      hideButton.position(boxDiv.x + 330, boxDiv.y - 10);
      hideButton.show();
      boxDiv.show();
      doctorSelector1.show();
      doctorSelector2.show();
      doctorSelector3.show();
      clicked = true;
    }
  })

  doctorSelector1.mousePressed(()=>{
    window.open("https://www.1mg.com/online-doctor-consultation");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  doctorSelector2.mousePressed(()=>{
    window.open("https://www.icliniq.com/en_IN/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  doctorSelector3.mousePressed(()=>{
    window.open("https://lockdownclinic.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })


  cnslng.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 150, 500);
      boxDiv.style("height","150px");
      hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
      hideButton.show();
      boxDiv.show();
      cnslngSelector1.show();
      cnslngSelector2.show();
      clicked = true;
    }
  })

  cnslngSelector1.mousePressed(()=>{
    window.open("https://yourdost.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  cnslngSelector2.mousePressed(()=>{
    window.open("https://www.manastha.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })

  helpline.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/4 - 90, 450);
      boxDiv.style("width","850px");
      boxDiv.style("height","650px");
      table.style = "left:" + (displayWidth/4 - 70) + "px; top:500px; display:block";
      hideButton.position(boxDiv.x + 830, boxDiv.y - 10);
      hideButton.show();
      boxDiv.show();
      clicked = true;
    }
  })

  movie.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 150, 800);
      boxDiv.style("height","200px");
      hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
      hideButton.show();
      boxDiv.show();
      movieSelector1.show();
      movieSelector2.show();
      movieSelector3.show();
      clicked = true;
    }
  })

  movieSelector1.mousePressed(()=>{
    window.open("https://in.bookmyshow.com/mumbai/movies");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  movieSelector2.mousePressed(()=>{
    window.open("https://paytm.com/movies/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  movieSelector3.mousePressed(()=>{
    window.open("https://www.ticketnew.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })

  travel.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 250, 800);
      boxDiv.style("height","300px");
      boxDiv.style("width","500px");
      hideButton.position(boxDiv.x + 480, boxDiv.y - 10);
      hideButton.show();
      boxDiv.show();
      travelSelector1.show();
      travelSelector2.show();
      travelSelector3.show();
      travelSelector4.show();
      hotelSelector1.show();
      hotelSelector2.show();
      hotelSelector3.show();
      hotelSelector4.show();
      flightText.show();
      hotelText.show();
      clicked = true;
    }
  })

  travelSelector1.mousePressed(()=>{
    window.open("https://www.makemytrip.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  travelSelector2.mousePressed(()=>{
    window.open("https://www.goibibo.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  travelSelector3.mousePressed(()=>{
    window.open("https://www.yatra.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  travelSelector4.mousePressed(()=>{
    window.open("https://www.cleartrip.com");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector1.mousePressed(()=>{
    window.open("https://www.trivago.in");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector2.mousePressed(()=>{
    window.open("https://www.goibibo.com/hotels/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector3.mousePressed(()=>{
    window.open("https://www.yatra.com/hotels");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  hotelSelector4.mousePressed(()=>{
    window.open("https://www.oyorooms.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })

  shopping.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 150, 1270);
      boxDiv.style("height","280px");
      hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
      boxDiv.show();
      hideButton.show();
      shoppingSelector1.show();
      shoppingSelector2.show();
      shoppingSelector3.show();
      shoppingSelector4.show();
      shoppingSelector5.show();
      clicked = true;
    }
  })

  shoppingSelector1.mousePressed(()=>{
    window.open("https://www.amazon.in/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector2.mousePressed(()=>{
    window.open("https://www.flipkart.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector3.mousePressed(()=>{
    window.open("https://www.snapdeal.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector4.mousePressed(()=>{
    window.open("https://www.naaptol.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  shoppingSelector5.mousePressed(()=>{
    window.open("https://www.myntra.com/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })


  game.mousePressed(()=>{
    if(clicked===false){
      boxDiv.position(displayWidth/2 - 150, 1270);
      boxDiv.style("height","330px");
      hideButton.position(boxDiv.x + 280, boxDiv.y - 10);
      boxDiv.show();
      hideButton.show();
      gameSelector1.show();
      gameSelector2.show();
      gameSelector3.show();
      gameSelector4.show();
      gameSelector5.show();
      gameSelector6.show();
      clicked = true;
    }
  })

  gameSelector1.mousePressed(()=>{
    window.open("https://vader327.github.io/C33/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector2.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-28/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector3.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-40/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector4.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-32/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector5.mousePressed(()=>{
    window.open("https://vader327.github.io/Project-37/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
  gameSelector6.mousePressed(()=>{
    window.open("https://vader327.github.io/Daddy-s-Day-Out/");
    hideButtons();
    boxDiv.hide();
    hideButton.hide();
  })
}

async function getData(){
  for(x in horoscopeNames){
    horoscope = (await (await fetch("https://cors-anywhere.herokuapp.com/http://ohmanda.com/api/horoscope/" + horoscopeNames[x].toString().toLowerCase())).json())["horoscope"].substring(1);
    horoscopes.push({name:horoscopeNames[x], horoscope:horoscope});
  }

  joke = (await (await fetch("https://icanhazdadjoke.com/", {headers:{Accept: "application/json"}})).json()).joke;
  jokeText.html(joke);

  response = await fetch("data.txt");
  responseJOSN = await response.json();
  hospital = responseJOSN["Table1"];

  for(var obj in hospital){
    cityArr.push(hospital[obj].city);
    hospitals.push([hospital[obj].city, hospital[obj].name, hospital[obj].address, hospital[obj].id]);
  }

  cityArr = cityArr.filter((value, index) => cityArr.indexOf(value) === index);
  cityArr.sort();
  
  for(x of cityArr){
    citySelector.option(x);
    if(x !== "Vijaywada" && x !== "Fridabad" && x !== "Raigad" && x !== "Sindhudurg"){
      weatherSelector.option(x);
      weather = (await (await fetch("https://api.openweathermap.org/data/2.5/weather?&appid=0acbed08482b338a220e6ba9c72d00e9&q=" + x)).json());
      weatherData.push({city:x,temperature:(Math.round(weather.main.temp - 273) + "°C"),humidity:(weather.main.humidity + "%"),description:(weather.weather[0].main)});
    }
  }
  temperature.html("Please select a city.");
  humidity.html("");
  horoscopeText.html("Please select your Sun Sign.");
  info.html("Please select a city and a hospital.<br>Select a city then press the search button to select a hospital.");
}

async function getJoke(){
  joke = (await (await fetch("https://icanhazdadjoke.com/", {headers:{Accept: "application/json"}})).json()).joke;
  jokeText.html(joke);
}

function hideButtons(){
  yogaSelector1.hide();
  yogaSelector2.hide();
  yogaSelector3.hide();
  yogaSelector4.hide();

  doctorSelector1.hide();
  doctorSelector2.hide();
  doctorSelector3.hide();

  cnslngSelector1.hide();
  cnslngSelector2.hide();

  movieSelector1.hide();
  movieSelector2.hide();
  movieSelector3.hide();

  travelSelector1.hide();
  travelSelector2.hide();
  travelSelector3.hide();
  travelSelector4.hide();

  hotelSelector1.hide();
  hotelSelector2.hide();
  hotelSelector3.hide();
  hotelSelector4.hide();
  

  shoppingSelector1.hide();
  shoppingSelector2.hide();
  shoppingSelector3.hide();
  shoppingSelector4.hide();
  shoppingSelector5.hide();


  gameSelector1.hide();
  gameSelector2.hide();
  gameSelector3.hide();
  gameSelector4.hide();
  gameSelector5.hide();
  gameSelector6.hide();

  flightText.hide();
  hotelText.hide();

  weatherSelector.hide();
  temperature.hide();
  humidity.hide();
  weatherDescription.hide();

  horoscopeSelector.hide();
  horoscopeText.hide();

  citySelector.hide();
  hospitalSelector.hide();
  info.hide();
  search.hide();

  jokeText.hide();
  newJoke.hide();

  clicked = false;
  boxDiv.style("width","300px");
}

function createButtons(){
  yogaSelector1 = createButton("Silver Age Yoga");
  yogaSelector1.position(displayWidth/2 - 100, 250);
  yogaSelector1.elt.id = "buttonLink";
  yogaSelector1.hide();

  yogaSelector2 = createButton("Patanjalee Yoga");
  yogaSelector2.position(yogaSelector1.x,yogaSelector1.y + 50);
  yogaSelector2.elt.id = "buttonLink";
  yogaSelector2.hide();

  yogaSelector3 = createButton("Art of Living Yoga");
  yogaSelector3.position(yogaSelector1.x,yogaSelector1.y + 100);
  yogaSelector3.elt.id = "buttonLink";
  yogaSelector3.hide();

  yogaSelector4 = createButton("Vishuddhi Yoga");
  yogaSelector4.position(yogaSelector1.x,yogaSelector1.y + 150);
  yogaSelector4.elt.id = "buttonLink";
  yogaSelector4.hide();


  doctorSelector1 = createButton("Online Doctor Consultation");
  doctorSelector1.position(displayWidth/2 - 135, 250);
  doctorSelector1.elt.id = "buttonLink";
  doctorSelector1.style("width","270px");
  doctorSelector1.hide();

  doctorSelector2 = createButton("iCliniq Doctor Consultation");
  doctorSelector2.position(doctorSelector1.x, doctorSelector1.y + 50);
  doctorSelector2.elt.id = "buttonLink";
  doctorSelector2.style("width","270px");
  doctorSelector2.hide();

  doctorSelector3 = createButton("Lock Down Clinic Doctor Consultation");
  doctorSelector3.position(doctorSelector1.x,  doctorSelector1.y + 100);
  doctorSelector3.elt.id = "buttonLink";
  doctorSelector3.style("width","270px");
  doctorSelector3.style("height","45px");
  doctorSelector3.hide();


  cnslngSelector1 = createButton("Your Dost Counselling");
  cnslngSelector1.position(displayWidth/2 - 125, 530);
  cnslngSelector1.elt.id = "buttonLink";
  cnslngSelector1.style("width","250px");
  cnslngSelector1.hide();

  cnslngSelector2 = createButton("Manastha Counselling");
  cnslngSelector2.position(cnslngSelector1.x,cnslngSelector1.y + 50);
  cnslngSelector2.elt.id = "buttonLink";
  cnslngSelector2.style("width","250px");
  cnslngSelector2.hide();


  movieSelector1 = createButton("Bookmyshow");
  movieSelector1.position(displayWidth/2 - 100, 850);
  movieSelector1.elt.id = "buttonLink";
  movieSelector1.hide();

  movieSelector2 = createButton("PayTM Movies");
  movieSelector2.position(movieSelector1.x,movieSelector1.y + 50);
  movieSelector2.elt.id = "buttonLink";
  movieSelector2.hide();

  movieSelector3 = createButton("Ticketnew");
  movieSelector3.position(movieSelector1.x,movieSelector1.y + 100);
  movieSelector3.elt.id = "buttonLink";
  movieSelector3.hide();


  travelSelector1 = createButton("MakeMyTrip");
  travelSelector1.position(displayWidth/2 - 225, 900);
  travelSelector1.elt.id = "buttonLink";
  travelSelector1.hide();

  travelSelector2 = createButton("Goibibo");
  travelSelector2.position(travelSelector1.x,travelSelector1.y + 50);
  travelSelector2.elt.id = "buttonLink";
  travelSelector2.hide();

  travelSelector3 = createButton("Yatra");
  travelSelector3.position(travelSelector1.x,travelSelector1.y + 100);
  travelSelector3.elt.id = "buttonLink";
  travelSelector3.hide();

  travelSelector4 = createButton("ClearTrip");
  travelSelector4.position(travelSelector1.x,travelSelector1.y + 150);
  travelSelector4.elt.id = "buttonLink";
  travelSelector4.hide();

  hotelSelector1 = createButton("Trivago");
  hotelSelector1.position(displayWidth/2 + 25, 900);
  hotelSelector1.elt.id = "buttonLink";
  hotelSelector1.hide();

  hotelSelector2 = createButton("Goibibo Hotels");
  hotelSelector2.position(hotelSelector1.x,travelSelector1.y + 50);
  hotelSelector2.elt.id = "buttonLink";
  hotelSelector2.hide();

  hotelSelector3 = createButton("Yatra Hotels");
  hotelSelector3.position(hotelSelector1.x,travelSelector1.y + 100);
  hotelSelector3.elt.id = "buttonLink";
  hotelSelector3.hide();

  hotelSelector4 = createButton("OYO Rooms");
  hotelSelector4.position(hotelSelector1.x,travelSelector1.y + 150);
  hotelSelector4.elt.id = "buttonLink";
  hotelSelector4.hide();


  shoppingSelector1 = createButton("Amazon Shopping");
  shoppingSelector1.position(displayWidth/2 - 135, 1300);
  shoppingSelector1.elt.id = "buttonLink";
  shoppingSelector1.style("width","270px");
  shoppingSelector1.hide();

  shoppingSelector2 = createButton("Flipkart Shopping");
  shoppingSelector2.position(shoppingSelector1.x, shoppingSelector1.y + 50);
  shoppingSelector2.elt.id = "buttonLink";
  shoppingSelector2.style("width","270px");
  shoppingSelector2.hide();

  shoppingSelector3 = createButton("Snapdeal Shopping");
  shoppingSelector3.position(shoppingSelector1.x,  shoppingSelector1.y + 100);
  shoppingSelector3.elt.id = "buttonLink";
  shoppingSelector3.style("width","270px");
  shoppingSelector3.hide();

  shoppingSelector4 = createButton("Naaptol Shopping");
  shoppingSelector4.position(shoppingSelector1.x, shoppingSelector1.y + 150);
  shoppingSelector4.elt.id = "buttonLink";
  shoppingSelector4.style("width","270px");
  shoppingSelector4.hide();

  shoppingSelector5 = createButton("Myntra Shopping");
  shoppingSelector5.position(shoppingSelector1.x,  shoppingSelector1.y + 200);
  shoppingSelector5.elt.id = "buttonLink";
  shoppingSelector5.style("width","270px");
  shoppingSelector5.hide();


  gameSelector1 = createButton("Angry Birds");
  gameSelector1.position(displayWidth/2 - 135, 1300);
  gameSelector1.elt.id = "buttonLink";
  gameSelector1.style("width","270px");
  gameSelector1.hide();

  gameSelector2 = createButton("Crumpled Balls");
  gameSelector2.position(gameSelector1.x, gameSelector1.y + 50);
  gameSelector2.elt.id = "buttonLink";
  gameSelector2.style("width","270px");
  gameSelector2.hide();

  gameSelector3 = createButton("Horizontal Hurdles");
  gameSelector3.position(gameSelector1.x,  gameSelector1.y + 100);
  gameSelector3.elt.id = "buttonLink";
  gameSelector3.style("width","270px");
  gameSelector3.hide();

  gameSelector4 = createButton("Tower Seige");
  gameSelector4.position(gameSelector1.x, gameSelector1.y + 150);
  gameSelector4.elt.id = "buttonLink";
  gameSelector4.style("width","270px");
  gameSelector4.hide();

  gameSelector5 = createButton("Paint It");
  gameSelector5.position(gameSelector1.x,  gameSelector1.y + 200);
  gameSelector5.elt.id = "buttonLink";
  gameSelector5.style("width","270px");
  gameSelector5.hide();

  gameSelector6 = createButton("Escape the Virus");
  gameSelector6.position(gameSelector1.x,  gameSelector1.y + 250);
  gameSelector6.elt.id = "buttonLink";
  gameSelector6.style("width","270px");
  gameSelector6.hide();
}