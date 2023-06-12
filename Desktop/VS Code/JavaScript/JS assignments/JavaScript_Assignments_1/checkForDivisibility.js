let arr = [10, 9, 27, 20, 30, 33, 50, 34, 56]
const divisibleByThree = () => {
    arr.forEach(element => {
        if (element % 3 == 0 && element % 2 != 0){
            console.log(`${element}`);
        }
    })
}

divisibleByThree();