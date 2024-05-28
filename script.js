let counter = 0;

window.addEventListener('click', () => {
  const lagu = document.getElementById("lagu");
  lagu.play();
  counter++; // nilai klik 1
  if (counter === 5) { // jika nilai klik menjadi 5 lagu akan kembali ke menit 0
    lagu.currentTime = 0;
    counter = 0;
  }
});
window.addEventListener('dblclick', () => { // dobel klik untuk pause 
  document.getElementById("lagu").pause();

});
