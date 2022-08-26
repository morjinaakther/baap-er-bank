document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositInput = document.getElementById('user-deposit')
    const depositInputerMaan = depositInput.value
    const depositInputNumber = parseFloat(depositInputerMaan)


    const depositBox = document.getElementById('deposit-total')
    const depositBoxerMaan = depositBox.innerText
    const depositBoxNumber = parseFloat(depositBoxerMaan)

    const depositInputAndBoxNumberAdd = depositInputNumber + depositBoxNumber
    depositBox.innerText = depositInputAndBoxNumberAdd


    const balanceBox = document.getElementById('balance-total')
    const balanceBoxerMann = balanceBox.innerText
    const balanceBoxNumber = parseFloat(balanceBoxerMann)

    const inputAndBalanceBoxAdd = depositInputNumber + balanceBoxNumber
    balanceBox.innerText = inputAndBalanceBoxAdd


    depositInput.value = ''

})