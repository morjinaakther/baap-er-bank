// step 1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountstring = depositField.value
    const newDepositAmount = parseFloat(newDepositAmountstring)

    // step 3 get the deposit total amount
    const depositElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    // step 4 add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositElement.innerText = currentDepositTotal
    // step  5 get the balance total amount
    const balanceElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceElement.innerText
    const balanceTotal = parseFloat(previousBalanceTotalString)
    //    step 6 calculate current balance
    const currentBalance = balanceTotal + newDepositAmount
    // step 7 set the balance total
    balanceElement.innerText = currentBalance

    // clear depositField
    depositField.value = '';
})