const balance = document.getElementById('balance');

function increase() {
    let current = 0.0
    current += parseFloat(balance.innerText.substring(1));
    current += 1.0
    balance.innerText = "$" + current.toString() + ".00";
}

function decrease() {
    let current = 0.0
    current += parseFloat(balance.innerText.substring(1));
    current -= 1.0
    balance.innerText = "$" + current.toString() + ".00";
}