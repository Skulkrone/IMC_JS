const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector("form");
// console.dir(form);

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  calculateBMI();
}

const inputs = document.querySelectorAll("input");
// console.log(inputs);

function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  // console.log(height, weight);

  // truthy 12 abc [1,2,3] true
  // falsy "" 0 null undefined false

  if (!height || !weight || height <= 0 || weight <= 0) {
    // console.log("Error")
    handleError();
    return;
  }

  // Math.pow = permet de faire un calcul avec une puissance
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  // console.log(BMI);

  showResult(BMI);
}

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError() {
  displayBMI.textContent = "Wops";
  displayBMI.style.color = "inherit";
  result.textContent = "Remplissez correctement les inputs.";
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    // find retourne le 1er élément d'un tableau qui est retourné par notre callback
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });
  // console.log(rank);
  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Résultat : ${rank.name}`;
}

// function addEvent(event, callback){

//   // Objet d'événement
//   const eventObject = {
//     x: 59,
//     y: 45
//   }

//   if(event){
//     callback(eventObject)
//   }

// }
