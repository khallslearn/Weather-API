

document.querySelector('button').addEventListener('click', getFetch)


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
let week = days[currentTime.getDay()]
let newDay = `It is ${week} ${month}/${day}/${year}`

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&units=imperial&appid=907c83c4d8008826870de8201d3cb51b`



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      document.querySelector("h1").innerHTML=`Current ${data.name} Weather`;
      document.querySelector("img").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
      document.querySelector("h5").innerText = newDay
      document.querySelector("h3").innerText=`Description: ${data.weather[0].main}`
      
      document.querySelector("h2").innerText= `Temp: ${Math.round (data.main.feels_like)} °F`

     
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

