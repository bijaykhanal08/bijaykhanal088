function Form() {
let a = document.querySelector('.form');
let b = document.querySelector('.edit');
  let c = document.querySelector('.backgroundSizeA');
let d = document.querySelector('#FO');
let e = document.querySelector('#ED');
let f = document.querySelector('#BS');

a.style.display = a.style.display === "block" ? "none" : "block";
b.style.display = b.style.display === "block" ? "none" : "none";
c.style.display = c.style.display === "block" ? "none" : "none";

d.style.color = d.style.color === "cornflowerblue" ? "#000" : "cornflowerblue";
d.style.borderColor = d.style.borderColor === "cornflowerblue" ? "#000" : "cornflowerblue";
e.style.color =  "#000";
e.style.borderColor =  "#000";
f.style.color =  "#000";
f.style.borderColor = "#000";
}
function Edit() {
let a = document.querySelector('.edit');
let b = document.querySelector('.form');
  let c = document.querySelector('.backgroundSizeA');
let d = document.querySelector('#ED');
let e = document.querySelector('#FO');

let f = document.querySelector('#BS');
a.style.display = a.style.display === "block" ? "none" : "block";
b.style.display = b.style.display === "block" ? "none" : "none";
c.style.display = c.style.display === "block" ? "none" : "none";
d.style.color = d.style.color === "cornflowerblue" ? "#000" : "cornflowerblue";
d.style.borderColor = d.style.borderColor === "cornflowerblue" ? "#000" : "cornflowerblue";
e.style.color =  "#000";
e.style.borderColor =  "#000";
f.style.color =  "#000";
f.style.borderColor =  "#000";
}
function BS() {
  let a = document.querySelector('.backgroundSizeA');
 let b = document.querySelector('.form');
let c = document.querySelector('.edit');
let d = document.querySelector('#BS');
let f = document.querySelector('#FO');
let e = document.querySelector('#ED');
  a.style.display = a.style.display === "grid" ? "none" : "grid";
b.style.display = b.style.display === "block" ? "none" : "none";
c.style.display = c.style.display === "block" ? "none" : "none";
d.style.color = d.style.color === "cornflowerblue" ? "#000" : "cornflowerblue";
d.style.borderColor = d.style.borderColor === "cornflowerblue" ? "#000" : "cornflowerblue";
e.style.color =  "#000";
e.style.borderColor =  "#000";
f.style.color =  "#000";
f.style.borderColor =  "#000";

}
function fClose() {
  document.querySelector('.form').style.display = "none";
  document.querySelector('#FO').style.color = "black";
  document.querySelector('#FO').style.borderColor = "black";

}
function eClose() {
 document.querySelector('.edit').style.display= "none";
  document.querySelector('#ED').style.color = "black";
  document.querySelector('#ED').style.borderColor = "black";
}
function BSclose() {
  document.querySelector('.backgroundSizeA').style.display = "none";
  document.querySelector('#BS').style.color = "black";
  document.querySelector('#BS').style.borderColor = "black";
}
function Back(){
  window.history.back();
}

function land(){
let a = document.querySelector('.result');
a.style.width = "400px";
a.style.height = "200px";
}
function port() {
  let a = document.querySelector('.result');
  a.style.width = "200px";
  a.style.height = "400px";
}
function square() {
  let a = document.querySelector('.result');
  a.style.width = "400px";
  a.style.height = "400px";
}
function three() {
  let a = document.querySelector('.result');
  a.style.width = "300px";
  a.style.height = "400px";
}






let schoolName = document.querySelector('#schoolName');
let scName = document.querySelector('#scName');
let schoolLogo = document.querySelector('#schoolLogo');
let scLogo = document.querySelector('#scLogo');
let scPp = document.querySelector('#scPp');
let iMage = document.querySelector('#Image');
let scStatus = document.querySelector('#scStatus');
let title = document.querySelector('#title');

let name = document.querySelector('#naMe');
let cass = document.querySelector('#cass');
let dAte = document.querySelector('#dAte');
let mEssege = document.querySelector('#mEssege');

let bBName = document.querySelector('#bBName');
let bBcls = document.querySelector('#bBcls');
let bBdate = document.querySelector('#bBdate');
let bBmes = document.querySelector('#bBmes');

// Toggle visibility on checkbox click
[schoolName, schoolLogo, iMage,title,naMe,cass,dAte, mEssege].forEach((checkbox, index) => {
  const editnameElements = [scName, scLogo, scPp, scStatus,bBName,bBcls,bBdate,bBmes ];


  checkbox.addEventListener('click', () => {
    const editElement = editnameElements[index];
 
    const displayStatus = editElement.style.display === "block" ? "none" : "block";

    editElement.style.display = displayStatus;
  });
});

function bGc() {
  let a = document.querySelector('#bGc');
a.style.display = a.style.display === "block" ? "none" : "block";

}
function chBack() {
  let a = document.querySelector('.changeBack');
  a.style.display = a.style.display === "block" ? "none" : "block";

}
function chBackC() {
  let a = document.querySelector('.changeBack');
  a.style.display = "none";

}
let stdntstff = document.querySelector("#stdntstff");
let stdnt = document.querySelector(".stdnt");
let stff = document.querySelector(".stff");

stdntstff.addEventListener("click", () => {
  // Assuming stdntstff is an input or element with a value attribute
  if (stdntstff.value === "Student") {
    stdnt.style.display = "block"; // Show student section
    stff.style.display = "none"; // Hide staff section
  } 
  else if(stdntstff.value === "Staff") {
    stff.style.display = "block"; // Show staff section
    stdnt.style.display = "none"; // Hide student section
  }
});