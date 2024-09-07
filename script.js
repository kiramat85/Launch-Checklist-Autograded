// Write your JavaScript code here!
if (typeof window !== 'undefined') {
    window.addEventListener("load", function() {
        const url = "https://handlers.education.launchcode.org/static/planets.json";
        fetchData(url); 
    });
}
//function to get planetary data 
function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);  
            displayRandomPlanet(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//function to display Planetary data
function displayRandomPlanet(planets) {
    const div = document.getElementById("missionTarget");
    let i = Math.floor(Math.random() * planets.length);
    div.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${planets[i].name}</li>
            <li>Diameter: ${planets[i].diameter}</li>
            <li>Star: ${planets[i].star}</li>
            <li>Distance from Earth: ${planets[i].distance}</li>
            <li>Number of Moons: ${planets[i].moons}</li>
        </ol>
        <img src="${planets[i].image}" alt="${planets[i].name} Image">
    `;
}
//issue with window object... node does not have window object so it was throwing an error, I wrapped it in an if statement.
    if (typeof window !== 'undefined') {
    window.addEventListener("click", function(){
    document.getElementById("formSubmit").addEventListener('click', function(e){
       
       let pilotName = document.getElementsByName("pilotName")[0].value 
       let coPilotName = document.getElementsByName("copilotName")[0].value 
       let fuelLevel= document.getElementsByName("fuelLevel")[0].value 
       let cargoMass = document.getElementsByName("cargoMass")[0].value 


       if (pilotName == "" ||pilotName==undefined){
        
        document.getElementById("pilotStatus").innerHTML = "Pilot is not Ready"
        launchStatus.style.color = "rgb(199, 37, 78)"
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`
    
       } else if(!isNaN(pilotName)){
        alert("Enter valid letters for Pilot Name")
   
        document.getElementById("pilotStatus").innerHTML = "Pilot is not Ready"

        launchStatus.style.color = "rgb(199, 37, 78)"
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`
        }else {
         document.getElementById("pilotStatus").innerHTML = "Pilot is Ready"

        }
       if (coPilotName == "" ||coPilotName==undefined){
        document.getElementById("copilotStatus").innerHTML = "CoPilot is not Ready"
        launchStatus.style.color = "rgb(199, 37, 78)"
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`
    } else if(!isNaN(coPilotName)){
        alert("Enter valid letter for CoPilot Name")
        document.getElementById("copilotStatus").innerHTML = "CoPilot is not Ready"
        launchStatus.style.color = "rgb(199, 37, 78)"
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`
        }else {
            document.getElementById("copilotStatus").innerHTML = "CoPilot is  Ready"
        }
    
    if (fuelLevel == "" ||fuelLevel==undefined){
        alert("Enter Fuel Level")
    }else if(isNaN(fuelLevel)){
    alert("Enter valid number for fuel level")

    }else {
        if (fuelLevel>9999) {
            document.getElementById("fuelStatus").innerHTML = "Ready to Launch"
        }else if (fuelLevel<10000){
            document.getElementById("fuelStatus").innerHTML = "Not Ready to Launch, Fuel Level Low "
            launchStatus.style.color = "rgb(199, 37, 78)"
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`
        }
    }
    if (cargoMass == "" ||cargoMass==undefined){
        alert("Enter Cargo Mass")
  
    }else if(isNaN(cargoMass)){
        }  else{ 
            if (cargoMass>9999){
     document.getElementById("cargoStatus").innerHTML = "Not Ready to Launch, High load"
            launchStatus.style.color = "rgb(199, 37, 78)"
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready for Launch`
    
            }else if (cargoMass<10000) {
                document.getElementById("cargoStatus").innerHTML = "Ready to Launch"       
            }
        }
        if (cargoMass <10000 && !isNaN(cargoMass)&& fuelLevel>9999 && !isNaN(fuelLevel)&& pilotName!= "" && isNaN(pilotName) && coPilotName !="" && isNaN(coPilotName)){
              launchStatus.style.color = "rgb(65, 159, 106)"
            document.getElementById("launchStatus").innerHTML = `Ready to Launch`
        }
     document.getElementById("faultyItems").style.visibility = "visible";
       e.preventDefault()
    })
    })
}
