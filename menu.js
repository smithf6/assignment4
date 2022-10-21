$(document).ready(function() {
  
  
    $("#dinner").click(showD);
    $("#lunch").click(showL);
    $("#happy").click(showH);
    $("#drink").click(showDr);
    
    function showD() {
      $('.menus').hide();
      $('#D').show();
    }
    
    function showL() {
      $('.menus').hide();
      $('#L').show();
    }
    function showH() {
      $('.menus').hide();
      $('#H').show();
    }
    function showDr() {
      $('.menus').hide();
      $('#Dr').show();
    }
  });