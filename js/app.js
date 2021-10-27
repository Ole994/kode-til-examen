//import error (skal komme opp automatisk)
import { errorMessage } from "../components/utils/helpers.js";
import { emailPattern } from "../components/utils/helpers.js";

const errorName = document.querySelector(".error-name");
const errorSurname = document.querySelector(".error-surname")
const errorEmail = document.querySelector(".error-email")
const errorTlf = document.querySelector(".error-tlf")
const validate = document.querySelector(".validate")
const form1 = document.querySelector(".form1")
const inputName = document.querySelector(".name")
const inputSurname = document.querySelector(".surname")
const inputEmail = document.querySelector(".email")
const inputTlf = document.querySelector(".tlf")
const sucsess = document.querySelector(".sucsess")


//check if med add.eventListener
const emailFormat = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ 


form1.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    errorName.innerHTML =""
    errorSurname.innerHTML =""
    errorEmail.innerHTML =""
    errorTlf.innerHTML =""



    if (inputName.value.trim().length <2){
        errorMessage (".error-name", "Please enter a valid name") ;
    }

    if (inputSurname.value.trim().length <3){
        errorMessage (".error-surname", "Please enter a valid surnamename") ;
    }

    // const pattern = emailFormat
    
    if (!inputEmail.value.includes("@")){
        errorMessage (".error-email", "Please enter a valid email");
    }

    if (!/\d/.test(inputTlf.value.trim()) || inputTlf.value.trim().length !=8 ){
        errorMessage (".error-tlf", "Please enter a valid tlf") ;
    }

    if (errorName.innerHTML === "" && errorSurname.innerHTML === "" && errorEmail.innerHTML === ""&& errorTlf.innerHTML === ""){
        errorMessage (".sucsess", "sucsess");
    }
}
);









