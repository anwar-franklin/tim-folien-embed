/* Rechnet die 1280×720-Folie auf den Rahmen des Miro-Embeds.
   Die Folie behält ihre Pixelmaße; nur der Skalierungsfaktor ändert sich. */
(function () {
  var W = 1280, H = 720;
  function fit() {
    var s = Math.min(window.innerWidth / W, window.innerHeight / H);
    document.documentElement.style.setProperty('--fit', s);
  }
  fit();
  window.addEventListener('resize', fit);
  if (window.visualViewport) window.visualViewport.addEventListener('resize', fit);
})();
