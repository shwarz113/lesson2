//первое задание
week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
//первый пункт
console.log(week);
document.write(week + '<br>');
//второй пункт
for (let i = 0; i < week.length; ++i) {
	console.log(week[i]);
	document.writeln(week[i] + '<br>');

}
//третий пункт
for (let i = 0; i < week.length; ++i) {
	console.log(week[i]);
	if (i < week.length-2) {
		document.writeln(week[i] + '<br>');
	} else {
		document.writeln(week[i].bold() + '<br>');
	}
}

//четвертый пункт
var now = new Date();
day = now.getDay();
console.log(day);
for (let i = 0; i < week.length; ++i) {
	console.log(week[i]);
	if (i < week.length-2) {
		if (i == day-1) {
			document.writeln(week[i].italics() + '<br>');
		} else   {
			document.writeln(week[i] + '<br>');
		}
	} else {
		document.writeln(week[i].bold() + '<br>');
	}
}
//второе задание
arr = ['465348', '234293492', '7987345', '386654', '152436', '3001874', '873031'];
for (let i = 0; i < arr.length; ++i) {
	if (arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7'){
		console.log(arr[i]);
	}
}