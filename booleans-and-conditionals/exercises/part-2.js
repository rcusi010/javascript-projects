let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
if (crewStatus = true ){
    console.log("Crew Ready");
}else{
    console.log("Crew Not Ready");
}
if (computerStatusCode = 200){
    console.log("Plears stand by. Computer is rebooting");
} else if (computerStatusCode = 400){
    console.log("Sucess! Computer online");
}else{
    console.log("Alert! Computer Offline!");
}
if (shuttleSpeed > 17500){
    console.log("ALERT: Escape velocity reached!");
}else if (computerStatusCode < 8000){
    console.log("ALERT: Cannot maintain orbit!");
}else{
    console.log("Stable speed")
}

// 3) Write conditional expressions to satisfy the following safety rules:

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".


// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"


// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".


// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?

console.log(/* "Yes" or "No" */);
