var array_earning, array_expense, total;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


array_earning = [];
array_expense = [];
total = [];


document.getElementById('Earning').addEventListener('click', (event) => {
  array_earning.push(getNumberOrString(document.getElementById('input').value));
  total.push(getNumberOrString(document.getElementById('input').value));
  let element_list1 = document.getElementById('list1');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('input').value);

  element_list1.appendChild(new_li);
  let element_total_earning = document.getElementById('total_earning');
  element_total_earning.innerText = array_earning.reduce((a,b) => a+b, 0);

});
0;


document.getElementById('Expense').addEventListener('click', (event) => {
  array_expense.push(getNumberOrString(document.getElementById('input').value));
  total.push(getNumberOrString(document.getElementById('input').value));
  let element_list2 = document.getElementById('list2');
  let new_li2 = document.createElement('li');
  new_li2.innerText = getNumberOrString(document.getElementById('input').value);

  element_list2.appendChild(new_li2);
  let element_total_expense = document.getElementById('total_expense');
  element_total_expense.innerText = array_expense.reduce((a,b) => a+b, 0);

});

document.getElementById('Balance').addEventListener('click', (event) => {
  let element_total = document.getElementById('total');
  element_total.innerText = total.reduce((a,b) => a+b, 0);

});