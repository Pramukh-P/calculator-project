let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let history = [];

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(`${expression} = ${result}`);
  } catch (e) {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  history.unshift(entry);
  if (history.length > 10) history.pop();

  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
}

document.getElementById('toggleMode').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('clearHistory').addEventListener('click', () => {
  history = [];
  historyList.innerHTML = '';
});
