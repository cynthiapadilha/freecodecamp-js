const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

/*transformando string em number*/

function cleanInputString(str) {
  /*const strArray = str.split('');
  const cleanStrArray = [];
 Embora o loop pela string funcione, a criação de uma nova matriz é ineficiente para a memória e o desempenho do tempo de execução. Em vez disso vamos usar regex.

  for (let i = 0; i < strArray.length; i++) {
    if (!["+", "-", " "].includes(strArray[i])) {
      cleanStrArray.push(strArray[i])
    }
  }*/
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  const regex = /[0-9]e[0-9]/;
}