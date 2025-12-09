const container = document.querySelector('#container');
const createBtn = document.querySelector('#createBtn');

const myDiv = document.createElement('div');
myDiv.textContent = 'This is a newly created div element!';
myDiv.style.padding = '10px';
myDiv.style.marginTop = '10px';
myDiv.style.backgroundColor = '#f0f0f0';

createBtn.onclick = () => {
    createBtn.appendChild(myDiv);
}
