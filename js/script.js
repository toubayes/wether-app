let apikey = "e0b65113ebbb806eb467252a38e76f71";
let apiurl ="https://api.openweathermap.org/data/2.5/weather?q=";
let city =document.querySelector(".search input");
let find = document.querySelector(".search button");

 async function getweater(city){
    let requet=  await fetch(apiurl + city +"&appid="+apikey);
    let dataset= await requet.json();
    console.log(dataset);
    document.querySelector(".name").innerHTML=dataset.name;
    document.querySelector(".temp").innerHTML= Math.round(dataset.main.temp) + "°C";
    document.querySelector(".pourcent").innerHTML=dataset.main.humidity + " %";
    document.querySelector(".speed").innerHTML=dataset.wind.speed + "k/hrs";
}


find.addEventListener("click" ,()=>{
   console.log(city.value);
   getweater(city.value);
});