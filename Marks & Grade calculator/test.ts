export {}
function othername() {
    var input = document.getElementById("userInput").value;


    if (input < 50){
        document.getElementById("output").innerHTML = "Your marks "+input +" Grade is F";
    }else if (input >= 50 && input < 60 ){
        document.getElementById("output").innerHTML =  "Your marks "+input +" Grade is D";
    }else if(input >=60 && input < 70 ){
        document.getElementById("output").innerHTML = "Your marks "+input +" Grade is C";
    }else if (input >=70 && input <80){
        document.getElementById("output").innerHTML = "Your marks "+input +" Grade is B";
    }else if (input >=80 && input < 90){
        document.getElementById("output").innerHTML = "Your marks "+input +" Grade is A";
    }else if(input >90){
        document.getElementById("output").innerHTML = "Your marks "+input +" Grade is A+";
    }
    
}

