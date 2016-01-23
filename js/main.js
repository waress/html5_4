// Canvas kitöltése
function fillCanvas() {
    
    // Kiválasztjuk a keretet (vásznat)
    var canvas = document.querySelector("#myCanvas");
    
    // console.log(canvas); // hogy megtalálja
    var context = canvas.getContext("2d"); // beolvassa az elemet, és előkészíti, 2d-ben akarunk rajzolni
    
    context.fillStyle = "#f00"; // stílus, amivel kitöltjük a canvast, "zsírkrétánk" szine
    context.fillRect(0, 0, 200, 80); // vászon bal szélétől; tetejétől, szélesség, magasság
}

// kitöltéd meghívása
// fillCanvas(); // hogy ne induljon el automatikusan

// Kép betöltése.
function fillImg() {
    // Kiválasztjuk a keretet
    var canvas = document.querySelector("#myCanvas");
    var context = canvas.getContext("2d");
    
    // vonal rajzolása
    context.moveTo(100, 100);  // leteszem a hegyet
    context.lineTo(300, 100); // idáig rajzolom
    context.stroke();
    
    // Kör rajzolása
    context.beginPath(); // nyom, útvonal rajzolásának kezdete
    context.arc( 200, 50, 40, 0, 360 );  // fénykép eltakarja, nem látszik rendesen
    context.stroke();
    
    // Kép betöltése és megjelenítése
    var img = document.querySelector("#myImg");
    context.drawImage(img, 0, 0);  // kép megjelenítése
}

fillImg();  // meg kell hívni, hogy működjön
