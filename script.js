// Write your JavaScript code here!
window.addEventListener('load', function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         console.log(json);
         const div = document.getElementById("launchForm");
         for (let i = 0; i < json[2].length; i++) {
            let obj = json[i];
            div.innerHTML += `
              <ul>
                  <li> Name: ${json[2].name}</li >
                  <li> Diameter: ${json[2].diameter}</li>
                  <li> Star: ${json[2].star}</li>
                  <li> Distance: ${json[2].distance}</li>
                  <li> Image: ${json[2].image}</li>
                  <li> Moons: ${json[2].moons}</li>
              </ul >
                  `;
         };
      });

      let form = document.querySelector("form");
      form.addEventListener("submit", function (event) {
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input[name=fuelLevel]");
         let cargoWeight = document.querySelector("input[name=cargoWeight]");

         event.preventDefault();

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

      });

      this.document.getElementById("formSubmit").onclick = function () {
         let launchStatus = document.getElementById("launchStatus");
         let faultyItems = document.getElementById('faultyItems');
         let fuelLevel = document.getElementById('fuelLevel');
         let cargoMass = document.getElementById('cargoMass');

         if (fuelLevel >= 10000 || cargoMass <= 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            faultyItems.style.visibility = 'hidden';
            document.getElementById("launchStatus").style.color = "green";
         } else if (fuelLevel <= 10000 || cargoMass >= 10000) {
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            faultyItems.style.visibility = 'visible';
            document.getElementById("launchStatus").style.color = "red";
         }
      }
   });
});

// this.document.getElementById("formSubmit").onclick = function () {
//    let launchStatus = document.getElementById("launchStatus");

// function faultyItemsVisible() {
//    let faultyItems = document.getElementById('faultyItems');
//    let fuelLevel = document.getElementById('fuelLevel');
//    if (fuelLevel <= 10000) {
//       faultyItems.style.visibility = 'visible';
//    } else if (cargoMass >= 10000) {
//       faultyItems.style.visibility = 'visible';
//       document.getElementById("launchStatus").innerHTML = "Too much mass for shuttle to take off";
//    }
// }




   //    let launchStatus = document.getElementById("launchStatus");
   //    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";

   //    let textColor = document.querySelector("launchStatus");
   //    document.querySelector("launchStatus").style.color = "red";

   // }
// });

// 

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">*/
