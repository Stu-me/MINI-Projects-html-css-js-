const clicked = document.querySelector('#resultTable');
const area = document.querySelector('main');
area.addEventListener('click', checkInput); //will not work as called before declared - checkinput
area.addEventListener('keydown', checkInput);
area.focus();

function checkInput(e) {
    e.preventDefault();
    if (e.type === 'click') {
        mouseOutput(e);
    }
    else keyboardOutput(e);
}
function mouseOutput(e) {
    clicked.innerHTML = `
          <table>
            <tr>
                <th>What Input Device</th>
                <th>What Button Pressed</th>
                <th>Button - Code</th>
            </tr>
            <tr>
                <td>Mouse</td>
                <td>${e.button}</td>
                <td>${e.which}</td>
            </tr>
            
        </table>`;
}
function keyboardOutput(e) {
            clicked.innerHTML = `
          <table>
            <tr>
                <th>What Input Device</th>
                <th>What Button Pressed</th>
                <th>Button - Code</th>
            </tr>
            <tr>
                <td>KeyBoard</td>
                <td>${e.key}</td>
                <td>${e.code}</td>
            </tr>
            
        </table>`;
}
