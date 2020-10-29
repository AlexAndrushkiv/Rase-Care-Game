

function start() {  //функция старта инры
	
	sozdanieStartBlock();

	startKnopka.onclick = function() {  //клик по кнопке старт
			carChoose();
			udalenieStartBlock();
	}

}

start();


function timerIgra() { //функция обратного отсчета времени игры
	let chasy = setInterval(function() {	//таймер задержки старта игры
			timerBlock.innerText = timerBlock.innerText - 1;   //обратный отсчет времени

			if(timerBlock.innerText == 0) {	//если счетчик =0				
			   clearInterval(chasy);	// остановить таймер
			      sozdaniePobedaBlock();     
	    	}	
	}, 1000);
} 
































