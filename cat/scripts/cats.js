const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

/*
// Get the URL for the JSON file
let requestURL = 'https://Hazeland-hx.github.io/cats/scripts/cats.json';

// Create a request object
let request = new XMLHttpRequest();

// Set the request to GET that data from the URL
request.open('GET', requestURL);

// Tell the request that we want it back in JSON format (not a text string, but a JSON Object)
request.responseType = 'text';

// Send the request
request.send();
*/

fetch('https://Hazeland-hx.github.io/cats/scripts/cats.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;
  let female=0;

  // Add your code here
  const jsonObj=JSON.parse(catsString);
  const mother= jsonObj['cats'];
  for (let i=0;i<mother.length; i++){
    if (i=mother.length-1){
        motherInfo.textContent= motherInfo.textContent + " and "+mother[i]+".";
    }else{
        motherInfo.textContent= motherInfo.textContent + " "+ mother[i]+",";
    }
    const kitten=mother[i]['kittens'];
    total=total+kittens.length;
    for(let j=0; j<kittens.length; j++){
        if(kitten['gender']=="m"){
            male=male+1;
        }
    }
  }
  female=total-male;
  kittenInfo= "There are " + total + "kittens in total, among which " + male +" are male and " + female +" are female."
}


// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
