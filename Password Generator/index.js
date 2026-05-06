const characters = ["A", "B", "C", "D", "E", "F", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9", "0", "*", "&", "$", "#", "!", "?", "<", ">", "+", "/", ",", ".", "=", "|", "[", "]", "{", "}", "^", "%"];

let generatePasswordBtn = document.getElementById("generate-passwords-btn");
let passwordContainerEl = document.getElementById("password-container-el");
let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let lengthValue = document.getElementById("length-value").maxLength = 15;

function randomCharacter() {
    let randomNumber = Math.floor(Math.random() * characters.length);
    return characters[randomNumber];
}

//function setPassLength() {
//    lengthValue.maxLength = 15;
//    if (lengthValue === "") {
//        return 15;
//    }
//    return lengthValue;
//}

function generateRandomPassword(length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += randomCharacter();
    }
    return password
}

function renderPassword() {
    password1El.textContent = " ";
    password2El.textContent = " ";

    let length = 15;
    password1El.textContent += generateRandomPassword(length)
    password2El.textContent += generateRandomPassword(length)
}

//function copyToClipboard(password1El) {
  //  let copyPassword = password1El.target;
    //navigator.clipboard.writeText(copyPassword.textContent).then(res => {
  //      console.log("Input data copied to clipboard successfully");
    //})
//}



generatePasswordBtn.addEventListener("click", renderPassword() )
