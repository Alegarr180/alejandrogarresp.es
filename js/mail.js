$("#boton").click(function() {
  $('.transform').toggleClass('transform-active');
  $(".trigger").toggleClass("drawn")
  document.getElementById("tick").style.width = "100px"
  document.getElementById("contact_form").submit();
  document.getElementById("boton").disabled = true;
});

