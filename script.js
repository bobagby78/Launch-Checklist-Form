// Write your JavaScript code here!
window.addEventListener("load",  () => {
   console.log('window loaded');
 
   let form = document.querySelector("form");
   let faultyItems = document.getElementById("faultyItems")
   
   form.addEventListener("submit",  (event) => {
      event.preventDefault();

      let launchStatus = document.getElementById("launchStatus")
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || isNaN(pilotNameInput.value)===false || typeof pilotNameInput.value !== "string"){
         alert(`Please enter a valid pilot name`);
      }

      else if (copilotNameInput.value === "" || isNaN(copilotNameInput.value)===false || typeof copilotNameInput.value !== "string"){
         alert('Please enter a valid copilot name');
      } 

      else if (fuelLevelInput.value === "" || isNaN(fuelLevelInput.value)){
         alert('Please enter a valid value for fuel level in Liters');
      } 

      else if(fuelLevelInput.value < 10000){
         let fuelStatus =document.getElementById("fuelStatus")
         fuelStatus.innerHTML= `Not going far under 10000 L fuel, my dudes`;
         launchStatus.innerHTML= `Shuttle not ready for launch`
         faultyItems.style.visibility = "visible"
         launchStatus.style.color = "red"
      }

      else if (cargoMassInput.value === "" || isNaN(cargoMassInput.value)){
         alert('Please enter a valid value for Cargo Mass in KG.');

      } 
      else if(cargoMassInput.value > 10000){
         let cargoStatus =document.getElementById("cargoStatus")
         cargoStatus.innerHTML= `We need to get below 10000 kg cargo for escape, boss.`;
         launchStatus.innerHTML= `Shuttle not ready for launch`
         faultyItems.style.visibility = "visible"
         launchStatus.style.color = "red"

      }else{
         let pilotStatus = document.getElementById("pilotStatus")
         let copilotStatus = document.getElementById("copilotStatus")
         pilotStatus.innerHTML= `Pilot ${pilotNameInput.value} ready for launch`
         copilotStatus.innerHTML= `Pilot ${copilotNameInput.value} ready for launch`
         fuelStatus.innerHTML= `Fuel levels green`;
         cargoStatus.innerHTML= `We're well within the cargo limit for liftoff`
         launchStatus.innerHTML= `Shuttle ready for launch`
         faultyItems.style.visibility = "visible"
         launchStatus.style.color = "green"

      }
      
      fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => {
         response.json().then((json)=>{
            console.log(json)
            let missionTarget = document.getElementById("missionTarget");
            let randomIndex = Math.floor(Math.random() * json.length);
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randomIndex].name}</li>
               <li>Diameter: ${json[randomIndex].diameter}</li>
               <li>Star: ${json[randomIndex].star}</li>
               <li>Distance from Earth: ${json[randomIndex].distance}</li>
               <li>Number of Moons: ${json[randomIndex].moons}</li>
            </ol>
            <img src="${json[randomIndex].image}">
            `
         })

      })

   }) 
         
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
