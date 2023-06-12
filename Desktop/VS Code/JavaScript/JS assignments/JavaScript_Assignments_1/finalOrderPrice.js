const cart = {
    "Boxing Gloves": 500,
    "Punching Bag": 700,
    "Mobile Cover": 800,
    "Book": 600,
    "Juicer": 400,
}
const totalCost = () => {
    let total =0;
    for(let element in cart) {
        total += cart[element];
    }
    console.log(total);
}

totalCost();