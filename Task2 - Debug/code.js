const formulatePayment = (choice, amount) => {
  const initialPayment = ((10 / 100) * amount).toFixed(2);
  const remainingTotal = amount - initialPayment;
  if (choice === 'weekly') {
    let weeklyAmountPayment = 0;
    do{
      weeklyAmountPayment  += 50;
      let weeks = remainingTotal / weeklyAmountPayment;
      weekly = Math.ceil(weeks);
    }while (weekly > 156)
    console.log(You will be paid ${weeklyAmountPayment} for ${weekly} weeks.);
    return { time: weekly, amount: weeklyAmountPayment };
  } else if (choice === 'monthly') {
    let monthlyAmountPayment=0;
    do {
      monthlyAmountPayment += 100;
      let months = remainingTotal / monthlyAmountPayment;
      monthly = Math.ceil(months);
    }while (monthly > 36)
    console.log(You will be paid ${monthlyAmountPayment} for ${monthly} months.);
    return { time: monthly, amount: monthlyAmountPayment };
  } else {
    return null;
  }
};