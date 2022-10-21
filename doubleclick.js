$(document).ready(function(){
    $("#Dr p").dblclick(function(){
      $(this).css("background-color", "red");
      }, function(){
      $(this).css("background-color", "rgb(155, 131, 155)");
    });
  });