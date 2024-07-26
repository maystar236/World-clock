function greeting() {
  let greeting = document.querySelector("#hello");
  greeting.innerHTML = "Hi, G'day, Ni hao, Hey,  Bonjour";}
  setTimeout(greeting, 2000);

  let localTime = moment.tz.guess();
  let localElement = document.querySelector("#local");
  localElement.innerHTML = `Your current time zone is ${localTime} and the current time is ${moment().format("h:m A")}`;

function showSelectedCity(event) {
  if (event.target.value.length > 0) {
  let currentTime = moment().tz(event.target.value).format("dddd, MMMM D, YYYY h:m A");
  alert(`It is ${currentTime} in ${event.target.value}`);}}
        
  let selectElement = document.querySelector("#cities");
  selectElement.addEventListener('change', showSelectedCity); 