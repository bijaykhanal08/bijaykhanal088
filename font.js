const selectFont = document.getElementById('font');
const sampleText = document.getElementById('npa');

selectFont.addEventListener('change', (event) => {
  sampleText.style.fontFamily = event.target.value;
});


const selectFontB = document.getElementById('fontB');
const sampleTextB = document.getElementById('statuS');

selectFontB.addEventListener('change', (event) => {
  sampleTextB.style.fontFamily = event.target.value;
});

const selectFontD = document.getElementById('fontD');
const sampleTextD = document.getElementById('bName');

selectFontD.addEventListener('change', (event) => {
  sampleTextD.style.fontFamily = event.target.value;
});

const selectFontE = document.getElementById('fontE');
const sampleTextE= document.getElementById('clsp');

selectFontE.addEventListener('change', (event) => {
  sampleTextE.style.fontFamily = event.target.value;
});

const selectFontF = document.getElementById('fontF');
const sampleTextF = document.getElementById('daTe');

selectFontF.addEventListener('change', (event) => {
  sampleTextF.style.fontFamily = event.target.value;
});

const selectFontI = document.getElementById('fontI');
const sampleTextI = document.getElementById('wishess');

selectFontI.addEventListener('change', (event) => {
  sampleTextI.style.fontFamily = event.target.value;
});