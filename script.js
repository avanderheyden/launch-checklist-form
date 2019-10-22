// Write your JavaScript code here!
window.addEventListener('load', function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         console.log(json);
         const div = document.getElementById("missionTarget");
         // for (let i = 0; i < json[2].length; i++) {
         //    let obj = json[2];
         div.innerHTML += `
              <ul>
                  <li> Name: ${json[2].name}</li >
                  <li> Diameter: ${json[2].diameter}</li>
                  <li> Star: ${json[2].star}</li>
                  <li> Distance: ${json[2].distance}</li>
                  <li> Moons: ${json[2].moons}</li>
              </ul >
               <img src="${json[2].image}">
                  `;

      });
      let form = document.querySelector("form");
      form.addEventListener("submit", function (event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoWeight = document.querySelector("input[name=cargoWeight]");

         event.preventDefault();
         // console.log(fuelLevel.value >= 10000);
         console.log(pilotStatus);

         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoWeight.value === "") {
            alert("All fields are required!");
         }
         else if (!isNaN(pilotName.value)) {
            alert("Make sure to enter valid information for each field!");
         }
         else if (!isNaN(copilotName.value)) {
            alert("Make sure to enter valid information for each field!");
         }
         else if (isNaN(fuelLevel.value)) {
            alert("Make sure to enter valid information for each field!");
         }
         else if (isNaN(cargoWeight.value)) {
            alert("Make sure to enter valid information for each field!");
         }
         else {
            let launchStatus = document.getElementById("launchStatus");
            let faultyItems = document.getElementById('faultyItems');
            if (fuelLevel.value >= 10000 && cargoWeight.value <= 10000) {
               document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
               faultyItems.style.visibility = 'hidden';
               document.getElementById("launchStatus").style.color = "green";
            } else {
               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               faultyItems.style.visibility = 'visible';
               document.getElementById("launchStatus").style.color = "red";
               document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch`;
               document.getElementById("copilotStatus").innerHTML = `Copilot ${copilotName.value} is ready for launch`;
            }
            if (fuelLevel.value < 10000)
               document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         }
         if (cargoWeight.value > 10000)
            document.getElementById("cargoStatus").innerHTML = "Cargo weight too high for launch";
      });
   });

});

