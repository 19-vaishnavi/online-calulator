// Get the display element
let display = document.getElementById('display');
let historyList = document.getElementById('history-list');
let history = [];

// Function to append a character to the display
function appendCharacter(character) {
    if (display.innerText === '0') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = '0';
}

// Function to delete the last character from the display
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        let result = eval(display.innerText.replace('×', '*').replace('÷', '/').replace('%', '/100*'));
        addToHistory(display.innerText + ' = ' + result);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Function to calculate the square of the number
function calculateSquare() {
    try {
        let result = Math.pow(eval(display.innerText), 2);
        addToHistory(display.innerText + '² = ' + result);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

// Function to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// Function to toggle the history display
function toggleHistory() {
    let historyDiv = document.getElementById('history');
    historyDiv.style.display = historyDiv.style.display === 'none' ? 'block' : 'none';
}

// Function to add calculation to history
function addToHistory(calculation) {
    history.push(calculation);
    let historyItem = document.createElement('li');
    historyItem.className = 'list-group-item';
    historyItem.innerText = calculation;
    historyList.appendChild(historyItem);
}
