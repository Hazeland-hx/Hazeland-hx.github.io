//Grab a reference to the section tag in the HTML file
const section = document.querySelector('section');

// Create paragraphs for the motherInfo and the kittenInfo
let para1 = document.createElement('p');
let para2 = document.createElement('p');

//Create the variable string that stores the mother cats' information
let motherInfo = 'The mother cats are called ';
//Create the variable string that stores the kittens' information
let kittenInfo;

//Fetch the string data from the URL of the JSON file
fetch('https://Hazeland-hx.github.io/cat/scripts/cats.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

//Create a function to display Cat Info
function displayCatInfo(catString) {
  
  let total = 0;
  let male = 0;
  let female=0;
  // Add your code here

//Concert the string we get into a JSON Object
  const jsonObj=JSON.parse(catString);
//Grab the array that contains the mother cats
  const mother= jsonObj['cats'];
//Loop through the array grabbing each individual mother cat and store their names into the motherInfo string
  for (let i=0;i<mother.length; i++){
    if (i==mother.length-1){
        motherInfo= motherInfo + ' and '+mother[i].name+'.';
        console.log(1);
    }else{
        motherInfo= motherInfo + ' '+ mother[i].name+',';
        console.log(2);
    } 
    
//Grab the array inside the mother cats that contains the kittens
    const kittens=mother[i]['kittens'];
    
//Calculate the number of all kittens
    total=total+kittens.length;
//Create an inner loop that goes through each kitten and count the number of male kittens
    for(let j=0; j<kittens.length; j++){
        if(kittens[j]['gender']=='m'){
            male=male+1;
        }
    }
  }

//Calculate the number of female kittens
  female=total-male;
  kittenInfo= "There are " + total + " kittens in total, among which " + male +" are male and " + female +" are female.";
  
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
