var myContainer = $(".container");
var textAreaElement = $("<textarea>");
var userText = $(".textAreaStyle");
var btnElement = $("<button>");


            

            function currentTime (){

                var timeNow = document.querySelector("#clock");
                var realTime = moment().format("hh:mm:ss:a");
                timeNow.textContent = "Current time: " + realTime;
            }

            setInterval(currentTime, 1000);
            currentTime();



            var bizTime = ["9am", "10am", "11am", "12pm", "01pm", "02pm", "03pm", "04pm", "05pm"]; 

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
                
            })
