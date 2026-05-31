const input = document.getElementById('userInput');
const displayLTR = document.getElementById('displayLTR');
const displayRTL = document.getElementById('displayRTL');
const themeSelect = document.getElementById('themeSelect');

// Update text in real-time
input.addEventListener('input', (e) => {
    const val = e.target.value || "Your text here...";
    displayLTR.innerText = val;
    displayRTL.innerText = val;
});

// Change Theme
themeSelect.addEventListener('change', (e) => {
    document.body.className = e.target.value;
});