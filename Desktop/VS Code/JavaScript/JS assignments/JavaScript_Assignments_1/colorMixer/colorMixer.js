
function colorMixer() {
    let color1 = document.getElementById('color1').value.toLowerCase();
    let color2 = document.getElementById('color2').value.toLowerCase();
    let result;
    switch(color1){
        case 'red':
            switch (color2){
                case 'blue':
                    result= 'purple';
                    break;
                case 'yellow':
                    result = 'orange';
                    break;
                case 'green':
                    result = 'yellow';
                    break;
                case 'red':
                    result = 'red';
                    break;
                default:
                    result = "Invalid color combination1";
                    break;
            }break;
        case 'blue':
            switch(color2.toString().toLowerCase()){
                case 'red':
                    result = 'purple';
                    break;
                case 'blue':
                    result = 'blue';
                    break;
                case 'green':
                    result = 'cyan';
                    break;
                case 'yellow':
                    result = 'green';
                    break;
            }break;
        default:
            result = "Invalid color combination";
            break;
    }
    document.getElementById('result').innerHTML = `The resultant mixer is ${result}`;
    alert(`${result}`)
}