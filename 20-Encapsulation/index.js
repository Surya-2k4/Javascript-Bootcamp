//

class BankAccount {

    #balance; //private field
    constructor(initialBalance){
        this.#balance = initialBalance;
    }

    //creating two functions for deposit and withdraw

    deposit(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`Deposited ${amount}. New Balance ${this.#balance}`);
        }else{
            console.log('Invalid deposit amount');
        }
    }

    withdraw(amount){
        if(amount>0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdrawed ${amount} from account. Current Balance ${this.#balance}`);
        }else{
            console.log('Insufficient Balance to Withdraw');
        }
    }

    getBalance(){
        return this.#balance;
    }

}

let savingsAccount = new BankAccount(1000); //initializing 

savingsAccount.deposit(500);

savingsAccount.withdraw(200);

savingsAccount.withdraw(3000);

savingsAccount.deposit(-500);

//we cant directly access the #balance since it was a private field

//savingsAccount.#balance -> gives error


