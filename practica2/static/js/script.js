document.getElementById("mostrarMensaje").addEventListener("click", function () {
  // Mostrar el mensaje con animación
  document.getElementById("mensaje").style.display = "block";

  // Reproducir la música
  var audio = document.getElementById("musicaFondo");
  audio.play();
});
