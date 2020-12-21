{

  const number = document.querySelector('#szt');
  const weight = document.querySelector('#kg');
  const toggleName = document.querySelector('#form-number-toggle');

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

  const button = document.querySelector('.form-btn');

  button.addEventListener("click", e => {
      e.preventDefault();

      function addItem() {
          const numberCheck = document.querySelector('#szt');
          const weightCheck = document.querySelector('#kg');

          const categoryInput = document.querySelector('.form-select-panel');
          const category = document.querySelector('.category');

          const nameInput = document.querySelector('.form-input-name');
          const name = document.querySelector('.name');

          const numberInput = document.querySelector('.form-input-number');
          const number = document.querySelector('.number');

          const weightInput = document.querySelector('.form-input-number');
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
      const tr = document.querySelector(".table-tbody");
      newTr.classList.add("table-body-tr");
      tr.append(newTr);

          for (let i = 0; i < 5; i++){
              const newTd = document.createElement('td');
              newTd.classList.add("table-body-td");
              newTr.append(newTd);
          };

      const newBtn = document.createElement('button');
      newBtn.classList.add("table-body-td-remove");
      tr.append(newBtn);
      const bar = document.querySelector(".table-body-td-remove");
      bar.innerText = 'X';
  });

}

{

  const btnRm = document.querySelector('.table-body-td-remove');

    if(btnRm){
        btnRm.addEventListener("click", function(e) {
            e.preventDefault();
            var removeTd = document.querySelector('.table-body-td');
            var parentEl = removeTd.parentElement;
            parentEl.removeChild(removeTd);
        })
    }

}