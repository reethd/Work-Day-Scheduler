$(function () {
  //adds an event listener that saves textarea values relevent to the specifice save button that is clicked
  $(".btn").click(saveTasks);

  function saveTasks() {
    for (i = 9; i <= 17; i++) {
      localStorage.setItem("hour" + i, $("#hour" + i + "text").val());
    }
  }
  
  //iterates through the hour boxes and toggles the class based on relation to current time as referenced by dayjs()
  $(".container-fluid").children("div").each(timeColor);

  function timeColor() {
    let currentHour = dayjs().format("H");

    for (i = 9; i <= 17; i++) {
      if (i < currentHour) {
        $("#hour-" + i).toggleClass("past");
      }
      if (i == currentHour) {
        $("#hour-" + i).toggleClass("present");
      }
      if (i > currentHour) {
        $("#hour-" + i).toggleClass("future");
      }
    }
  }

  //Pulls saved textarea values from local storage and iterates through all hour boxes while printing to the current box
  for (i = 9; i <= 17; i++) {
    $("#hour" + i + "text").val(localStorage.getItem("hour" + i));
  }

  //Displays current date in the <p> tag: #currentDay
  let today = dayjs().format("ddd, MM/DD/YYYY");
  document.getElementById("currentDay").innerHTML = today;
});
