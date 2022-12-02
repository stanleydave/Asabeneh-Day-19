// level 1
let arr = [2, 3, 4, 5, 6];
function closure() {
  let sum = 0;
  function add() {
    for (let i = 0; i < arr.length; i++) {
      sum++;
    }
    return sum;
  }
  return add;
}
const close = closure();
console.log(close());

// level 2
function closure2() {
  let sum = 0;
  let pow = [];
  function add() {
    for (let i = 0; i < arr.length; i++) {
      sum++;
    }
    return sum;
  }
  function minus() {
    for (let i = 0; i < arr.length; i++) {
      sum--;
    }
    return sum;
  }
  function power() {
    for (let i = 0; i < arr.length; i++) {
      pow.push(arr[i] * arr[i]);
    }
    return pow;
  }
  return {
    sum: add(),
    minus: minus(),
    pow: power(),
  };
}
const close2 = closure2();
console.log(close2.sum);
console.log(close2.minus);
console.log(close2.pow);

// level 3
class PersonAccount {
  constructor(firstname, lastname, incomes, expenses) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = incomes;
    this.expenses = expenses;
  }
  getFullName() {
    let fullName = this.firstname + " " + this.lastname;
    return fullName;
  }
  get getIncomes() {
    return this.incomes;
  }
  get getExpenses() {
    return this.expenses;
  }
  set setIncomes(incomes) {
    this.incomes.push(incomes);
  }
  set setExpenses(expenses) {
    this.expenses.push(expenses);
  }
  totalIncome() {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      arr.push(Object.values(this.incomes[i]));
    }

    for (let i = 0; i < Object.keys(arr).length; i++) {
      arr[i] = parseInt(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  totalExpenses() {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      arr.push(Object.values(this.expenses[i]));
    }

    for (let i = 0; i < Object.keys(arr).length; i++) {
      arr[i] = parseInt(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  getInfo() {
    let info = `${this.fullName} has an income of ${this.incomes} and expenses of ${this.expenses}`;
  }
}
let qiyamat = new PersonAccount(
  "qiyamat",
  "Al-siddiq",
  [{ a: 2500 }, { b: 5000 }],
  [{ a: 300 }, { b: 800 }]
);
qiyamat.setIncomes = { c: 2700 };
console.log(qiyamat.totalExpenses());