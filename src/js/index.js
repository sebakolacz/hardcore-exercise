document.addEventListener("DOMContentLoaded", function() {

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

  };

  {

    const button = document.querySelector('.form-btn');

    button.addEventListener("click", e => {
        e.preventDefault();

        const newTrElement = document.createElement('tr');
        const tbody = document.querySelector(".table-tbody");
        newTrElement.classList.add("table-body-tr");
        tbody.append(newTrElement);

        const newTdElementCategory = document.createElement('td');
        newTdElementCategory.classList.add("table-body-td-category");
        newTrElement.append(newTdElementCategory);

        const newTdElementName = document.createElement('td');
        newTdElementName.classList.add("table-body-td-name");
        newTrElement.append(newTdElementName);

        const newTdElementNumber = document.createElement('td');
        newTdElementNumber.classList.add("table-body-td-number");
        newTrElement.append(newTdElementNumber);

        const newTdElementWeight = document.createElement('td');
        newTdElementWeight.classList.add("table-body-td-weight");
        newTrElement.append(newTdElementWeight);

        const newTdElementButton = document.createElement('td');
        newTdElementButton.classList.add("table-body-td-button");
        newTdElementButton.style = "padding: 0 10px;"
        newTrElement.append(newTdElementButton);
        
        const newButtonElement = document.createElement('a');
        newButtonElement.classList.add("table-body-td-button-rm");
        newButtonElement.setAttribute('href', "#");
        newTdElementButton.append(newButtonElement);
        newButtonElement.textContent = "X";

        const numberCheck = document.querySelector('#szt');
        const weightCheck = document.querySelector('#kg');

        const categoryInput = document.querySelector('.form-select-panel');
        const category = document.querySelector('.table-body-td-category');

        const nameInput = document.querySelector('.form-input-name');
        const name = document.querySelector('.table-body-td-name');

        const numberInput = document.querySelector('.form-input-number');
        const number = document.querySelector('.table-body-td-number');

        const weightInput = document.querySelector('.form-input-number');
        const weight = document.querySelector('.table-body-td-weight');

        category.innerHTML = categoryInput.value;
        name.innerHTML = nameInput.value;

        if (numberCheck.checked) {
            number.innerHTML = numberInput.value + " szt.";
            weight.innerHTML = "--";
        } else if (weightCheck.checked) {
            weight.innerHTML = weightInput.value + " kg.";
            number.innerHTML = "--";
        }
        categoryInput.value = '';
        nameInput.value = '';
        numberInput.value = '';
        weightInput.value = '';
    });

    const btnRm = table.querySelectorAll('.table-body-td-button-rm');

          btnRm.forEach(el => {
            el.addEventListener("click", function() {
                el.closest("tr").remove();
            })
        })
  }
});