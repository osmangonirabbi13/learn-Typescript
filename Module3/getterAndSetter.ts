//getter
//setter

class BankAccount {
    readonly userId : number;
    public userName : string;
    // private userBalance : number;
    protected userBalance : number;

    constructor(userId : number,userName : string , userBalance : number ){
        this.userId = userId
        this.userName = userName
        this.userBalance= userBalance
    }

    // //balance adddd
    // addBlance(balance : number){
    //     this.userBalance = this.userBalance + balance
    // }

    //setter use korbo 
    
    set addBalance(amount : number){
       this.userBalance = this.userBalance + amount
    }

    //getter use  krbo
    get getBalance(){
       return this.userBalance
    }
}

const osmanAccount = new BankAccount(1 , "osman goni" , 2000)
osmanAccount.addBalance = 100
osmanAccount.addBalance = 50
console.log(osmanAccount.getBalance)
console.log(osmanAccount)



