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
    newButtonElement.textContent = 'Usuń';

    const numberCheck = document.querySelector('#szt');
    const weightCheck = document.querySelector('#kg');
    const literCheck = document.querySelector('#l');

    const categoryInput = document.querySelector('.form-select-panel');

    const nameInput = document.querySelector('.form-input-name');

    const numberInput = document.querySelector('.form-input-number');

    const weightInput = document.querySelector('.form-input-number');

    const literInput = document.querySelector('.form-input-number');

    localStorage.setItem('category', categoryInput.value);
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('number', numberInput.value);
    localStorage.setItem('weight', weightInput.value);
    localStorage.setItem('liter', literInput.value);

    newTdElementCategory.textContent = categoryInput.value;
    newTdElementName.textContent = nameInput.value;

    if (numberCheck.checked) {
      newTdElementNumber.textContent = `${numberInput.value} szt.`;
      newTdElementWeight.textContent = '--';
      newTdElementLiter.textContent = '--';
      localStorage.setItem('number', numberInput.value);
    } else if (weightCheck.checked) {
      newTdElementWeight.textContent = `${numberInput.value} kg.`;
      newTdElementNumber.textContent = '--';
      newTdElementLiter.textContent = '--';
      localStorage.setItem('weight', weightInput.value);
    } else if (literCheck.checked) {
      newTdElementLiter.textContent = `${numberInput.value} l.`;
      newTdElementWeight.textContent = '--';
      newTdElementNumber.textContent = '--';
      localStorage.setItem('liter', literInput.value);
    }

    categoryInput.value = '';
    nameInput.value = '';
    numberInput.value = '';
    weightInput.value = '';
    literInput.value = '';

    newButtonElement.addEventListener('click', (e) => {
      e.preventDefault();
      newTrElement.remove();
    });
  });

  const categoryInput = document.querySelector('.form-select-panel');

  const nameInput = document.querySelector('.form-input-name');

  const numberInput = document.querySelector('.form-input-number');

  const weightInput = document.querySelector('.form-input-number');

  const literInput = document.querySelector('.form-input-number');

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
  newButtonElement.textContent = 'Usuń';

  const numberCheck = document.querySelector('#szt');
  const weightCheck = document.querySelector('#kg');
  const literCheck = document.querySelector('#l');

  const valueOfItemCategory = localStorage.getItem('category', categoryInput.value);
  const valueOfItemName = localStorage.getItem('name', nameInput.value);
  const valueOfItemNumber = localStorage.getItem('number', numberInput.value);
  const valueOfItemWeight = localStorage.getItem('weight', weightInput.value);
  const valueOfItemLiter = localStorage.getItem('liter', literInput.value);

  newTdElementCategory.textContent = valueOfItemCategory;
  newTdElementName.textContent = valueOfItemName;

  if (numberCheck.checked) {
    newTdElementNumber.textContent = `${valueOfItemNumber} szt.`;
    newTdElementWeight.textContent = '--';
    newTdElementLiter.textContent = '--';
  } else if (weightCheck.checked) {
    newTdElementWeight.textContent = `${valueOfItemWeight} kg.`;
    newTdElementNumber.textContent = '--';
    newTdElementLiter.textContent = '--';
  } else if (literCheck.checked) {
    newTdElementLiter.textContent = `${valueOfItemLiter} l.`;
    newTdElementWeight.textContent = '--';
    newTdElementNumber.textContent = '--';
  }

  newButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    newTrElement.remove();
    localStorage.removeItem('category');
    localStorage.removeItem('name');
    localStorage.removeItem('number');
    localStorage.removeItem('weight');
    localStorage.removeItem('liter');
  });

  const print = document.querySelector('.print-table');
  print.addEventListener('click', () => {
    window.print();
  });
});
