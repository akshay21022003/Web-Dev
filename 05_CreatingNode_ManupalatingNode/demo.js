// Traversing the dom //

let itemList = document.querySelector('#items');
// parentNode 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes)

//children
// console.log(itemList.children)
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow"

// //firstChild
// console.log(itemList.firstChild)
// //firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = "Hello 1"

// //lastChild
// console.log(itemList.lastChild)
// //lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "Hello 1";


//nextSibiling
// console.log(itemList.nextSibling)
// //nextElementSibiling
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling)
// previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = "green"

//createElement

//create a div

let newDir = document.createElement('div');

//Add class
newDir.className = "Hello";

//Add id
newDir.id = "hello1";

//Add addr
newDir.setAttribute('title','Hello Div');

//create text node 

let newDivText = document.createTextNode('hello World')

newDir.appendChild(newDivText)

let container = document.querySelector('header .container');

let h1 = document.querySelector('header h1')

console.log(newDir)


newDir.style.fontSize = "30px"
container.insertBefore(newDir,h1)