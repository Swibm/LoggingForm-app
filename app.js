/** Написать мини-проект "Авторизация". Требования следующие: надо создать функцию-конструктор User, которая создает объект со следующими полями:
 *  логин, пароль и имя пользователя; создать массив пользователей через  ключевое слово new как это сделано на уроке со счетами;
 * создать интерфейс авторизации (дизайн выбираете какой угодно); при нажатии на кнопку "войти" искать по логину и паролю пользователя в массиве; 
 * если найден то выводим куда-нибудь имя пользователя, иначе выводим ошибку авторизации*/

var loginUser  = prompt('Create your username')
var passwordUser = prompt('Create your password')


function addNewAccount(userName, userPassword) {
    this.userName = userName
    this.userPassword = userPassword
}

var usersList = [
    new addNewAccount(loginUser,passwordUser)
]

var listOfAllUserNames = []
var listOfAllUserPasswords = []

for (var i=0; i<usersList.length; i++) {
    listOfAllUserNames.push(usersList[i].userName)
}

for (var i=0; i<usersList.length; i++) {
    listOfAllUserPasswords.push(usersList[i].userPassword)
}

var enteredUsername = ""
var enteredPAssword = ""

function readingInputedData() {
    enteredUsername = document.getElementById('username-field').value
    enteredPAssword = document.getElementById('password-field').value
}

function checkingEnteredData() {
    
    if(listOfAllUserNames.includes(enteredUsername) == true && listOfAllUserPasswords.includes(enteredPAssword) == true)
    {alert("Username: " + enteredUsername + "Password: " + enteredPAssword)}
    else {alert("incorrect credentials")}
}

function loggingInButton() {
    readingInputedData()
    checkingEnteredData()
}

document.getElementById('button-logging').addEventListener("click", loggingInButton)


