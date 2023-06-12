let validate = () =>{
    const pw = document.getElementById('passwd').value;
    const pw2 = document.getElementById('passwd2').value;

    if (pw == ''){
       document.getElementById('msg1').innerHTML = "Please Enter the password";
        return false;
    }
    if(pw2 == ''){
        document.getElementById('msg2').innerHTML = "Please Enter the password";
        return false;
    }
    if(pw.length > 10){
        document.getElementById('msg1').innerHTML = "Length must not exceed 10 characters";
        return false;

    }
    if(pw != pw2){
        document.getElementById('msg2').innerHTML = "Password didn't match. Password validation unsuccessful.";
        return false;
    }
    else{
        alert("Password Matched. Password validation Successful.");
    }
}