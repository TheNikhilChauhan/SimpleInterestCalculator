
const carRental = () => {
    let noOfDays = document.getElementById('noOfDays').value;
    let carType = document.getElementById('typeOfCar').value
    function totalCost(){
        if(carType == 'Economy'){
            rentalCost = 4000 * noOfDays;
            return rentalCost;
        }
        else if(carType == 'Midsize'){
            rentalCost = 10000 * noOfDays;
            return rentalCost;
        }
        else if(carType == 'Luxury'){
            rentalCost =  20000 * noOfDays;
            return rentalCost;
        }
        else{
            console.log("Invalid choice");
        }
    }
    
    document.getElementById('result').innerHTML = totalCost()
    alert(totalCost());
}