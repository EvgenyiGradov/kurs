var budget = prompt("Ваш бюджет на месяц?");
console.log(budget);

var NameShop = prompt("Название Вашего магазина?");
console.log(NameShop);

mainList = {
	budget: "Бюджет",
	ShopName: "Имя магазина",
	ShopGoods: [],
	employers: {},
	open: false
};

var FirstQuestion = prompt("Какой товар будем покупать?");
console.log(FirstQuestion);
var SecondQuestion = prompt("Какой товар будем покупать?");
console.log(SecondQuestion);
var ThirdQuestion = prompt("Какой товар будем покупать?");
console.log(ThirdQuestion);
var ShopGoods = [FirstQuestion, SecondQuestion, ThirdQuestion];
console.log(ShopGoods);

var BudgetDay = budget/30;
alert("Бюджет на 1 день " + BudgetDay);


