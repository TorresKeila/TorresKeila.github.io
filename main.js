let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #000000;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #141809;">Desarroladora Web, estudiante de ingenieria en software y creo paginas web</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
