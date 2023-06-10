const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
  
  let totals=[]
  let tips = []
  
  for(let totalBill = 0; totalBill <= bills.length; totalBill++){
     tips.push( calcTip(bills[totalBill]))
     console.log(tips)
     totals.push(tips[totalBill] + bills[totalBill])
     console.log(totals)
  }
  
  const calcAverage = (arr) => {
      let sum = 0;
      for(i=0; i<arr.length; i++){
          (sum += arr[i])
          console.log(sum, 'sum')
      }
      return sum/arr.length
  }
  
  const avg = calcAverage(totals)

  console.log(avg)