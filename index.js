// Write your code here!
// 
 // const element = document.removeChild('main')
 
 // const main = document.querySelector('#main'); 
 // 
 // main.remove(); 
 // 
 // 
 // //question 
 // const newHeader = document.createElement('h1'); 
 // 
 // newHeader.setAttribute("id", "victory"); 
 // 
 // //for some reason this innerHtml has to be before the document.body.append 
 // newHeader.innerHTML = "Thomas is the champion"
 // 
 // document.body.append(newHeader); 
 // 
 // // adding a string into that header. 
 // newHeader.innerHTML("Thomas is the champion")


// phase 1 lab over again 

// question 1 
const main = document.querySelector("#main");

main.remove('id', 'main')

//question 2



const newHeader = document.createElement("h1");

newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "Thomas is the champion"
document.body.append(newHeader)

 // newHeader.innerHTML('Thomas is the Champion')