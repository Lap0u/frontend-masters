function UserOldFashioned (name, score) {
  this.name = name
  this.score = score
}

UserOldFashioned.prototype.increment = function () { this.score++ }
UserOldFashioned.prototype.console = function () { console.log(`I'm ${this.name}, my score is ${this.score}`) }

const user1 = new UserOldFashioned('Will', 5)
user1.console()
user1.increment()
user1.console()
console.log(user1.prototype)
console.log(user1.__proto__)
console.log(UserOldFashioned.prototype)
console.log(UserOldFashioned.__proto__)
console.log('\n#############\n')
class UserAsClass {
  constructor(name, score) {
    this.name = name
    this.score = score
  }
  increment () { this.score++ }
  console () { console.log(`I'm ${this.name}, my score is ${this.score}`) }
}

const user2 = new UserAsClass('Paul', 7)
user2.console()
user2.increment()
user2.console()
console.log(user2.prototype)
console.log(user2.__proto__)
console.log(UserAsClass.prototype)
console.log(UserAsClass.__proto__)
