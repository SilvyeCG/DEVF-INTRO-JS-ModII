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

let loginForm = document.querySelector('#formAccount');

loginForm.addEventListener('submit', (e) => {

    // extraer los elementos de user y pass
    var userName = document.getElementById('txtUserName').value.toString();
    var userPassword = document.getElementById('txtPassword').value.toString();
    
    e.preventDefault();
    //pasar la funcion
    validateCredentials(userName, userPassword);
});

function validateCredentials(pUser, pPass){

    for(let i = 0; i < usersList.length; i++){
        // console.log('hi')

        
        if(pUser == usersList[i].userName && pPass == usersList[i].password){
            console.log('well done')
            window.location = 'account.html'
        }else if(pUser == usersList[i].userName && pPass != usersList[i].password){
            alert('invalid password') 
        }else{
            alert('try again')
        }
        
    }
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