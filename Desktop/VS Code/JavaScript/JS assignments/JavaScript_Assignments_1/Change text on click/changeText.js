
const text = document.getElementById('heading');
const button = document.getElementById('button');

const newText = ["PW Skills","The most affordable learning platform","Learn Full Stack Web Development"];

let currentIndex = 0;
// text.textContent = newText[currentIndex];

button.addEventListener("click", function(){
    currentIndex = (currentIndex+1) % newText.length;
    text.textContent = newText[currentIndex];
})