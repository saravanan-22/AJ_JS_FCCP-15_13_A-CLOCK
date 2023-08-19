function rotateClockHands() {
  let currentDate = new Date();
  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".minute-hand");
  let secondHand = document.querySelector(".second-hand");
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();
  let hourRotation = 30 * hours + minutes / 2;
  let minuteRotation = 6 * minutes + seconds / 10;
  let secondRotation = 6 * seconds;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}
setInterval(rotateClockHands, 1000);



// rotateClockHands Function:

// This function is responsible for updating the positions of the clock hands based on the current time.
// It begins by creating a new Date object called currentDate, which represents the current date and time.
// Querying DOM Elements:

// It then selects the HTML elements representing the clock hands using document.querySelector(). 
// Three elements are selected:

// hourHand represents the hour hand of the clock.

// minuteHand represents the minute hand of the clock.

// secondHand represents the second hand of the clock.

// Getting Current Time:

// The function retrieves the current hour, minute, and second values from the currentDate object using getHours(), getMinutes(), and getSeconds() methods, respectively.
// Calculating Rotations:

// The code calculates the rotation angles for the clock hands:

// hourRotation: Calculates the rotation angle for the hour hand. Each hour is represented by 30 degrees, 
// and it adjusts for the minute hand's slight movement.

// minuteRotation: Calculates the rotation angle for the minute hand. Each minute is represented by 6 degrees, 
// and it adjusts for the second hand's slight movement.

// secondRotation: Calculates the rotation angle for the second hand. Each second is represented by 6 degrees.
// Applying Transformations:

// Using the style.transform property, the function updates the CSS rotate transformation for each clock hand element,
//  setting their rotation angles according to the calculated values. This visually rotates the clock hands to match the current time.
// setInterval:

// Finally, the setInterval function is used to repeatedly call the rotateClockHands function every 1000 milliseconds (1 second).
//  This ensures that the clock hands are continuously updated to reflect the current time, creating a real-time clock effect.

// const copy = {
//   // rotateClockHands Function:

// // This function is responsible for updating the positions of the clock hands based on the current time.
// // It begins by creating a new Date object called currentDate, which represents the current date and time.
// // Querying DOM Elements:

// // It then selects the HTML elements representing the clock hands using document.querySelector(). 
// // Three elements are selected:

// // hourHand represents the hour hand of the clock.

// // minuteHand represents the minute hand of the clock.

// // secondHand represents the second hand of the clock.

// // Getting Current Time:

// // The function retrieves the current hour, minute, and second values from the currentDate object using getHours(), getMinutes(), and getSeconds() methods, respectively.
// // Calculating Rotations:

// // The code calculates the rotation angles for the clock hands:

// // hourRotation: Calculates the rotation angle for the hour hand. Each hour is represented by 30 degrees, 
// // and it adjusts for the minute hand's slight movement.

// // minuteRotation: Calculates the rotation angle for the minute hand. Each minute is represented by 6 degrees, 
// // and it adjusts for the second hand's slight movement.

// // secondRotation: Calculates the rotation angle for the second hand. Each second is represented by 6 degrees.
// // Applying Transformations:

// // Using the style.transform property, the function updates the CSS rotate transformation for each clock hand element,
// //  setting their rotation angles according to the calculated values. This visually rotates the clock hands to match the current time.
// // setInterval:

// // Finally, the setInterval function is used to repeatedly call the rotateClockHands function every 1000 milliseconds (1 second).
// //  This ensures that the clock hands are continuously updated to reflect the current time, creating a real-time clock effect.
// }
