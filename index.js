const person = {
    firstName: "Patrick",
    lastName: "Star",
    Weight: "78kg",
    Height: "30cm",
    
    };

function bmi(){
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;
    let bmi = w/ (h/100 * h/100);
    let total = bmi.toFixed(2);

document.getElementById('result').innerHTML = "Your BMI is " + total;

let range = '';
if (bmi < 18.5){
    range = "Underweight";
}

if (bmi >= 18.5 && bmi < 25 ) {
range = "Normal";
}

if (bmi >= 25 && bmi < 30){
    range = "Overweight";
}
if (bmi >= 30){
        range = "Obese";
}

document.getElementById('comment').innerHTML = `Range: <span id= "comment"> ${range} </span>`;

};

function argument(person){
    console.log(`This is ${person}`);
}

argument("Patrick Star,  Weight: 78kg, Height:30cm ");