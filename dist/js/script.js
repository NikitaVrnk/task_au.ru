let listData=[]; //массив для хранения данных пользователя

let userData = { //объект юзера
    username:"",
    password:"",
    email:""
};

///////////////////работает не трогать =)////////////////////////////////
let username = document.getElementById("username");
//обновить имя
let status = document.getElementById("status");
status.onclick = () =>{
    let randomname = document.getElementById("randomname");
    randomname.innerText = username.value;
};
/////////////////////////////////////////////////////////////////////////



//данные из поля ввола
let psw = document.getElementById("psw");
let pswRepeat = document.getElementById("psw-repeat");
let email = document.getElementById("email");
//let btn = document.getElementById("btn")
console.log(username)


// https://qna.habr.com/q/423433 проверка на пустой инпут
document.getElementById("btn").onclick = () => {
   
        // userData.username = username.value;
        // userData.password = psw.value;
        // userData.email = email.value;
        // listData.push(userData);
    
    console.log(userData)
    console.log(listData);
    
};





