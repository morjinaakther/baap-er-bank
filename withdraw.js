// 1 add event listener with the withdraw button
//  2 get the withdraw amount from the withdraw input field
//   2 a:also make sure to convert the input into number by using parsefloat
// 3 get the previous withdraw total
// 4 calculate total withdraw amount
// 4:a set total withdraw withdrawAmount
// 5 get the previous balance total
// 6 calculate new balance total
// 6 a: set the new balance total
//7 clear the input field

// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step 2
    const withdrawField = document.getElementById('user-withdraw');
    const newWithdrawAmountString = withdrawField.value
    const withdrawAmount = parseFloat(newWithdrawAmountString)

    // step 7
    withdrawField.value = ''

    if (isNaN(withdrawAmount)) {
        alert('please provide number')
        return;
    }
    // step 3
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const newWithdrawTotalString = withdrawTotalElement.innerText
    const withdrawTotal = parseFloat(newWithdrawTotalString)



    // step 5
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const totalBalance = parseFloat(previousBalanceTotalString)



    if (withdrawAmount > totalBalance) {
        alert('baper bank a ato taka nai')
        return
    }
    // step 4
    const currentWithdrawTotal = withdrawTotal + withdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal
    // step 6
    const newBalanceTotal = totalBalance - currentWithdrawTotal;
    balanceTotalElement.innerText = newBalanceTotal



})
