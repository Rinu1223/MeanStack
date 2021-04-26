class Bank{
   // CreateAccount(accno,bname,minbalance,ifsc){
          constructor(accno,minbalance,actype){

this.accno=accno;
this.bname="sbi";
this.balance=minbalance;
this.ifsc="sbi675757";
this.actype=actype;
}
deposite(amount){
    this.balance+=amount;
    console.log(`your ${this.bname} account ${this.accno} has been creadited with amount ${amount} aval bal: ${this.balance}`);
}
withdraw(amount){
    if(amount<this.balance){
        console.log(`your ${this.bname} account ${this.accno} has been creadited with amount ${amount} aval bal: ${this.balance}`);

    }
    else{
        console.log("transaction has been cancelled with error code 1001");
    }
}
balEnq(){
    console.log("your aval balance "+this.balance);
}
}
var obj1=new Bank(1000,5000,"savings")
var obj2=new Bank(1001,5000,"savings")
var obj3=new Bank(1002,6000,"current")
var obj4=new Bank(1003,5000,"savings")
var users=[]
users.push(obj1)
users.push(obj2)
users.push(obj3)
users.push(obj4)
var savingsusers=users.filter(users=>users.actype=='savings')
console.log(savingsusers);
//sort using balance
var sortwithbal= users.sort((user1,user2)=>user1.balance-user2.balance)console.log(sortwithbal);
//print highest salary
var highestbal=users.reduce((bal1,bal2)=>bal1.balance>bal2.balance?bal1:bal2)

console.log(highestbal);
