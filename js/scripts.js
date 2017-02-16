$(document).ready(function(){
  $("#appt form").submit(function(event){
    var nameInput = $("input#name").val();
    var descInput = $("input#desc").val();
    var dateInput = $("input#date").val();
    var startTimeInput = $("input#startTime").val();
    var endTimeInput = $("input#endTime").val();

    $(".nameOutput").text(nameInput);
    $(".descOutput").text(descInput);
    $(".dateOutput").text(dateInput);
    $(".startTimeOutput").text(startTimeInput);
    $(".endTimeOutput").text(endTimeInput);

    $().show();
    event.preventDefault();
  });
});
