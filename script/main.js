document.addEventListener('DOMContentLoaded', () => {
    let voltageDisplay = document.getElementById('voltage');
    let omDisplay = document.getElementById('om_main');
    let amperDisplay = document.getElementById('current_display');
    const btnPlus = document.getElementById('btn_plus');
    const btnMinus = document.getElementById('btn_minus');

    let voltage = parseFloat(voltageDisplay.textContent.replace('V', ''));
    let resistance = parseFloat(omDisplay.textContent.replace('Om', ' '));
    let current = parseFloat(amperDisplay.textContent.replace('A', ''));
    
    let currentResultFunction = () => {
        current = voltage / resistance;
        amperDisplay.textContent = current.toFixed(2);
    };
    currentResultFunction();

    amperDisplay.textContent = current.toFixed(2);

    btnPlus.addEventListener('click', () => {
        resistance += 1;
        omDisplay.textContent = resistance + ' Om';
        currentResultFunction();
    });

    btnMinus.addEventListener('click', () => {
        if (resistance >= 1) {
            resistance -= 1;
            omDisplay.textContent = resistance + ' Om';
            currentResultFunction();
        } else if (resistance <= 0){
            amperDisplay.textContent = 'BOOM!!!';
            omDisplay.classList.add('disabled');
        }
    });
});