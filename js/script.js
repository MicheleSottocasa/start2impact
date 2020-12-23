let a = 0;
function incrementa() {
	if(a<99 ){
		document.getElementById('result').innerHTML = ++a;
	} else{
		const element = document.querySelector('#result');
		element.classList.add('animate__animated', 'animate__wobble');
		setTimeout(() => element.classList.remove('animate__animated', 'animate__wobble'), 1500);
		
		let div = document.createElement('div');
		div.className = "error animate__animated animate__fadeOutUp animate__delay-4s";
  		div.innerHTML = "<strong>ERRORE</strong> Hai raggiunto il valore massimo";
  		document.body.append(div);
  		setTimeout(() => div.remove(), 4550);
		
		
	}
}
function decrementa() {
	if(a>0){
	document.getElementById('result').innerHTML = --a;
	} else{
		const element = document.querySelector('#result');
		element.classList.add('animate__animated', 'animate__wobble');
		setTimeout(() => element.classList.remove('animate__animated', 'animate__wobble'), 1500);
		
		let div = document.createElement('div');
		div.className = "error animate__animated animate__fadeOutUp animate__delay-4s";
  		div.innerHTML = "<strong>ERRORE</strong> Hai raggiunto il valore minimo";
		document.body.append(div);
  		setTimeout(() => div.remove(), 4550);
	}
}
/*

  */