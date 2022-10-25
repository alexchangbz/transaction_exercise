const slips = {
  slip_23: {
    transactions: [123, 456],
    shop: 1,
  },
  slip_42: {
    transactions: [789],
    shop: 2,
  },
};

const transactions = [
  {
    id: 123,
    amount: 10.01,
    payout: false,
  },
  {
    id: 456,
    amount: 5.01,
    payout: true,
  },
  {
    id: 789,
    amount: 20.1,
    payout: false,
  },
];

const shops = [
  [1, 'Zalando.de'],
  [2, 'Amazon.com'],
];

// Your task: Use the three data sources above and create the following result.
const generateInvoice = (dataTrans, dataSlip, dataShop) => {
  let result = {}
  const slipKey = Object.keys(dataSlip)
  slipKey.map((slip) => {
    dataShop.map((shop) => {
      if(shop[0] === dataSlip[slip].shop) {
        let amount = 0
        let num_trans = 0
        let slipKey = Number(slip.slice(-2))
    
        const slipID = dataSlip[slip].transactions
        num_trans = slipID.length

        dataTrans.map((tran) => {
          slipID.map((slip) => {
            if (tran.id === slip) {
              if(tran.payout) {
                amount = amount - tran.amount
              } else {
                amount = amount + tran.amount
              }
            }
          })
        })
        // console.log(amount, num_trans, shop[1], slipKey)
        result[slipKey] = { "number_transactions": num_trans, "shop": shop[1], "amount" : amount }
      }
    })
  })
  return result
}
// Bonus: Try to write as few lines as possible for your solution

const result = {
  23: {
    number_transactions: 2, // no of transactions per slip
    shop: 'Zalando.de', // shop title
    total_amount: 5, // total amount of transactions (a payout must be subtracted instead of added!)
  },
  42: {
    number_transactions: 1,
    shop: 'Amazon.com',
    total_amount: 20.1,
  },
};

// console.log(result);
const generated_result = generateInvoice(transactions, slips, shops)
console.log(generated_result)
