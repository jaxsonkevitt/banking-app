
window.addEventListener('load', init);

let transactions =[];

[

{

date: (new Date()).toDateString(),

desc: "Added 10000",

type: "credit",

amount: 10000

},

{

date: (new Date()).toDateString(),

desc: "Added 10000",

type: "credit",

amount: 10000

},

{

date: (new Date()).toDateString(),

desc: "Added 10000",

type: "credit",

amount: 10000

},

{

date: (new Date()).toDateString(),

desc: "Added 10000",

type: "credit",

amount: 10000

},

{

date: (new Date()).toDateString(),

desc: "Added 10000",

type: "credit",

amount: 10000

},

{

date: (new Date()).toDateString(),

desc: "debit 5000",

type: "debit",

amount: 5000,

},

{

date: (new Date()).toDateString(),

desc: "debit 5000",

type: "debit",

amount: 5000,

},

{

date: (new Date()).toDateString(),

desc: "debit 5000",

type: "debit",

amount: 5000,

},

{

date: (new Date()).toDateString(),

desc: "debit 5000",

type: "debit",

amount: 5000,

},

{

date: (new Date()).toDateString(),

desc: "debit 5000",

type: "debit",

amount: 5000,

},


]; 

window.onload = () => {
    "Use Strict" ;
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4 && ajax.status === 200) {
            transactions = JSON.parse(ajax.responseText);
            showTransactionsAndBalance(transactions);
            calculateBalance(transactions);
        }
    };
 ajax.open("GET", "http://localhost:3000/transactions", true);
 ajax.send();
};

function init() {

showTransactionsAndBalance();

bindEvents();

}

function calculateBalance() {

let balance = 0;

transactions.forEach(transaction => {

if (transaction.type == "credit") {

balance += transaction.amount;

}

else {

balance -= transaction.amount;

}

})

return balance;

}

function bindEvents() {

document.getElementById("withdraw").addEventListener('click', withdraw);

document.getElementById("deposit").addEventListener('click', deposit);

}

function showTransactionsAndBalance() {

let tbody = document.querySelector('tbody');

tbody.innerHTML = "";

transactions.forEach(transaction => {

let tr = document.createElement('tr');

for (let key in transaction) {

let td = document.createElement('td');

td.innerText = transaction[key];

tr.appendChild(td);

}

tbody.appendChild(tr)

})

document.querySelector("#balance").innerText = calculateBalance();

}

class Transaction {

constructor(date, desc, type, amount) {

this.date = date;

this.desc = desc;

this.type = type;

this.amount = amount;

}

}

function withdraw() {

let amount = prompt("Enter the amount you want to withdraw");

if (amount) {


if (isNaN(Number(amount))) {

alert("Please enter amount in numbers! Click again to withdraw");

}

else {

if (calculateBalance() < Number(amount)) {

alert("Please Enter the amount less than balance!! Click again to withdraw");

}

else {

let transaction = new Transaction(new Date().toDateString(), `Debit ${amount}`, "debit", Number(amount))

transactions.push(transaction);

showTransactionsAndBalance();

}

}

}

}

function deposit() {

let amount = prompt("Enter the amount you want to deposit");

if (amount) {

if (isNaN(Number(amount))) {

alert("Please enter amount in numbers! Click again to deposit");

}

else {

let transaction = new Transaction(new Date().toDateString(), `Credit ${amount}`, "credit", Number(amount))

transactions.push(transaction);

showTransactionsAndBalance();

}

}

}