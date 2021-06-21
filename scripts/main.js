
const myHeading = document.getElementById('myPara');

myHeading.textContent = 'Hello world!';


function changeColor(newColor) {
  var elem = document.getElementById('myPara');
  elem.style.color = newColor; 
}
