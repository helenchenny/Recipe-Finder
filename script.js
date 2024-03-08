const entry = document.getElementById('mealType');
const breakfast = document.getElementById('breakfastContainer');
const lunch = document.getElementById('lunchContainer');
const dinner = document.getElementById('dinnerContainer');
     
function userInput() {
  breakfastContainer.classList.add('hidden')
  lunchContainer.classList.add('hidden')
  dinnerContainer.classList.add('hidden')

  
let container = document.getElementById(`${entry.value}Container`)

container.classList.remove('hidden')

}

entry.addEventListener("change", userInput)
