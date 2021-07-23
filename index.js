// Write your code here!

// const element = document.removeChild('main')

const main = document.querySelector('#main'); 

main.remove(); 


//question 
const newHeader = document.createElement('h1'); 

newHeader.setAttribute("id", "victory"); 

//for some reason this innerHtml has to be before the document.body.append 
newHeader.innerHTML = "Thomas is the champion"

document.body.append(newHeader); 

// adding a string into that header. 
// newHeader.innerHTML("Thomas is the champion")



