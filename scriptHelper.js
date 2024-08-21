// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    const div = document.getElementById("missionTarget")
    div.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name:${arr[i].name}  </li>
        <li>Diameter:${arr[i].diameter} </li>
        <li>Star: ${arr[i].star}</li>
        <li>Distance from Earth: ${arr[i].distance} </li>
        <li>Number of Moons: ${arr[i].moons}</li>
    </ol>
    <img src=${arr[i].image}>`
 
 }
 
 function validateInput(testInput) {
    if (testInput == ""){
        return "Empty";
    }else  if( isNaN(testInput)){
        return "Not a Number";
    }else if( !isNaN(testInput)){
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;