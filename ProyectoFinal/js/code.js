pUser = document.querySelector('#txtUserName').value;
pPass = document.querySelector('#txtPassword').value;

function getUserList(){
    var userList = JSON.parse(localStorage.getItem('UserList'));
    if(userList == null){

        userList = [
            
            // ['user1', 'abc', 'Mali', 200],
            // ['user2' , 'def', 'Gera', 290],
            // ['user3', 'ghi', 'Maui', 67]
            
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
    }

    return userList;
}


document.querySelector('#btnAccess').addEventListener('click', validateCredentials());


function validateCredentials(pUser, pPass){
    var userList = getUserList();
    var bAccess = false; //return true/false if the user & pass are/aren't correct

    for(var i = 0; i < userList.length; i++){
        if(pUser == userList[i].userName && pPass == userList[i].password){
            bAccess = true;
        }
    }

    return bAccess;
}

