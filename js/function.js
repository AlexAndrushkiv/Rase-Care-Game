/**********************************
Условие для аварийной ситуации Car и VsrechniCar
************************************/

function testCollision(obj1, obj2) {

	var xColl = false;
	var yColl = false;


	if (!obj2) {
		return; // сравнивать не с чем
	}

	var obj1x = obj1.offsetLeft - (obj1.offsetWidth - 120); // координата Х центра авто // корректируем на левую верхнюю точку более тесное сопрокосновение
	var obj1width = obj1.offsetWidth - 1;

	var obj2x = obj2.offsetLeft;
	var obj2width = obj2.offsetWidth;

	var obj1y = obj1.offsetTop - (obj1.offsetHeight - 80); // координата Y центра авто // корректируем на левую верхнюю точку более тесное сопрокосновение
	var obj1height = obj1.offsetHeight - 10;

	var obj2y = obj2.offsetTop;
	var obj2height = obj2.offsetHeight;


	if ((obj1x + obj1width >= obj2x) && (obj1x <= obj2x + obj2width)) {
		xColl = true;
	}
	if ((obj1y + obj1height >= obj2y) && (obj1y <= obj2y + obj2height)) {
		yColl = true;
	}

	if (xColl && yColl) {
		return true;
	}
	return false;
}

//=============================================
//  Функции создания стартового поля
//=============================================

function sozdanieStartBlock() {
	startBlock = document.createElement("div");
	startBlock.id = "start-block";

	h1 = document.createElement("h1"); //блок названия игры
	h1.innerText = "RACE CAR";

	startKnopka = document.createElement("button"); //создаем кнопку
	startKnopka.id = "start-knopka"
	// startKnopka.innerText = "PRESS START"; //сменил на готовую кнопку

	startBlock.appendChild(startKnopka); //добавляем кнопку в стартовый блок

	startBlock.appendChild(h1); //добавляем название игры в стартовый блок

	igraPole.appendChild(startBlock); //добавляем стартовый блок в игровое поле

}

function sozdanieTimerBlock() { //функция создания блока таймера игры
	var h2 = document.createElement("h2");
	h2.innerText = "Время поездки : ";

	timerBlock = document.createElement("span"); //в переменную timerBlock добавляем тег span
	timerBlock.id = "timer";
	timerBlock.innerText = "30";

	h2.appendChild(timerBlock); //добавляем в заголовок h2 тег span

	infoBlock.appendChild(h2); //добавляем в инфоблок заголовок с таймером  		       		
}

//=============================================
// Функция создания окна выбора машины
//=============================================

function carChoose() {

	var carBloсk = document.createElement("div")
	carBloсk.id = "car-block";

	var h2 = document.createElement("h2");
	h2.id = "h2";
	h2.innerText = "CHOOSE YOUR CAR";
	carBloсk.appendChild(h2);

	car_1 = document.createElement("div");
	car_1.id = "car_1";
	carBloсk.appendChild(car_1);

	car_2 = document.createElement("div");
	car_2.id = "car_2";
	carBloсk.appendChild(car_2);

	car_3 = document.createElement("div");
	car_3.id = "car_3";
	carBloсk.appendChild(car_3);

	igraPole.appendChild(carBloсk);

	/*********************************
	Функция выбора машинки при клике по ней 
	При выборе машинки => выполнить  функцию переход на игровое поле + таймер + жизни
	*************************************/

	car_1.onclick = function () {
		var car_1 = document.querySelector("#car_1");
		carBloсk.remove();
		sozdanieCar();
		sozdanielifes();
		Car.style.backgroundImage = "url('images/car-1.png')";
		SozdanieVsrechniCar_1();
		setTimeout(function () {
			SozdanieVsrechniCar_2();
		}, 3000)

		setTimeout(function () {
			SozdanieVsrechniCar_3();
		}, 5000)
		sozdanieTimerBlock();
		timerIgra();
	}

	car_2.onclick = function () {
		var car_2 = document.querySelector("#car_2");
		carBloсk.remove();
		sozdanieCar();
		sozdanielifes();
		Car.style.backgroundImage = "url('images/car-2.png')";
		SozdanieVsrechniCar_1();
		setTimeout(function () {
			SozdanieVsrechniCar_2();
		}, 3000)

		setTimeout(function () {
			SozdanieVsrechniCar_3();
		}, 5000)
		sozdanieTimerBlock();
		timerIgra();
	}

	car_3.onclick = function () {
		var car_3 = document.querySelector("#car_3");
		carBloсk.remove();
		sozdanieCar();
		sozdanielifes();
		Car.style.backgroundImage = "url('images/car-3.png')";
		SozdanieVsrechniCar_1();

		setTimeout(function () {
			SozdanieVsrechniCar_2();
		}, 3000)

		setTimeout(function () {
			SozdanieVsrechniCar_3();
		}, 5000)
		sozdanieTimerBlock();
		timerIgra();
	}

	/********************************************
	Внешний эффект при наведении мышки на машинку страница 2
	*********************************************/

	car_1.onmouseover = function () {
		var car_1 = document.querySelector("#car_1");
		car_1.style.border = "5px solid #ff3333";
	}

	car_1.onmouseout = function () {
		var car_1 = document.querySelector("#car_1");
		car_1.style.border = "none";
	}

	car_2.onmouseover = function () {
		var car_2 = document.querySelector("#car_2");
		car_2.style.border = "5px solid #002699";
	}

	car_2.onmouseout = function () {
		var car_2 = document.querySelector("#car_2");
		car_2.style.border = "none";
	}

	car_3.onmouseover = function () {
		var car_3 = document.querySelector("#car_3");
		car_3.style.border = "5px solid #ffad33";
	}

	car_3.onmouseout = function () {
		var car_3 = document.querySelector("#car_3");
		car_3.style.border = "none";
	}
}

/*******************************
  Функция создания игровой машинки на игровом поле и её управление
********************************/

function sozdanieCar() {
	Car = document.createElement("div");
	Car.id = "Car";
	igraPole.appendChild(Car);

}

document.onkeypress = function (event) {
	if (event.keyCode == 97) {
		Car.style.left = Car.offsetLeft - 30 + "px";
	}
	if (event.keyCode == 100) {
		Car.style.left = Car.offsetLeft + 30 + "px";
	}

}

//===============================================
// Функция создания встречных машин на игровом поле
//===============================================

function SozdanieVsrechniCar_1() {

	VsrechniCar_1 = document.createElement("div");
	VsrechniCar_1.id = "VsrechniCar_1"
	igraPole.appendChild(VsrechniCar_1);


	setInterval(function () {
		VsrechniCar_1.style.top = VsrechniCar_1.offsetTop + 2 + "px";

		if (VsrechniCar_1.offsetTop >= 600) {
			VsrechniCar_1.style.top = "-120px";
			VsrechniCar_1.className = "norma";
		}

		proverkaPoziciiCar();
	}, 10)
}

function SozdanieVsrechniCar_2() {

	VsrechniCar_2 = document.createElement("div");
	VsrechniCar_2.id = "VsrechniCar_2"
	igraPole.appendChild(VsrechniCar_2);

	setInterval(function () {
		VsrechniCar_2.style.top = VsrechniCar_2.offsetTop + 1 + "px";

		if (VsrechniCar_2.offsetTop >= 600) {
			VsrechniCar_2.style.top = "-120px";
			VsrechniCar_2.className = "norma";
		}

		proverkaPoziciiCar();
	}, 10)
}

function SozdanieVsrechniCar_3() {

	VsrechniCar_3 = document.createElement("div");
	VsrechniCar_3.id = "VsrechniCar_3"
	igraPole.appendChild(VsrechniCar_3);

	setInterval(function () {
		VsrechniCar_3.style.top = VsrechniCar_3.offsetTop + 2 + "px";

		if (VsrechniCar_3.offsetTop >= 600) {
			VsrechniCar_3.style.top = "-120px";
			VsrechniCar_3.className = "norma";
		}
		proverkaPoziciiCar();
	}, 10)

}


/************************************
Функция соударения машинок => забирать жизнь => если жизнь =0 конецИгра
****************************************/
function proverkaPoziciiCar() {

	var Car = document.querySelector("#Car");
	var VsrechniCar_3 = document.querySelector("#VsrechniCar_3");
	var VsrechniCar_2 = document.querySelector("#VsrechniCar_2");
	var VsrechniCar_1 = document.querySelector("#VsrechniCar_1");

	if (VsrechniCar_3.className != "ojidaet-udaleniya") {

		if (testCollision(Car, VsrechniCar_3)) { //если произошло соударение с 3 й машинкой...		
			colLifes = colLifes - 1;
			udalenieLifesBlock();
			sozdanielifes();
			console.log("Внимание столкновение!!!");
			VsrechniCar_3.className = "ojidaet-udaleniya";
		}
	}

	if (VsrechniCar_2.className != "ojidaet-udaleniya") {

		if (testCollision(Car, VsrechniCar_2)) { //если произошло соударение с 2 й машинкой...
			console.log("Ты умник!!!");
			colLifes = colLifes - 1;
			udalenieLifesBlock();
			sozdanielifes();
			VsrechniCar_2.className = "ojidaet-udaleniya";
		}
	}

	if (VsrechniCar_1.className != "ojidaet-udaleniya") {

		if (testCollision(Car, VsrechniCar_1)) { //если произошло соударение с 1 й машинкой...
			console.log("Куда ти прёшь???");
			colLifes = colLifes - 1;
			udalenieLifesBlock();
			sozdanielifes();
			VsrechniCar_1.className = "ojidaet-udaleniya";
		}
	}

	if (colLifes == 0) { // если жизней =0 выполнить...

		udalenieTimerBlock();
		udalenieCar();
		sozdanieKonecIgra();
		udaleniePobedaBlock();

	}
}

function sozdanielifes() { //функц. создание блока жизней
	lifes = document.createElement("div");
	lifes.id = "lifes";

	var tecLifes = 0; //переменная в которой храним текущее кол-во жизней

	while (tecLifes < colLifes) { //цикл (пока текущ. кол-во жизней < кол-ва которое мы хотим видеть )		
		var lifesZhizni = document.createElement("span");
		lifes.appendChild(lifesZhizni);
		tecLifes = ++tecLifes;
	}
	igraPole.appendChild(lifes); //помещаем жизни в блок игры
}

/**************************
Функции конца игры
******************************/

function sozdaniePobedaBlock() { //функция победа блок

	var div = document.createElement("div");
	div.id = "pobeda";
	var h2 = document.createElement("h2");
	h2.innerText = "YOU WIN!";

	var restartKnopka = document.createElement("button"); //создаем кнопку рестарт игра
	restartKnopka.id = "restart-knopka";

	div.appendChild(h2);

	div.appendChild(restartKnopka);

	igraPole.appendChild(div);

	udalenieCar();

	restartKnopka.onclick = function () { //при клике по кнопке выполниь...
		udalenieTimerBlock();
		udalenieLifesBlock();
		udalenieStartBlock();
		udaleniePobedaBlock();
		start();
	}
}


function sozdanieKonecIgra() { //функц. проиграл
	var div = document.createElement("div");
	div.id = "koniec-igra";
	var h2 = document.createElement("h2");
	h2.innerText = "GAME OVER";

	div.appendChild(h2);

	igraPole.appendChild(div);

	timerBlock.innerText = "0";
}

/****************************************
Функции которые отвечают за удаление блоков
*******************************************/

//Удаляем стартовый блок
function udalenieStartBlock() { //функц. удаления стартового блока
	startBlock.remove(); //удалить выбраный блок
}

function udalenieTimerBlock() { //функц. удаления 
	timerBlock.remove(); //удалить выбраный блок
}

function udalenieLifesBlock() { //функц. удаления блока жизней
	lifes.remove(); //удалить выбраный блок
}

function udaleniePobedaBlock() { //функц. удаления победы
	pobeda.remove(); //удалить выбраный блок
}

function udalenieKonecIgra() { //функц. удаления победы
	koniecIgra.remove(); //удалить выбраный блок
}

function udalenieCar() { //функц. удаления блока жизней
	Car.remove();
	VsrechniCar_1.remove();
	VsrechniCar_2.remove();
	VsrechniCar_3.remove();

}