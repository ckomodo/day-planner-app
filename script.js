console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("h A"));
// TODO: use moment.js library
// TODO: create one row with time, text area and button using jquery
// TODO:  layout of what we need to make using jquery 
// {<div class="row time-block">
//         <div class="col-md-2 hour">
//             9 am
//         </div>
//         <textarea  class="col-md-8 past">
           
//         </textarea>
//         <button class="col-md-2 saveBtn">
//           Save
//         </button>
//       </div>


//       <div class="row time-block">
//         <div class="col-md-2 hour">
//             9 am
//         </div>
//         <textarea  class="col-md-8 past">
           
//         </textarea>
//         <button class="col-md-2 saveBtn">
//           Save
//         </button>
//       </div>}
//TODO: show time on top of calendar. Using moment.js, grab time and set the text of the p tag with the ID of current day to be the time from moment.js
//TODO: create an array that holds the standard business time e.g. ["9am", "10am", "11am", ]. 
//TODO: create a for loop
//TODO: Use a for loop to loop over array of hours then create a div for row, each hour, textarea and buttons 

//TODO: create a div for HTMLTableRowElement, textarea and GamepadButton, add content and append to row then append row to page
//TODO: add method to make this non-repetitive e.g. for loop, function
//TODO: compare the hours of the rows to the current time (moment.js to get current time, compare this time to the time assigned to each row)
//TODO: Using an if statement, check using moment.js to see if hour in the loop is past current hour, if so, give that text area a class of past
//TODO: create a click event listener for each button. 
//TODO: Grab the value of text area and save it into a variable. Save the text from text area that is in the same row as the button clicked. 
//TODO: When this button is clicked, save text into local storage. Only save text in the same row as button
//TODO: using localStorage.setItem, save the text into local storage.
//TODO: Retrieve data from local storage using localStorage.getItem and keep this data in the text area. (What text from what local storage goes into what text area?)


var textFromLocalStorage1 = localStorage.setItem("hour", "monday")
var textFromLocalStorage = localStorage.setItem("day", "week1") //can be set to a variable

$(".first").text(textFromLocalStorage) 

$(".second").text(textFromLocalStorage1)

//can attach to a button and add event listener
