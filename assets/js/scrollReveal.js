$(document).ready(function(){
  window.sr = ScrollReveal();

  sr.reveal('.navbar',{
    duration:3000,
    origin:'bottom',
    distance:'-100px'
  });

  sr.reveal('h1',{
    duration:5000,
    origin:'right',
    distance:'-100px',
    reset:true
  });
});
