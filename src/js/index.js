document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.form-btn');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    const newTrElement = document.createElement('tr');
    const tbody = document.querySelector('.table-tbody');
    newTrElement.classList.add('table-body-tr');
    tbody.append(newTrElement);

    const newTdElementCategory = document.createElement('td');
    newTdElementCategory.classList.add('table-body-td-category');
    newTrElement.append(newTdElementCategory);

    const newTdElementName = document.createElement('td');
    newTdElementName.classList.add('table-body-td-name');
    newTrElement.append(newTdElementName);

    const newTdElementNumber = document.createElement('td');
    newTdElementNumber.classList.add('table-body-td-number');
    newTrElement.append(newTdElementNumber);

    const newTdElementWeight = document.createElement('td');
    newTdElementWeight.classList.add('table-body-td-weight');
    newTrElement.append(newTdElementWeight);

    const newTdElementLiter = document.createElement('td');
    newTdElementLiter.classList.add('table-body-td-liter');
    newTrElement.append(newTdElementLiter);

    const newTdElementButton = document.createElement('td');
    newTdElementButton.classList.add('table-body-td-button');
    newTdElementButton.style = 'padding: 0 10px';
    newTrElement.append(newTdElementButton);

    const newButtonElement = document.createElement('button');
    newButtonElement.classList.add('table-body-td-button-rm');
    newTdElementButton.append(newButtonElement);
    newButtonElement.textContent = 'X';

    const numberCheck = document.querySelector('#szt');
    const weightCheck = document.querySelector('#kg');
    const literCheck = document.querySelector('#l');

    const categoryInput = document.querySelector('.form-select-panel');

    const nameInput = document.querySelector('.form-input-name');

    const numberInput = document.querySelector('.form-input-number');

    const weightInput = document.querySelector('.form-input-number');

    const literInput = document.querySelector('.form-input-number');

    newTdElementCategory.textContent = categoryInput.value;
    newTdElementName.textContent = nameInput.value;

    localStorage.setItem('newTdElementCategory', categoryInput.value);

    if (numberCheck.checked) {
      newTdElementNumber.textContent = `${numberInput.value} szt.`;
      newTdElementWeight.textContent = '--';
      newTdElementLiter.textContent = '--';
    } else if (weightCheck.checked) {
      newTdElementWeight.textContent = `${weightInput.value} kg.`;
      newTdElementNumber.textContent = '--';
      newTdElementLiter.textContent = '--';
    } else if (literCheck.checked) {
      newTdElementLiter.textContent = `${literInput.value} l.`;
      newTdElementWeight.textContent = '--';
      newTdElementNumber.textContent = '--';
    }
    categoryInput.value = '';
    nameInput.value = '';
    numberInput.value = '';
    weightInput.value = '';

    newButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
      newTrElement.remove();
    });
  });
});
