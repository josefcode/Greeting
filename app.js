// This script displays greeting to the user upon the current Time.

let today = new Date();   //Create a new Date object
let hourNow = today.getHours(); //Find the current hour

// Display the appropriate greeting based on the current time
let greeting;
if(hourNow > 18){
    greeting = 'Good evening';
}else if(hourNow > 12){
    greeting = "Good afternoon"
}else if(hourNow > 0){
    greeting = 'Good morning';
}else{
    greeting = 'Welcome';
}
document.write(greeting)
