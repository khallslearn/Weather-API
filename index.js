import { key } from './config'
console.log(key)


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${choice}&units=imperial&appid=${key}`
  //document.getElementById("imagee").removeAttribute("hidden")

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       document.querySelector("h1").innerHTML=`${data.name} Weather`;
      document.querySelector("h3").innerText=data.weather[0].description
      
      document.querySelector("h2").innerText= `${data.main.feels_like} F`

     
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

