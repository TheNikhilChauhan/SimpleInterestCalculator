let calculate = () => {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    const op = document.getElementById('operation').value;
    let result;
    switch(op){
        case '+':
            result = parseInt(num1) + parseInt(num2);
            document.getElementById("result").innerHTML = "The result is :" +result;
            break;
        case '-':
            result = num1 - num2;
            document.getElementById("result").innerHTML = "The result is :" +result;
            break;
        case '*':
            result = num1 * num2;
            document.getElementById("result").innerHTML = "The result is :" +result;
            break;
        case '/':
            result = num1 / num2;
            document.getElementById("result").innerHTML = "The result is :" +result;
            break;
        default:
            result = "Invalid Operator";
            document.getElementById("result").innerHTML = "The result is :" +result;
            break;
    }   
}