//Get Te Current Date and Time
var today = new Date();

// Get the day of the week (0-6, where 0 is sunday and 6 is saturday)
var day = today.getDay();

// Array of ay names 
var daylist = ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"];

// Display the current day 
document.write("Today is " + daylist[day] + ".");

// Get the current hour , minute , and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

// Determine if its AM or PM
var prepand = (hour >= 12) ? "PM" : "AM";

// convert 24-hour format to 12-hour format;
hour = (hour >= 12) ? hour - 12 : hour;

// check for special cases when hour is 0
if (hour === 0 && prepand === 'PM') {
    if (minute === 0 && second === 0) {
        hour = 12
        prepand = 'Noon'
    } else {
        hour = 12;
        prepand = 'PM'
    }
}

// Check for special cases when hour is 0 
if (hour === 0 && prepand === 'AM') {
    if (minutes === 0 && second === 0) {
        hour = 12;
        prepand = 'Midnight'
    }else{
        hour = 12;
        prepand = 'AM'
    }
} 

//Display the current time
document.write("Current Time: " + hour + " : " + minute + " : " + second + " : " + prepand );