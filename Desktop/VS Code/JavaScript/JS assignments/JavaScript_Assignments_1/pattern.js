let i = 6;
let result = '';
for (let row = i ; row>0; row--){
    for(let col = 0; col<row; col++){
        result += '*';
    }
    result += '\n'
}
console.log(result);