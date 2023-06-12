
const userDetail = {
    name: "Harvey Specter",
    money: 20000,


 deposit: function(num){
    this.money += num;
    console.log(`Money has been deposited \u20B9 ${num}, now the total amount is: \u20B9 ${this.money}`)
},

 withdraw: function(num){
    if(this.money<num){
        console.log(`Insufficient balance`);
    }
    else{
        this.money -= num;
        console.log(`Money has been debited \u20B9 ${num}, total balance left is: \u20B9 ${this.money}`);
    }
}
}
userDetail.deposit(5000);
userDetail.withdraw(15000);