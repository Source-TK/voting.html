var nam = "Theophillis";
var gender = "male";



function DisplayName (){
    document.getElementById("nam").innerHTML=nam ;
}

function DisplayGender (){
    nam ="Vincent";
    gender ="male";
    

    document.getElementById("nam").innerHTML=nam ;
    document.getElementById("gender").innerHTML=gender ;
}


function calculateAge (year){

   
let age = document.getElementById("age").innerHTML = 2022 - year;

  return age ;
}
function eligible(age){
     if (age<=18){
    document.getElementById("eligible").innerHTML = "you can vote"

 } else if (age>=18){
     alert ("You are eligible to vote!");

 }

 else{ 
    document.getElementById("eligible").innerHTML = "you can't vote"
 }

}
    eligible(21)
    calculateAge(1994) 
    displayGender() ;
    DisplayName() ;