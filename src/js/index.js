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
// const ul = document.querySelector(".container__table-body-tr");

button.addEventListener("click", e => {
  e.preventDefault();

  function addItem() {
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
  }
  const newTr = document.createElement('tr');
  // const newTh = document.createElement('th');
  const newBtn = document.createElement('button');
  const tr = document.querySelector(".container__table-tbody");
  newTr.classList.add("container__table-body-tr");
  // newTh.classList.add("container__table-body-th");
  // newTr.append(newTh);
  for(let i = 0; i < 1; i++){
    for (let i = 0; i < 5; i++){
      const newTh = document.createElement('th');
      newTh.classList.add("container__table-body-th");
      newTr.append(newTh);
    };
    const newBtn = document.createElement('button');
    newBtn.classList.add("container__table-body-th-remove");
    tr.append(newBtn);
  };
  tr.append(newTr);
  // const newBtn = document.createElement('button');
  // newBtn.classList.add("container__table-body-th-remove");
  // tr.append(newBtn);

  // newTr.append(newTh);
  // newTr.append(newTh);
  // newTr.append(newTh);
  // newTr.append(newTh);
  // newTr.append(newTh.append(newBtn));

// addItem();
});

}

{

  const buttonRm = document.querySelector('.container__table-body-th-remove');
  const trRm = document.querySelector('.container__table-body-tr');
    buttonRm.forEach(el => {
      el.addEventListener("click", function(e) {
        el.preventDefault();
        el.closest('tr').remove();
      })
    })

}
// {

//   const buttonRm = document.querySelector('.container__table-body-th-remove');
//   const tr = document.querySelector('.container__table-body-tr');

//     buttonRm.addEventListener("click", function(e) {
//       // e.preventDefault();
//       tr.remove();
//     })

// }