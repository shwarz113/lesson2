/*let num = 50;

if (num < 49 ) {
	console.log("Неверно");
} else if (num > 100) {
	console.log("Неверно");
} else {
	console.log('Верно')
}

(num == 50) ? console.log("Верно!") : console.log("Неверно");

switch (num) {
	case 49:
		console.log("Мало");
		break;
	case 100:
		console.log("Много!");
		break;	
	case 80:
		console.log("Все еще много!");
		break;
	case 50:
		console.log("В точку!");
		break;
	default:
		console.log("Не в этот раз");
		break;
}

while (num < 55) {
	console.log(num);
	num++;
}

for (let i = 0; i < 8; i++) {
	console.log(i);
}*/

var budget = prompt("Ваш бюджет на месяц?", 10000);
var shopName = prompt("Название вашего магазина?", 'Foxbone');
let time = 19;

mainList = {
	Budget: budget,
	name: shopName,
	shopGoods: [],
	employers: {},
	open: true
}

for (let i = 0; i < 5; ) {

	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert("Введите правильное значение!");
	}
}

//Второй вариант
/*
let i = 0;
while (i < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		++i;
	} else {
		alert("Введите правильное значение!");
	}
}
*/

//Третий вариант
/*
let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		++i;
	} else {
		alert("Введите правильное значение!");
	}
}
while (i < 5) {
}
*/
if (time < 0) {
	console.log('Такого просто не может быть');
} else if (time > 8 && time < 22) {
	console.log('Время работать!');
} else if (time < 24) {
	console.log('Уже слишком поздно');
} else {
	console.log('В сутках только 24 часа!');
}

alert(mainList.Budget/30);

console.log(mainList);