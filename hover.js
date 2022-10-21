$(document).ready(function(){
    $("#Dr p").hover(function(){
      $(this).css("background-color", "orange");
      }, function(){
      $(this).css("background-color", "purple");
    });
  });