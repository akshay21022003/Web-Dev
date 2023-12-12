// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[0]);
// li[0].textContent = "item 99";
// li[0].style.backgroundColor = "green"

// for(let i =0;i<li.length;i++){
//     li[i].style.backgroundColor="blue"
// }

//QUERYSELECTOR//

// let header = document.querySelector('#main-header');
// header.style.borderBottom = "solid 4px #ccc"

// var input = document.querySelector('input');
// input.value = "Hello World"

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue"

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "coral"

// QUERY SELECTOR ALL //

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "hello";

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'red';
    even[i].style.backgroundColor = "#ccc";
}