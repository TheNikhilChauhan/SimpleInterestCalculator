function compute(){
    var principal=document.getElementById('principal').value; 
    var rate=document.getElementById('rate').value;
    var years=document.getElementById('years').value;
    var interest=principal*rate*years/100;
    var year=new Date().getFullYear()+parseInt(years);
    //text after compute interest
    document.getElementById("result").innerHTML="<br/><br/>"+"If you deposit <mark>"+principal+"</mark>,\<br\>"+"at an interest rate of <mark>"+rate+"%</mark>,\<br\>"+"You will receive an amount of <mark>"+interest+"</mark>,\<br\>"+"in the year <mark>"+year+"</mark>\<br\>";
}

//function to read the range value
function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("rateVal").innerText=rateval+"%";
}
//function to check positive value
function checkPrincipal()
{  
    var principal=document.getElementById('principal').value;
    if(principal<=0 || principal==" "){
        alert("Enter a positive number");
        principal.focus();
    }
}

