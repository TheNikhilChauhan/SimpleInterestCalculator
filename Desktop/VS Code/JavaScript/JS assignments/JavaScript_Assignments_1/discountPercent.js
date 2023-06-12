const calculatePercentage = (original, discount) =>{
    const discountPrice = original - discount;
    const percentPrice = parseFloat(discountPrice / original) *100;
    console.log( percentPrice.toFixed(2)+ "%"); 
}

calculatePercentage(100, 89.47)