const depositAmount = document.getElementById('user-deposit-amount');
const widthrawAmount = document.getElementById('user-widthraw-amount');
const depositTotal = document.getElementById('deposit-total');
const widthrawTotal = document.getElementById('widthraw-total');
const balanceTotal = document.getElementById('balance-total');


// Function for dipositing money
document.getElementById('deposit-btn').addEventListener('click', function () {

    // setting the input value in deposit total
    depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmount.value);

    // clearing the deposit amount afterwards
    depositAmount.value = '';

    // adding the input value to the balance Total.
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositTotal.innerText);

    // Validation condition for negative numbers
    if (depositAmount.value < 0) {
        alert('Please input a valid amount.');
        return;
    }
})

// Function for widthrawing money
document.getElementById('widthraw-btn').addEventListener('click', function () {

    // setting the input value in widthrawTotal

    widthrawTotal.innerText = parseFloat(widthrawTotal.innerText) + parseFloat(widthrawAmount.value);

    // Clearing the widthraw amount afterwards
    widthrawAmount.value = '';

    // adding the input value to the balance Total.
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(widthrawTotal.innerText);

    // Validation condition for negative numbers
    if (widthrawAmount.value < 0) {
        alert('Please input a valid amount.');
        return;
    }
})