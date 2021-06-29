// Grab the body element from HTML
  class question {
  // A constructor is a special function used to create an instance of the class
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    // We will set this to true when answered correctly.
    this.correct = false;
  }
}
// Define the image paths
var img1 = 'images/000.jpeg';
var img2 = 'images/001.jpeg';
var img3 = 'images/002.jpeg';

// Define the array
let myFlashcards = [];

// Create three questions and push them onto the myFlashcards array
myFlashcards.push(new question('What is 3+5?', img1));
myFlashcards.push(new question('Is ice cold?', img2));
myFlashcards.push(new question('What color is the sky?', img3));

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
// Shows the prompt
document.getElementById("a1").innerHTML = 'Hover on the question to see the answer';
// Shows the image
function buttonHovered(event){
    //console.log(myFlashcards[i].answer);
    document.getElementById("i2").style.visibility='visible';
    document.getElementById("i2").src = myFlashcards[i].answer;
}
function buttonNotHovered(event){
    //console.log(myFlashcards[i].answer);
    document.getElementById("i2").style.visibility='hidden';
}
