//require('dotenv').config({ debug: true })


//console.log(process.env.S3_BUCKET) 

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&units=imperial&appid=907c83c4d8008826870de8201d3cb51b`



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      document.querySelector("h1").innerHTML=`Current ${data.name} Weather`;
      document.querySelector("img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
      document.querySelector("h3").innerText=data.weather[0].description
      
      document.querySelector("h2").innerText= `${data.main.feels_like} F`

     
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

