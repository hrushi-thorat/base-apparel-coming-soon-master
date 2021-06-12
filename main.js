const emailform=document.getElementById("email-form");
const emailbutton=document.getElementById("email-button")
const input =document.getElementById("e-mail")
 const bor =document.querySelector(".input")
 const msg =document.querySelector(".error-msg")
 const eimg =document.querySelector(".error-img")
 const sucess =document.querySelector(".sucess-msg")

emailbutton.addEventListener("click",checkUserInput);


 function checkUserInput(e){
e.preventDefault();
const userInput=document.getElementById("user-input").value
console.log(userInput)

if(!ValidateEmail(userInput)){
    bor.classList.add("error")
    msg.classList.add("error")
    eimg.classList.add("error")

}else{
    console.log("else")
    bor.classList.remove("error")
    msg.classList.remove("error")
    eimg.classList.remove("error")
    sucess.classList.add("sucess")
    document.getElementById("user-input").value= "";
}
 }
 function ValidateEmail(userEmail){
    const mailformat = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    return userEmail.match(mailformat);

 }