const button = document.getElementById('button');
const reload = document.getElementById('reload');
button.addEventListener("click", function(event){
    event.preventDefault();
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    if(password.length>8){
        document.getElementById('alert').innerHTML = "Invalid email or password!"
    }
    if(email.indexOf('@')=== -1){
        document.getElementById('alert').innerHTML = "Invalid email or password!"
    }
    if(password.length<8 && email.indexOf('@') !== -1){
    document.getElementById('valid').innerHTML = "Valid email and password!"
    }
})

reload.addEventListener("click", function(){
    location.reload();
})


