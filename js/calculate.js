// player total expense
document.getElementById('btn-player-cost').addEventListener('click', function () {
    const perPlayerCost = getInputElementValue('player-cost-field')
    // new total player cost
    const totalPlayerExpense = playerArray.length * perPlayerCost;
    //check validity 
    if (isNaN(perPlayerCost) === true || perPlayerCost < 0 ) {
        alert('Please enter a valid amonut!')
    } else {
         setTextElementValue("player-expense", totalPlayerExpense);
    }
    
})

// final total amount 
document.getElementById("btn-total-amount").addEventListener('click', function () {
    const managerCost = getInputElementValue("btn-manager-field");
    const coachCost = getInputElementValue("btn-coach-field");

    const totalPlayerExpense = getTextElementValueById('player-expense');

    const finalTotalAmount = totalPlayerExpense + managerCost + coachCost;
    console.log(finalTotalAmount)

    // check validity
    if (isNaN(managerCost) === true || managerCost < 0 || isNaN(coachCost) === true || coachCost < 0) {
        alert("Please enter a valid amonut!");
    } else {
        setTextElementValue("total-amount", finalTotalAmount);
    }
        
})