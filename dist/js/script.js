let listData = []; //массив для хранения данных пользователя

let userData = { //объект юзера
    username: "",
    password: "",
    email: ""
};

///////////////////работает не трогать =)////////////////////////////////
let username = document.getElementById("username");
//обновить имя
let status = document.getElementById("status");
status.onclick = () => {
    let randomname = document.getElementById("randomname");
    randomname.innerText = username.value;
};
/////////////////////////////////////////////////////////////////////////

///////////данные инпутов//////////////////////
let psw = document.getElementById("psw");
let pswRepeat = document.getElementById("psw-repeat");
let email = document.getElementById("email");
//let error1 = document.getElementsByClassName("error1");

///////////////////////////////////////////


//JSON.parse городааааа.... сделать


//проверяем инпуты, если данные не введены выводим ошибку
// https://qna.habr.com/q/423433 
function checkInput() {
    //если поле инпута пустое добавляем красный бордер и класс error_show

    //еще надо сделать проверку корректно введенных символов 
    if (psw.value.length < 5) {
        psw.style.border = "1px solid red";
        document.getElementById("error1").classList.add('error_show')
    } else {
        psw.style.border = "1px solid green";
        document.getElementById("error1").classList.remove('error_show')
    }

    if (pswRepeat.value.length < 5) {
        pswRepeat.style.border = "1px solid red";
        document.getElementById("error2").classList.add('error_show')
    } else {
        pswRepeat.style.border = "1px solid green";
        document.getElementById("error2").classList.remove('error_show')
    }

    if (email.value === "") {
        email.style.border = "1px solid red";
        document.getElementById("error3").classList.add('error_show')
    } else {
        email.style.border = "1px solid green";
        document.getElementById("error3").classList.remove('error_show')
    }

}


/////////////////////////////////////
//https://ru.stackoverflow.com/questions/782033/%D0%92%D1%80%D0%B5%D0%BC%D1%8F-javascript-%D0%B2-%D1%80%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8-%D0%BD%D0%B0-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B5
var Date = new Date();
//устанавливаем текущее время изменения ТЕСТ
// вставить данные в нужное поле
function dateCreate() {
    document.getElementById("time").innerHTML = (Date.getHours() + ":" + Date.getMinutes() + ":" + Date.getSeconds());
}
///////////////////////////////////////////



// сохраняем данные из инпутов
function saveInput() {
    if (psw.value != "" &&
        pswRepeat.value != "" &&
        email.value != "" &&
        username.value != "") {

        userData.username = username.value;
        userData.password = psw.value;
        userData.email = email.value;

        listData.push(userData);
        // console.log(listData);
        // console.log(userData);

        dateCreate() //браузер обнавляется, едва заметно что функция отрабатывает
    }
}






// по клику на btn проверяем инпуты и сохраняем данные
document.getElementById("btn").onclick = () => {

    checkInput() //проверка заполнения инпутов

    //сохранение введенных данных если все поля заполены
    saveInput();

};