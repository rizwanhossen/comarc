$(function () {
  $("#fromSer").hide();
  $("#search").click(function () {
    $("#fromSer").show();
    $("#search").hide();
    $("#addClass").addClass("addclass");
  });

  $("#addClass").click(function () {
    $("#search").show();
    $("#fromSer").hide();
  });


//   mixItUp 




});
