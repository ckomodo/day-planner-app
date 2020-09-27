var myContainer = $(".container");
var currentHour = parseInt(moment().format("H"));

function currentTime() {
    var timeNow = document.querySelector("#clock");
    var realTime = moment().format("MM/DD/YYYY hh:mm:ss:a");
    timeNow.textContent = "Current time: " + realTime;
}

var bizTime = ["9am", "10am", "11am", "12pm", "01pm", "02pm", "03pm", "04pm", "05pm"];

for (var i = 0; i < bizTime.length; i++) {
    var task = localStorage.getItem(bizTime[i]);
    var timeBlock = $("<div>");
    var hour = $("<div>");
    var description = $("<textarea>");
    var saveBtn = $ ("<button>");

    // timeBlock.attr("class", "row time-block");
    timeBlock.addClass("row time-block");
    hour.addClass("col-md-2 hour");
    description.addClass("col-md-8 description");
    saveBtn.addClass("col-md-2 saveBtn");

    hour.text(bizTime[i]);
    description.val(task);
    saveBtn.text("save");

    myContainer.append(timeBlock);
    timeBlock.append(hour);
    timeBlock.append(description);
    timeBlock.append(saveBtn);

    if (i + 9 < currentHour) {
        description.addClass("past");
    } else if (currentHour === i + 9) {
        description.addClass("present");
    } else if (i + 9 > currentHour) {
        description.addClass("future");
    }
}

myContainer.on("click", ".saveBtn", function (event) {
    var task = $(this).siblings(".description").val()
    var hour = $(this).siblings(".hour").text();
    localStorage.setItem(hour, task);
})

currentTime();
setInterval(currentTime, 1000);
