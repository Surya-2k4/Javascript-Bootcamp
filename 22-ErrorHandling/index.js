class Bank{

    users = [
        { accountNo: 101, balance: 12000, username: 'Karan', password:'1234'},
        { accountNo: 102, balance: 21000, username: 'Siva', password:'1234'},
        { accountNo: 103, balance: 15000, username: 'Surya', password:'1234'}
    ];

    getBalanceWithoutErrorHandling(accountNo){

        const res = this.users.find((x)=> x.accountNo === accountNo);

        console.log(`Balance: ${res.balance}, Account Holder: ${res.username}`);
    }


    //guard clauses
    getBalance(accountNo, password){
        try{
            const res = this.users.find((x)=> x.accountNo === accountNo);

            if(!res){
                throw `Invalid Account No ${accountNo}`;
            }
            
            const isValidPass = res.password === password;

            if(!isValidPass){
                throw `Wrong Password`;
            }                
    
            return `Balance: ${res.balance}, Account Holder: ${res.username}`; //for display in the web page
        }catch(error){
            console.log(error);
            return error;
        }finally{
            console.log('Process is completed');
        }
    }

}

let statebank = new Bank();
console.log(statebank.users); 
//statebank.getBalanceWithoutErrorHandling(101,1234);

// statebank.getBalance(101,'1234')
// statebank.getBalance(102,134)
// statebank.getBalance(104,1234)

//display result to the web page form 

const formelement = document.getElementById('formData');

const displayMessage = document.getElementById('displayMessage');

formelement.addEventListener('submit',function (event){
    event.preventDefault();

    const formData = new FormData(this);

    const request = { accountNo: null, password:'' };

    formData.forEach((value, key) => {
        request[key] = value;
    });

    let indianBank = new Bank();

    const response = indianBank.getBalance(
        Number(request.accountNo),

        request.password
    );

    displayMessage.innerHTML = response;

    formelement.reset();


});