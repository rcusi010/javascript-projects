let engineIndicatorLight = 'green blinking';
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = (spaceSuitsOn && shuttleCabinReady);
let fuelLevel = 21000;
let engineTemperature = 1200;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let commandOverride = false
console.log(typeof crewStatus);

if (engineIndicatorLight === "green blinking") {
    console.log("engines have started");
 } else if (engineIndicatorLight === "green blinking") {
    console.log("engines are preparing to start");
 } else {
    console.log("engines are off");
 }
 if (crewStatus = true){
    console.log("crew Ready");
 } else {
    console.log("Crew not ready");
 }
 if (computerStatusCode = 200){
    console.log("Please stand by");
 } else if (computerStatusCode = 400){
    console.log("Sucess! Computer Online.");
 } else {
    console.log ("Alert!: Computer offline!");
 }
 if (shuttleSpeed > 17500){
    console.log("ALERT: Escape velocity reached!");
 } else if (shuttleSpeed < 8000){
    console.log("ALERT: Cannot maintain orbit!");
 } else {
    console.log ("Stable speed.");
 }
 if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight == 'blinking red'){
    console.log ("ENGINE FAILURE IMMINENT!");
    engineIndicatorLight = 'red blinking';;
  } if (fuelLevel < 5000 || engineTemperature > 2500){
      console.log ("Check fuel level. Engines running hot.");
      engineIndicatorLight = 'red blinking';
    }  if (fuelLevel > 5000 || engineTemperature <= 2500){
          console.log ("level above 25%. Engines good.");
          engineIndicatorLight = 'green blinking';
      }  if (fuelLevel > 10000 || engineTemperature <= 2500){
               console.log ("level above 50%. Engines good.");
               engineIndicatorLight = 'green blinking';
        }  if (fuelLevel > 20000 || engineTemperature <= 2500){
                  console.log ("Full tank. Engines good.");
                  engineIndicatorLight = 'green blinking';
             } else {console.log ("Fuel and engine status pending…");
            }
            if (fuelLevel > 20000  && (engineIndicatorLight == "green blinking" && commandOverride == false)) {
               console.log("Clear to launch!");
            } else {
               console.log("Launch scrubbed!");
            }

/* 5) Implement the following checks using if/else if/else statements:

a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."

b) If fuelLevel is above 10000 AND engineTemperature is at or below 2500, print "Fuel level above 50%.  Engines good."

c) If fuelLevel is above 5000 AND engineTemperature is at or below 2500, print "Fuel level above 25%. Engines good."

d) If fuelLevel is at or below 5000 OR engineTemperature is above 2500, print "Check fuel level. Engines running hot."

e) If fuelLevel is below 1000 OR engineTemperature is above 3500 OR engineIndicatorLight is red blinking print "ENGINE FAILURE IMMINENT!" 

f) Otherwise, print "Fuel and engine status pending..." */

// Code 5a - 5f here:

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.

/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */
