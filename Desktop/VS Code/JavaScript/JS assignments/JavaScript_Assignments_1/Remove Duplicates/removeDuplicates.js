let arr = ["mobile", "boxing gloves", "punching bag", "mobile cover", "boxing gloves", "punching bag", "mobile cover" ]
function removeDuplicates(arr){
    return arr.filter((item, index) => arr. indexOf(item) === index);
}
console.log(removeDuplicates(arr));