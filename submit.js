const fileInput = document.getElementById('uplogo');
const image = document.getElementById('logo');

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      image.src = event.target.result;
      image.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});



const fileInputC = document.getElementById('changeBackba');
const imageC = document.getElementById('baback');


fileInputC.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      imageC.src = event.target.result;
      imageC.style.display = 'block';
       
    };
    reader.readAsDataURL(file);
  }
});






function changeImage(imageSrc) {
  // Set the src of the image with id="hello" to the clicked option's image source
    document.getElementById('baback').style.display="block";

  document.getElementById('baback').src = imageSrc;
}



function submitF() {
 document.getElementById('npa').innerHTML = 
 document.getElementById('sclName').value;
  document.getElementById('bName').innerHTML =
    document.getElementById('mrmrs').value+
        document.getElementById('bbName').value

  document.getElementById('wishess').innerHTML =
    document.getElementById('wishesss').value;
  document.getElementById('daTe').innerHTML =
    document.getElementById('dob').value;
  document.getElementById('statuS').innerHTML =
    document.getElementById('sttts').value;
let stdntstff = document.querySelector("#stdntstff");
      if (stdntstff.value === "Student") {
     document.getElementById('clsp').innerHTML =
        "Class :- " + document.getElementById('StudentP').value;


      }
      else if (stdntstff.value === "Staff") {
         document.getElementById('clsp').innerHTML =
         document.getElementById('PositionS').value;

      }







  document.querySelector('.form').style.display = "none";

 
}

