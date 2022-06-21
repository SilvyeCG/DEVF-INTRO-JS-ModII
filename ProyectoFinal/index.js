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

// LOGIN

let loginForm = document.querySelector('#formAccount');

loginForm.addEventListener('submit', (e) => {

    // get elements (form)

    var userName = document.getElementById('txtUserName').value.toString();
    var userPassword = document.getElementById('txtPassword').value.toString();
    
    e.preventDefault();

    //Function to be executed 

    validateCredentials(userName, userPassword);
});

// VALIDATE USER'S DATA TO LOGIN: receive 2 parameters and verify if the user exist by the find method, then
// if the password match, the user can login, otherwise, user must try again

function validateCredentials(pUser, pPass){

    //Function .find to locate and verify if the user exist
    const userData = usersList.find(user => pUser == user.userName);
    if(userData){ 
        
        if(userData.password == pPass){
            
            window.location = 'account.html';
        }else{
            alert('Invalid credentials. Password is incorrect');
        }
    }else{
        alert('Invalid credentials, User Name is incorrect')
    }

    profile(userData);
    
}
// function getUserList(){

//     const userList = JSON.parse(localStorage.getItem('userName'));

//     console.log(userList);
//     /*if(userList == null){

//         userList = [
            
            
//             {
//                 userName: 'user1',
//                 password: 'abc',
//                 nameUser: 'Mali',
//                 balance: 200
//             },
//             {
//                 userName: 'user2',
//                 password: 'def',
//                 nameUser: 'Gera',
//                 balance: 290
//             },
//             {
//                 userName: 'user3',
//                 password: 'ghi',
//                 nameUser: 'Maui',
//                 balance: 67
//             }
//         ]; 
//     } */

//     //return userList;
// 

