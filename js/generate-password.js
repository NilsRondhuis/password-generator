const refs = {
  form: document.querySelector(".form-pass"),
};

const LETTERS_LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const LETTERS_UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!#$%^&*()=+></~";

refs.form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputPass = e.currentTarget.elements.pass;

  const data = createSettings(e.currentTarget.elements);

  const result = isCheck(data).split("");

  const password = createPassword(result, data);

  inputPass.value = password;
});

function createSettings(elements) {
  const [, , , lettersUpper, lettersLower, numbers, symbols, passLength] =
    elements;

  let data = {};

  if (lettersUpper.checked) {
    data.lettersUpperCase = lettersUpper.checked;
  } else data.lettersUpperCase = lettersUpper.checked;

  if (lettersLower.checked) {
    data.lettersLowerCase = lettersLower.checked;
  } else data.lettersLowerCase = lettersLower.checked;

  if (numbers.checked) {
    data.numbers = numbers.checked;
  } else data.numbers = numbers.checked;

  if (symbols.checked) {
    data.symbols = symbols.checked;
  } else data.symbols = symbols.checked;

  data.passLength = passLength.value;

  return data;
}

function isCheck(obj) {
  const { lettersLowerCase, lettersUpperCase, numbers, symbols } = obj;

  let result = "";

  if (lettersLowerCase) {
    result += LETTERS_LOWER_CASE;
  }
  if (lettersUpperCase) {
    result += LETTERS_UPPER_CASE;
  }
  if (numbers) {
    result += NUMBERS;
  }
  if (symbols) {
    result += SYMBOLS;
  }

  return result;
}

function createPassword(arrItems, { passLength }) {
  let password = [];

  for (let i = 0; i < passLength; i += 1) {
    const index = Math.round(Math.random() * (arrItems.length - 1) + 1);
    password.push(arrItems[index]);
  }

  return password.join("");
}
