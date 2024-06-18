// Initialize Variables below
let date = "Monday 2019-30-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = (astronautCount * averageAstronautMassKg)
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -255
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = '100%'
let wetherStatus = "clear"
let preparedForLiftOff = true
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7){
    preparedForLiftOff = false;
} 
console.log(preparedForLiftOff)
// add logic below to verify all astronauts are ready
if (astronautStatus != "ready"){
    preparedForLiftOff = false;
} 
console.log(preparedForLiftOff)
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg >= maximumMassLimit){
    preparedForLiftOff = false;
} 
console.log(preparedForLiftOff)
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < -300 && fuelTempCelsius >= -150){
    preparedForLiftOff = false;
} 
console.log(preparedForLiftOff)
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%"){
    preparedForLiftOff = false
}
console.log(preparedForLiftOff)
// add logic below to verify the weather status is clear
if (wetherStatus !== "clear"){
    preparedForLiftOff = false
}
console.log(preparedForLiftOff)
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === true){
    console.log("all systems are a go. initalizing space shuttle launch sequence")
    console.log("---------------------------------------------------------------")
    console.log('Date: ', date)
    console.log('time: ', time)
    console.log('astronaut count:', astronautCount)
    console.log('crew mass:', crewMassKg)
    console.log('fuel mass:', fuelMassKg)
    console.log('shuttlemass:', shuttleMassKg)
    console.log('total mass', totalMassKg )
    console.log("fuel temprature", fuelTempCelsius)
    console.log("have a safe trip astronauts")
    console.log("---------------------------------------------------------------")
} else{
    console.log("launch scrubbed")
}