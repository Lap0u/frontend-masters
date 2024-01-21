class Account {
  constructor() {
    this.balance = 0
    this.operations = []
  }
  #newOperation (amount) {
    this.balance += amount
    const newOperation = { date: new Date(), amount: amount, balance: this.balance }
    this.operations.push(newOperation)
  }
  deposit (amount) {
    if (amount <= 0) {
      console.log('You must deposit a positive amount of money, balance unchanged')
      return this.balance
    }
    this.#newOperation(amount)
    console.log(`New deposit successfully completed, current balance: ${this.balance}`)
    return this.balance
  }
  withdraw (amount) {
    if (amount <= 0) {
      console.log('You must withdraw a positive amount of money, balance unchanged')
      return this.balance
    }
    this.#newOperation(amount * -1)
    console.log(`New withdraw successfully completed, current balance: ${this.balance}`)
    return this.balance
  }
  printStatement () {
    console.log('Date \t\t Amount \t Balance')
    for (let operation of this.operations) {
      console.log(`${operation.date.toLocaleDateString()} \t ${operation.amount} \t\t ${operation.balance}`)
    }
  }
}

const myBankAccout = new Account()

myBankAccout.deposit(500)
myBankAccout.withdraw(200)
myBankAccout.printStatement()
myBankAccout.deposit(400)
myBankAccout.deposit(250)
myBankAccout.withdraw(1000)
myBankAccout.printStatement()
