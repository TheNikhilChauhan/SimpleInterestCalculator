const text = document.getElementById('text');
function highlight(){
    const words = text.textContent.split(' ');
    for(let i =0; i<words.length; i++){
        if(words[i].length> 8){
            words[i]= '<span style="background-color: yellow">' +words[i]+ '</span>';
        }
    }
    text.innerHTML = words.join(' ');
}
highlight();
























