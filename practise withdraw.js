document.getElementById('btn-withdraw').addEventListener('click', function () {


    const inputWithdraw = document.getElementById('user-withdraw')
    const inputWithdrawerMann = inputWithdraw.value
    const inputWithdrawNumber = parseFloat(inputWithdrawerMann)

    const withdrawBox = document.getElementById('withdraw-total')
    const withdrawBoxerMann = withdrawBox.innerText
    const withdrawBoxNumber = parseFloat(withdrawBoxerMann)

    const inputAndwithdrawBoxAdd = inputWithdrawNumber + withdrawBoxNumber
    withdrawBox.innerText = inputAndwithdrawBoxAdd

    const balanceBox = document.getElementById('balance-total')
    const balanceBoxerMann = balanceBox.innerText
    const balanceBoxNumber = parseFloat(balanceBoxerMann)

    const newBalanceTotal = balanceBoxNumber - inputWithdrawNumber
    balanceBox.innerText = newBalanceTotal

    inputWithdraw.value = ''


})