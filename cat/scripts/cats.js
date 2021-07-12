const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('https://Hazeland-hx.github.io/cat/scripts/cats.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  
  let total = 0;
  let male = 0;
  let female=0;
  // Add your code here
  const jsonObj=JSON.parse(catString);
  const mother= jsonObj;
  for (let i=0;i<mother.length; i++){
    if (i==mother.length-1){
        motherInfo= motherInfo + ' and '+mother[i].name+'.';
        console.log(1);
    }else{
        motherInfo= motherInfo + ' '+ mother[i].name+',';
        console.log(2);
    }
    const kittens=mother[i]['kittens'];
    total=total+kittens.length;
    for(let j=0; j<kittens.length; j++){
        if(kittens[j]['gender']=='m'){
            male=male+1;
        }
    }
  }
  female=total-male;
  kittenInfo= "There are " + total + " kittens in total, among which " + male +" are male and " + female +" are female.";
  
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
