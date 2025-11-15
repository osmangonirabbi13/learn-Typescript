//Access >>>> Modifiers

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
    addBlance(balance : number){
        this.userBalance = this.userBalance + balance
    }
}

class StudentAccount extends BankAccount{
    test(){
        this.userBalance
    }
}


const osmanAccount = new BankAccount(1 , "osman goni" , 2000)

osmanAccount.addBlance(200)

console.log(osmanAccount)