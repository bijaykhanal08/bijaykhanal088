const colovalue = document.querySelector('#color');
colovalue.addEventListener('input', function() {
  document.querySelector('#npa').style.color = colovalue.value;
});
const colovalueA = document.querySelector('#colorA');
colovalueA.addEventListener('input', function() {
  document.querySelector('#logo').style.borderColor = colovalueA.value;
});
const colovalueB = document.querySelector('#colorB');
colovalueB.addEventListener('input', function() {
  document.querySelector('#statuS').style.color = colovalueB.value;
});

const colovalueC = document.querySelector('#colorC');
colovalueC.addEventListener('input', function() {
  document.querySelector('#pp').style.borderColor = colovalueC.value;
});
const colovalueD = document.querySelector('#colorD');
colovalueD.addEventListener('input', function() {
  document.querySelector('#bName').style.color = colovalueD.value;
});

const colovalueE = document.querySelector('#colorE');
colovalueE.addEventListener('input', function() {
  document.querySelector('#clsp').style.color = colovalueE.value;
});

const colovalueF = document.querySelector('#colorF');
colovalueF.addEventListener('input', function() {
  document.querySelector('#daTe').style.color = colovalueF.value;
});

const colovalueI = document.querySelector('#colorI');
colovalueI.addEventListener('input', function() {
  document.querySelector('#wishess').style.color = colovalueI.value;
});