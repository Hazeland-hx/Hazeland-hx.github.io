// Grab the body element from HTML
var body = document.querySelector("body");
  
  class question {
  // A constructor is a special function used to create an instance of the class
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    // We will set this to true when answered correctly.
    this.correct = false;
  }
}

// Declare a new array
let myFlashcards = [];
var img1 = new Image();
img1.src = "images/000.jpeg"
var img2 = new Image();
img2.src = "images/.jpeg"
var img3 = new Image();
img3.src = "images/.jpeg"
// Create three questions and push them onto the myFlashcards array
myFlashcards.push(new question('What is 3+5?', img1));
myFlashcards.push(new question('What color is the sky?', img2));
myFlashcards.push(new question('Is ice cold?', img3));

// Loop through the array printing out the question and the answer
let i = 0;
while (i < myFlashcards.length)  {
  console.log(myFlashcards[i].question + ' ' + myFlashcards[i].answer);
  i=i+1;
}

i=0;
function buttonClicked(event) {
  if(i < myFlashcards.length-1){
    i=i+1;
  }else{
    i=0
  }
  document.getElementById("q1").innerHTML = myFlashcards[i].question;
  
}
document.getElementById("a1").innerHTML = 'Hover on the question to see the answer';
function buttonHovered(event){
    document.getElementById("a1").innerHTML = myFlashcards[i].answer;;
}

function buttonNotHovered(event){
    document.getElementById("a1").innerHTML = 'Hover on the question to see the answer';
}
