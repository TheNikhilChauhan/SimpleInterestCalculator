let totalBill = 0;
const calculate = () => {  
    
    const checkbox = document.getElementsByName("dish");
    for(let i = 0; i<checkbox.length; i++){
       if(checkbox[i].checked === true){
        totalBill += parseInt(checkbox[i].value);
       }
    }
    // alert(`Total cost:  ${totalBill}`);
    document.getElementById('total').innerHTML = `Total cost: \u20B9 ${totalBill}`
}

const splitBill = () => {
    const form = document.getElementById('myForm');
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const billTotal = document.getElementById('total');
        const bill = totalBill;
        const totalPerson = document.getElementById('persons').value;
        const divideBill = parseFloat(bill / parseInt(totalPerson));
        document.getElementById('billSplit').innerHTML = `Bill split: Each person must pay: \u20B9 ${divideBill}`
    })
}



// // get the HTML elements
// const totalBillElement = document.getElementById("total-bill");
// const dishes = document.getElementsByName("dish");
// const numberOfPeopleElement = document.getElementById("number-of-people");
// const resultElement = document.getElementById("result");

// // add event listener to calculate button
// document.getElementById("calculate-btn").addEventListener("click", () => {
//   // calculate the total bill based on the checked dishes
//   let totalBill = 0;
//   for (let i = 0; i < dishes.length; i++) {
//     if (dishes[i].checked) {
//       totalBill += parseFloat(dishes[i].value);
//     }
//   }
  
//   // divide the total bill among the number of people
//   const numberOfPeople = parseFloat(numberOfPeopleElement.value);
//   const billPerPerson = totalBill / numberOfPeople;

//   // display the result
//   resultElement.innerHTML = `Each person should pay ${billPerPerson.toFixed(2)} dollars.`;
// });
