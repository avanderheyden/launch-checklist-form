// Write your JavaScript code here!
window.addEventListener('load', function () {
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
});
// console.log(typeof pilotName.value);

   // this.document.getElementById("launchStatusCheck").onclick = function () {
   //    let cargoStatus = document.getElementById("cargoStatus");
   //    document.getElementById("cargoStatus").innerHTML = "Too much mass for shuttle to take off";

   //    let launchStatus = document.getElementById("launchStatus");
   //    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";

   //    let textColor = document.querySelector("launchStatus");
   //    document.querySelector("launchStatus").style.color = "red";

   // }
// });


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
// */
// document.getElementById("pilotName").required = true;
//       document.getElementById("copilotName").required = true;
//       document.getElementById("fuelLevel").required = true;
//       document.getElementById("cargoWeight").required = true;