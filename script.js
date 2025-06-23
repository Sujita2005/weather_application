let api=`http://api.weatherapi.com/v1/current.json?key=98f3b6e4f63c4c1aaa161457252106&q=Delhi&aqi=no`


let searchbox=document.getElementById("searchCity")




searchbox.addEventListener("change",(e)=>{
  let un=e.target.value
//   console.log(un);
  fetch(`http://api.weatherapi.com/v1/current.json?key=98f3b6e4f63c4c1aaa161457252106&q=${un}&aqi=no`)
  .then((e)=>{return e.json()}).then((data)=>{
    console.log(data)
   
    city.textContent=data.location.name



  }).catch((error)=>{console.error(error)})
})