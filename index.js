
var heightInput = document.querySelector(".height-input-field");

var weightInput = document.querySelector(".weight-input-field");

var calculateButton = document.querySelector(".calculate");

var result = document.querySelector(".result");

var statement = document.querySelector(".result-statement");

var BMI, height, weight;




calculateButton.addEventListener("click", () => {

    height = heightInput.value;

    weight = weightInput.value;

    BMI = weight/(height**2); 

    result.innerText = BMI;




 if(BMI < 18.5 ){

        statement.innerText = "Your BMI value is under weight range 18.5";
        
    }
else if((BMI > 18.5) && (BMI < 24.9)){

        statement.innerText = "Your BMI value is normal weight rang 18.5 to 24.5";

    
    }

else if((BMI > 25) && (BMI < 29.9)){

        statement.innerText = "Your BMI value is over weight rang 25 to 30";
    }

else{
        statement.innerText = "Your BMI value is severe obesity 35 to 39.5";
    }


});