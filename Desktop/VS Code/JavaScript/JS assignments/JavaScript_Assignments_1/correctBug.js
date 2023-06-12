let cart = [20, 30, 40, 50]

const doubleTheQuantity = () => {
    for( let i =0 ; i<cart.length; i++){
        cart[i] = cart[i] * 2;
    };
    console.log(cart);
}

doubleTheQuantity();