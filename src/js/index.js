{

const number = document.querySelector('#szt');
const weight = document.querySelector('#kg');
const toggleName = document.querySelector('#container__form-number-toggle');

const handleClick1 = () => {
  toggleName.innerText = 'Waga:';
}
const handleClick2 = () => {
  toggleName.innerText = 'Liczba:';
}

weight.addEventListener("click", handleClick1);

number.addEventListener("click", handleClick2);

}

{

const button = document.querySelector('.container__form-btn');

button.addEventListener("click", e => {
  e.preventDefault();

  // const el = document.createElement(tr);
  
  const numberCheck = document.querySelector('#szt');
  const weightCheck = document.querySelector('#kg');

  const categoryInput = document.querySelector('.container__form-select-panel');
  const category = document.querySelector('.category');

  const nameInput = document.querySelector('.container__form-input-name');
  const name = document.querySelector('.name');

  const numberInput = document.querySelector('.container__form-input-number');
  const number = document.querySelector('.number');

  const weightInput = document.querySelector('.container__form-input-number');
  const weight = document.querySelector('.weight');

  category.innerHTML = categoryInput.value;
  name.innerHTML = nameInput.value;

  if (numberCheck.checked) {
    number.innerHTML = numberInput.value + " szt.";
    weight.innerHTML = "--";
  } else if (weightCheck.checked) {
    weight.innerHTML = weightInput.value + " kg.";
    number.innerHTML = "--";
  }
  // number.innerHTML = numberInput.value;
  // weight.innerHTML = weightInput.value;
  // category.innerHTML = categoryInput.value;
  // el.classList.add("tr");
  // tr.append(el);
});

}