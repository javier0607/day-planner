// Adds the current time to the header
$("#currentDay").text(moment().format("MMM Do YY"));

//Where its going to be changed for local storage
let colorBar = $('textarea');
currentDate();

function currentDate() {
    //getting the current hour
    let currentHour = moment().hour();
    // A function to get the id and time
    $(colorBar).each(function () {
        //Getting id of the day and changing to a integer 
        let currentDay = parseInt($(this).attr("id"));
        //a if statement to check if the hour has passed the time
        if (currentHour > currentDay) {
            $(this).addClass("past");
        } else if (currentHour < currentDay) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
}

//local storage function that triggers on the click
$(".saveBtn").on('click', function () {
    //Gets the value of the text area
    var text = $(this).siblings(".typingArea").val();
    // Gets the id of the parent
    var hourText = $(this).parent().attr("id");
    // Sets the local storage value to the text 
    localStorage.setItem(hourText, text);
})

//grabbing typingAreas that were placed in local storage for each row
$("#nineAM .typingArea").val(localStorage.getItem("nineAM"));
$("#tenAM .typingArea").val(localStorage.getItem("tenAM"));
$("#elevenAM .typingArea").val(localStorage.getItem("elevenAM"));
$("#twelvePM .typingArea").val(localStorage.getItem("twelvePM"));
$("#onePM .typingArea").val(localStorage.getItem("onePM"));
$("#twoPM .typingArea").val(localStorage.getItem("twoPM"));
$("#threePM .typingArea").val(localStorage.getItem("threePM"));
$("#fourPM .typingArea").val(localStorage.getItem("fourPM"));
$("#fivePM  .typingArea").val(localStorage.getItem("fivePM"));