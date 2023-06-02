const modal = document.querySelector(".rating__modal");
const rating = document.querySelector(".movies__rating");
const averageRating = document.querySelector(".rating__value-start");
const rateInput = document.querySelector(".rating__modal-input");
const ratingButton = document.querySelector(".rating__modal-button");

// проверка на вводимое значение \\
rateInput.addEventListener("keyup", function () {
  let v = parseInt(this.value);
  if (v < 1) {
    this.value = 1;
    alert("Значение должно быть от 1 до 10!");
  }
  if (v > 10) {
    this.value = 10;
    alert("Значение должно быть от 1 до 10!");
  }
});

const ratingArr = [Number(averageRating.innerHTML)];

function updateAverageRating() {
  ratingArr.push(Number(rateInput.value));
  console.log(ratingArr);
  averageRating.innerHTML = (ratingArr.reduce((a, b) => (a + b)) / ratingArr.length).toFixed(1); //toFixed(1) округляет полученный полученный средний рейтинг до одного знака после запятой

  if (averageRating.innerHTML >= 0 && averageRating.innerHTML < 5) {
    averageRating.style.color = "#ca3838";
  } else if (averageRating.innerHTML >= 5 && averageRating.innerHTML < 8) {
    averageRating.style.color = "#adbf3a";
  } else if (averageRating.innerHTML >= 8 && averageRating.innerHTML <= 10) {
    averageRating.style.color = "#64c342";
  }

  rateInput.value = "";
  
  return averageRating;
}

ratingButton.addEventListener("click", updateAverageRating);
