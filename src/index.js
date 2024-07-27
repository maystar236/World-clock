//greeting text
function greeting() {
  let greeting = document.querySelector("#hello");
  greeting.innerHTML = "Hi, G'day, Ni hao, Hey,  Hola";}
  setTimeout(greeting, 2500);

//welcome message
setInterval(function(){
  let localTime = moment.tz.guess();
  let localElement = document.querySelector("#local");
  localElement.innerHTML = `Your current time zone is ${localTime}. <br> It is ${moment().format("dddd, MMMM D, YYYY")} and the time is ${moment().format("h:mm:ss A")}`;
}), 1000;

function updateTime() {  
//london time 
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("dddd, MMMM D, YYYY");
  londonTimeElement.innerHTML = londonTime.format("h:mm A");

  //brisbane time 
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");
  brisbaneDateElement.innerHTML = brisbaneTime.format("dddd, MMMM D, YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format("h:mm A");
  
  //singapore time 
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");
  singaporeDateElement.innerHTML = singaporeTime.format("dddd, MMMM D, YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format("h:mm A");

  //new-york time 
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");
  newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM D, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format("h:mm A");

  //madrid time 
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");
  madridDateElement.innerHTML = madridTime.format("dddd, MMMM D, YYYY");
  madridTimeElement.innerHTML = madridTime.format("h:mm A"); 
};

updateTime();
setInterval(updateTime, 1000);

//update the displayed city
function showSelectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityListElement = document.querySelector("#cityList");
  cityListElement.innerHTML = `
  <div class="city">
    <div>
      <h3>${cityName}</h3>
      <div class="date">${cityTime.format("dddd, MMMM D, YYYY")}</div>
    </div>
      <div class="time">${cityTime.format("h:mm A")}</div>
    </div>`;
    
};

let citySelectElement = document.querySelector("#cities");
citySelectElement.addEventListener('change', showSelectedCity); 