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
boxAccount = document.getElementById('box-account');
boxButtons = document.getElementById('box-buttons');


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
            
            sessionStorage.setItem('userInfo', JSON.stringify(userData));
            indicator = usersList.indexOf(userData);
            // console.log(indicator);
            accountManage(indicator);
            

        }else{
            alert('Invalid credentials. Password is incorrect');
        }
    }else{
        alert('Invalid credentials, User Name is incorrect')
    }
    
    
}

function accountManage(indicator){

    clearHTML();
    
    const dataUser = usersList[indicator];
    //console.log(dataUser);

    const cardAccount = document.createElement('div');
    cardAccount.classList.add('col-6' ,'m-3');
    cardAccount.innerHTML = `
    <div class="row  m-1">
        <div class="col-8">
            <img src="${dataUser.profileImage}" class="rounded-circle " alt="" srcset="">
        </div>
        <div class="col-4 p-3 card-info">
            <div class="row">
                <div class="col-12 mt-5 mb-4">
                    <p id="textAbout">User account: ${dataUser.userName} </p>  
                </div>
                <div class="col-12 mb-4">
                    <p id="textAbout">Name: ${dataUser.nameUser}</p>
                </div>
                <div class="col-12 mb-4">
                    <p id="textAbout">Age: ${dataUser.age}</p>
                </div>    
            </div>
        </div> 
    </div>
    
    `
    const cardButtons = document.createElement('div');
    cardButtons.classList.add('row', 'pt-3' , 'ps-4');
    cardButtons.innerHTML = `
    <div class="col-3 pt-3 ps-4">
        <button type="submit" id="btnBalance" class="bg-primary text-white p-3">Balance</button>
    </div>
    <div class="col-3 pt-3 ps-4">
        <button type="submit" id="btnWithdraw" class="bg-danger text-white p-3">Withdraw</button>
    </div>
    <div class="col-3 pt-3 ps-4">
        <button type="submit" id="btnDeposit" class="bg-success text-white p-3">Deposit</button>
    </div>
    <div class="col-3 pt-3 ps-4">
        <button type="submit" id="btnSignOut" class="bg-warning text-white p-3">Sign Out</button>
    </div>
    `

    boxAccount.appendChild(cardAccount);
    boxButtons.appendChild(cardButtons);

    let obj = JSON.parse(sessionStorage.getItem('userInfo'));
    //console.log(obj);
    loadVariables(indicator);
    
}

function clearHTML(){
    boxAccount.innerHTML = '';
}

function loadVariables(indicator){
    let btnBalance = document.querySelector('#btnBalance');
    let btnWithdraw = document.querySelector('#btnWithdraw');
    let btnDeposit = document.querySelector('#btnDeposit');
    let btnSignOut = document.querySelector('#btnSignOut');

    btnBalance.addEventListener('click', () => {
        indicatorGetB = indicator;
        // console.log(indicatorGet)
        getBalance(indicatorGetB);
        
    });

    btnWithdraw.addEventListener('click', () => {
        indicatorGetW = indicator;
        // console.log(indicatorGet)
        performWithdraw(indicatorGetW);
        
    });

    btnDeposit.addEventListener('click', () => {
        indicatorGetD = indicator;
        // console.log(indicatorGet)
        performDeposit(indicatorGetD);
        
    });

    btnSignOut.addEventListener('click', () => {
       // performSignOut();
        location.reload(true);
        
    });

   
}

function getBalance(indicator){
    alert('Your current balance is: ' + usersList[indicator].balance);
    //console.log(indicator)
}

function performWithdraw(indicator){
    console.log(indicator)

    let withdrawal = Number(prompt('Enter the amount: '));
    if(withdrawal == null || isNaN(withdrawal) == true || withdrawal <= 0){
        alert('Invalid, please try again');
    }else{
    var balanceWith = usersList[indicator].balance - withdrawal;
    if(balanceWith >= 10){
        usersList[indicator].balance = balanceWith;
        alert('Your balance is: ' + usersList[indicator].balance);
    }else if(balanceWith > 0 && balanceWith < 10){
        alert('Sorry, your account cannot have less than $10');
    }else if(balanceWith <= 0){
        alert('Your account is overdraft');
    }
    }
}

function performDeposit(indicator){
    //console.log(indicator)

    let deposit = Number(prompt('How much money would you like to deposit into your account?'));
    if(deposit == null || isNaN(deposit) == true || deposit <= 0){
        alert('Invalid, please try again. Session expired');
    }else{

    var updateAmount = usersList[indicator].balance + deposit;
    if(updateAmount <= 990){
        alert('Account balance: ' + updateAmount);
        usersList[indicator].balance = updateAmount;
    }else{
        alert('Sorry, your account cannot have more than $990');
    }
    }
}