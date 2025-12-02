// Different methods to select elements
const myId = document.getElementById('myId');
const myClass = document.getElementsByClassName('myClass');
const div = document.getElementsByTagName('div'); // Accesses all divs

// Modern methods (recommended)
const element = document.querySelector('#myId'); // Single element
const elements = document.querySelectorAll('.myClass'); // NodeList

// Examples
const h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('button.primary');
const firstListItem = document.querySelector('ul li:first-child');

// Log selected elements to the console
// console.log(myId, myClass, div, element, elements);

// JavaScript DOM Manipulation Examples

// Change text content
// console.log('Before change:', h1.textContent);
// h1.textContent = 'Welcome to My Website';
// div[0].innerHTML = 'This is a div element.';
// console.log('After change:', h1.textContent);


// console.log('Array contents:', myArray);

// Change styles
console.log(h1);
h1.style.backgroundColor = 'lightblue';
h1.style.padding = '10px';
h1.style.color = 'darkblue';
h1.style.borderRadius = '20px';

// Add a new class
/* header.classList.add('active-header'); */

// Remove a class
/* header.classList.remove('inactive-header'); */	

// Toggle a class
/* header.classList.toggle('highlighted-header'); */

// Create a new element
/* const newParagraph = document.createElement('p');
 newParagraph.textContent = 'This is a new paragraph.'; 
// Append the new element to the body
 document.body.appendChild(newParagraph); */

// Remove an element
/* if (myId) {
     myId.remove();
 } */

// Loop through NodeList and change text color
/* elements.forEach(el => {
     el.style.color = 'red';
 }); */

// Event listener example
/* buttons.forEach(button => {
     button.addEventListener('click', () => {
         alert('Button clicked!');
    });
 }); */


 // More examples of event listeners with button click
const alertButton = document.querySelector('#alertButton');
console.log(alertButton);
if (alertButton) {
		alertButton.addEventListener('mouseover', function() {
				alert('Alert Button Clicked!');
		});
}

const changeTextButton = document.getElementById('changeTextButton');
const textElement = document.getElementById('textElement');
if (changeTextButton && textElement) {
		changeTextButton.addEventListener('click', () => {
				textElement.textContent = 'Text has been changed!';
		});
}

const changeColorButton = document.getElementById('changeColorButton');	


// Traversing the DOM example
if (changeColorButton && textElement) {
		changeColorButton.addEventListener('click', () => {
				textElement.style.color = 'blue';
		});
}


