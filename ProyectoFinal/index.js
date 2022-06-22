//Declare array and user's data

const usersList = [
   
    {
        userName: '12345',
        password: '1234',
        profileImage: './images/profile1.jpg',
        nameUser: 'Mali',
        age: 45,
        balance: 200
    },
    {
        userName: '67890',
        password: '4321',
        profileImage: './images/profile2.jpg',
        nameUser: 'Gera',
        age: 35,
        balance: 290
    },
    {
        userName: '54321',
        password: '0987',
        profileImage: './images/profile3.jpg',
        nameUser: 'Maui',
        age: 29,
        balance: 67
    }
];

let loginForm = document.querySelector('#formAccount');
let btnBalance = document.querySelector('#btnDeposit');
let btnWithdraw = document.querySelector('#btnWithdraw');
let btnDeposit = document.querySelector('#btnDeposit');
boxAccount = document.getElementById('box-account');
const textAbout = document.querySelector('#textAbout');

// LOGIN FUNCTIONS

loginForm.addEventListener('submit', (e) => {

    // get elements (form)

    var userName = document.getElementById('txtUserName').value.toString();
    var userPassword = document.getElementById('txtPassword').value.toString();
    
    e.preventDefault();

    //Function to be executed. The values-input are executed as a parameter

    validateCredentials(userName, userPassword);
});

// VALIDATE USER'S DATA TO LOGIN: receive 2 parameters and verify if the user exist by the find method, then
// if the password match, the user can login, otherwise, user must try again

function validateCredentials(pUser, pPass){

    //Function .find to locate and verify if the user exist
    const userData = usersList.find(user => pUser == user.userName);
    if(userData){ 
        
        if(userData.password == pPass){
            
            //window.location = 'account.html';
            localStorage.setItem('userInfo', JSON.stringify(userData));
            indicator = usersList.indexOf(userData);
            accountManage(indicator);

        }else{
            alert('Invalid credentials. Password is incorrect');
        }
    }else{
        alert('Invalid credentials, User Name is incorrect')
    }
    
    
}

//ACCOUNT PAGE
function accountManage(indicator){
    console.log('hi')
    var opt = 1;
    while(opt == 1){
        let option = prompt('What would you like to do today? \n 1. balance \n 2. deposit \n 3. withdrawal \n 4. Sign out');
        switch(option){
            case '1':
                alert('Your current balance is: ' + usersList[indicator].balance);
                opt = prompt('Would you like to do another operation? \n 1. Yes \2 2. No');
            break;

            case '2':
                let deposit = Number(prompt('How much money would you like to deposit into your account?'));
                    if(deposit == null || isNaN(deposit) == true || deposit <= 0){
                        alert('Invalid, please try again. Session expired');
                        //opt = 2;
                    }else{

                        var updateAmount = usersList[indicator].balance + deposit;
                        if(updateAmount <= 990){
                            alert('Account balance: ' + updateAmount);
                            usersList[indicator].balance = updateAmount;
                            //opt = prompt('Would you like to do another operation? \n 1. Yes \2 2. No');
                        }else{
                            alert('Sorry, your account cannot have more than $990');
                        }
                    }
            break;
        
            case '3':
                let withdrawal = Number(prompt('Enter the amount: '));
                    if(withdrawal == null || isNaN(withdrawal) == true || withdrawal <= 0){
                        alert('Invalid, please try again. Session expired');
                        opt = 2;
                    }else{
                        var balanceWith = usersList[indicator].balance - withdrawal;
                        if(balanceWith >= 10){
                            usersList[indicator].balance = balanceWith;
                            alert('Your balance is: ' + usersList[indicator].balance);
                            opt = prompt('Would you like to do another operation? \n 1. Yes \2 2. No');
                        }else if(balanceWith > 0 && balanceWith < 10){
                            alert('Sorry, your account cannot have less than $10');
                        }else if(balanceWith < 0){
                            alert('Your account is overdraft');
                        }
                    }
            break;

            case '4':
                    alert('Thank you for visiting us');
                    opt= 2;
            break;

            default:
            alert('Invalid option. Session expired')
            opt = 2;
            break; 
        }
    }
    
}

