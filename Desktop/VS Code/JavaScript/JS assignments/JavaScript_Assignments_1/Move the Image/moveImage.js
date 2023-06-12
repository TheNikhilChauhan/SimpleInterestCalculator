const image = document.getElementById('img');
let x = 0;
let y = 0;
const step = 10;

document.addEventListener('keydown', function(event){
    switch(event.key){
        case 'ArrowUp' :
            y-= step;
            break;
        case 'ArrowDown' :
            y+= step;
            break;
        case 'ArrowRight' :
            x+= step;
            break;
        case 'ArrowLeft' :
            x-= step;
            break;
    }
    image.style.left = x + 'px';
    image.style.top = y + 'px';
})