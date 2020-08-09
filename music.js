function getSongs(){

var x = document.getElementById("form");
  var genre = x.elements[0].value;
  var number = x.elements[1].value;
  var popularity = x.elements[2].value;
  var minPop = 30;
  var maxPop = 99; 
  if(popularity == "Popular"){
    minPop = 80;
    maxPop = 99;
  }
  if(popularity == "Obscure"){
    minPop = 5;
    maxPop = 40;
  }
  var acoustic = x.elements[3].value;
  var minAco = .30;
  var maxAco = .99; 
  if(acoustic == "Yes"){
    minAco = .60;
    maxAco = .99;
  }
   if(acoustic == "No"){
    minAco = .03;
    maxAco = .30;
  }
  var energetic = x.elements[4].value;
  var minEner = .10;
  var maxEner = .90; 
  if(energetic == "Yes"){
    minEner = .65;
    maxEner= .99;
  }
   if(energetic == "No"){
    minEner = .03;
    maxEner = .30;
  }
  var danceable = x.elements[5].value;
  var minDan = .10;
  var maxDan = .90; 
  if(danceable == "Yes"){
    minDan = .65;
    maxDan= .99;
  }
   if(danceable == "No"){
    minDan = .03;
    maxDan = .30;
  }
  var text = "Generating a " + number + " song " + genre + " playlist, with your preferred popularity, acousticness, and energy!";
  
  document.getElementById("demo").innerHTML = text;

fetch('https://api.spotify.com/v1/recommendations?limit='+number+'&seed_genres='+genre+'&min_acousticness='+minAco+'&max_acousticness='+maxAco+'&min_danceability='+minDan+'&max_danceability='+maxDan+'&min_energy='+minEner+'&max_energy='+maxEner+'&min_popularity='+minPop+'&max_popularity='+maxPop,
{
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer BQAvG8RJRL1v-Q5XknJdufuLhX1BZtCyynGo_yR1XpC9Gd4ZXbLMmgexLNn7RiajKhEFtn5ePQNKv-foRav0UE_MVKS4NtHZWnhro7h50JhF6n2fc8k5wv610c6C5Q8390GpEom-Rqc6MJtiwgA7VzSVS4TI8pAVjGarZaKJFAqzWBY3UWmlylSNW_HLxTjbZw'
  },
  method: "GET"
})  .then((response) => {
    return response.json()
  })
  .then((data) => {
  
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })
}

