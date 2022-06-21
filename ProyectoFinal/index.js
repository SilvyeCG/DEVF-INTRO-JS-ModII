let pUser = document.getElementById('txtUserName').value.toString();
let pPass = document.getElementById('txtPassword').value.toString();
console.log(pUser, pPass);
const usersList = [
   
    {
        userName: 'user1',
        password: 'abc',
        nameUser: 'Mali',
        balance: 200
    },
    {
        userName: 'user2',
        password: 'def',
        nameUser: 'Gera',
        balance: 290
    },
    {
        userName: 'user3',
        password: 'ghi',
        nameUser: 'Maui',
        balance: 67
    }
];

console.log('entre al file')

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
// }


const btn = document.getElementById('formAccount');
btn.addEventListener('submit', (pUser, pPass, e) =>{
    e.preventDefault();
    console.log(pUser, pPass);
    //event.preventDefault();

});

// function validateCredentials(pUser, pPass, usersList){

//     console.log(pUser, pPass);
    // var userList = getUserList();
    // var bAccess = false; //return true/false if the user & pass are/aren't correct
    

    // for(var i = 0; i < usersList.length; i++){
    //     if(pUser == usersList[i].userName && pPass == usersList[i].password){
    //         bAccess = true;
    //     }
    // }

    // return bAccess;
//}

