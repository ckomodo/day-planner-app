var myContainer = $(".container");
var textAreaElement = $("<textarea>");
var userText = $(".textAreaStyle");
var btnElement = $("<button>");




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
//show time on top of calendar. Using moment.js, grab time and set the text of the p tag with the ID of current day to be the time from moment.js
            

            function currentTime (){

                var timeNow = document.querySelector("#clock");
                var realTime = moment().format("hh:mm:ss:a");
                timeNow.textContent = "Current time: " + realTime;
            }

            setInterval(currentTime, 1000);
            currentTime();


//             //TODO: step 1 - create element and save it to a variable, step 2-give content to new element, step 3-add attribute to the element, step 4-display element on page
// // to append new rows on page:  
//             var h1Element = $("<h1>"); // creates h1 element
//             h1Element.text("hello") //step 2
//             h1Element.attr("class", "put-class-name-here") //step 3. can replace class with id followed by appropriate id name
// //             $(".container").append(h1Element)

//                 textAreaElement.text("text goes here")
//                 textAreaElement.attr("class", "col-md-2", "hour")
//                 $(".container").append(textAreaElement)

//                 btnElement.text("save")
//                 btnElement.attr("class", "saveBtn")
//                 $(".container").append(btnElement)

// //TODO: OR save all variables at the top of JS




//TODO: create an array that holds the standard business time e.g. ["9am", "10am", "11am", ].
            var bizTime = ["9am", "10am", "11am", "12pm", "01pm", "02pm", "03pm", "04pm", "05pm"]; //change time format up top to be the same as this

//TODO: create a for loop
//TODO: Use a for loop to loop over array of hours then create a div for row, each hour, textarea and buttons 
            for(i=0; i<bizTime.length; i++){

                var textAreaElement = $("<textarea>");
                var btnElement = $("<button>");
        
                textAreaElement.attr("class", "textAreaStyle", "row");
                myContainer.append(textAreaElement, btnElement);
                myContainer.append(bizTime[i])

                btnElement.text("save");
                btnElement.attr("class", "saveBtn");
                myContainer.append(btnElement);
            }


            myContainer.on("click", btnElement, function (event){
                var userTextArea = $(this).siblings("textarea");
                console.log(userText.val());
            })


            // textAreaElement.text(bizTime[i])
            // btnElement.text("save")

            // if((i===3)){
            //     textAreaElement.attr("class", i, "anotherclass")
            // } else{
            //     textAreaElement.attr("class", "textarea") 
            // }







            // textAreaElement.attr("class", i) // gives class to text area. add textarea classes from css file. 


            // btnElement.attr("class", "classnamehere") //gives class to buttons




            // myContainer.append(textAreaElement, btnElement) //mycontainer is a variable declared line 1 of js












//TODO: create a div with a class for HTMLTableRowElement, textarea and saveButton. In text area, grab the value  add content and append to row then append row to page
//TODO: add method to make this non-repetitive e.g. for loop, function
//TODO: compare the hours of the rows to the current time (moment.js to get current time, compare this time to the time assigned to each row)


// var currentRowHour = document.querySelector(".rowHour")

// if(currentRowHour===currentTime){
//     currentRowHour.style.backgroundColor = "red";
// }




//TODO: Using an if statement, check using moment.js to see if hour in the loop is past current hour, if so, give that text area a class of past
//TODO: create a click event listener for each button. 
//TODO: Grab the value of text area and save it into a variable. Save the text from text area that is in the same row as the button clicked. 
//TODO: When this button is clicked, save text into local storage. Only save text in the same row as button
//TODO: using localStorage.setItem, save the text into local storage.
//TODO: Retrieve data from local storage using localStorage.getItem and keep this data in the text area. (What text from what local storage goes into what text area?)




// var textFromLocalStorage1 = localStorage.setItem("hour", "monday")
// var textFromLocalStorage = localStorage.setItem("day", "week1") //can be set to a variable

// $(".first").text(textFromLocalStorage) 

// $(".second").text(textFromLocalStorage1)


//can attach to a button and add event listener
