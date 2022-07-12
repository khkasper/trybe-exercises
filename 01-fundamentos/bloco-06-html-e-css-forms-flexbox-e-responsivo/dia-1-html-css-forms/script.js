const stateList = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const states = document.querySelector("#state");
const date = document.querySelector("#startDate");
const submitBttn = document.querySelector("#submit");
const requiredItems = document.querySelectorAll("[required]");
const dateArray = date.value.split('/');
const day = parseInt(dateArray[0]);
const month = parseInt(dateArray[1]);
const year = parseInt(dateArray[2]);

function createUF() {
  for (let index = 0; index < stateList.length; index += 1) {
    let options = document.createElement('option');
    states.appendChild(options).innerText = stateList[index];
    states.appendChild(options).value = stateList[index];
  }
}
createUF();

submitBttn.addEventListener("click", (event) => {
  event.preventDefault();
  let errors = '';
  for (let index = 0; index < requiredItems.length; index += 1) {
    let input = requiredItems[index];
    if (input.required) {
      if (input.value === "") {
        errors += `O campo ${input.name} é obrigatório! \n`;
      }
    }
  }
  if (!(day > 0 || day <= 31 || month > 0 || month <= 12 || year > 0)) {
    errors += 'Insira uma data no formato indicado.';
  }
  alert(errors);
});