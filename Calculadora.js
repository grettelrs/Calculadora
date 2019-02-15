
//mostrar los números en el div.
let screen="";
let signtype="";
let num1=0;
let num2=0;

function imp(n){
	screen+=n;
	document.getElementById("answer").innerHTML=screen;
}

//limpiar números de la pantalla cuando presiono signos y guardar valor.
function limpiar(p){
	signtype=p;
	//cambio valor texto a valor número.
	num1=Number(screen);
	document.getElementById("answer").innerHTML=num1;
	screen="";
	
}


function res(){
	num2=Number(screen);
	document.getElementById("answer").innerHTML=num2;
	screen="";
	
	let claseoperation= new operation(num1,num2);
	console.log(signtype);
//botón igual presionado
	switch(signtype){
		case "+":
		claseoperation.suma().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		case "-":
			claseoperation.restar().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		case "*":
			claseoperation.multiplicar().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		case "/":
			claseoperation.dividir().then(function(response){
			document.getElementById("answer").innerHTML=response;
		},function(error){
			document.getElementById("answer").innerHTML="¡Algo salió mal!";
		});
		break;
		default:
		console.log("default");
		break;
	} 

}
class operation{

	constructor(num1,num2) //las variables van en el paréntesis 
	{
		this.number1=num1; //igualar el numero que se pide a la variable que lee la clase.
		this.number2=num2;

	}

	suma(){
		
		//return this.number1+this.number2;
		let objetouso=this;
		return new Promise(function(resolve,reject){
			try{
				resolve(objetouso.number1+objetouso.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}

	restar()
	{
		//return this.number1-this.number2;
		let objetouso=this;
		return new Promise(function(resolve,reject){
			try{
				resolve(objetouso.number1-objetouso.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	multiplicar()
	{
		//return this.number1*this.number2;
		let objetouso=this;
		return new Promise(function(resolve,reject){
			try{
				resolve(objetouso.number1*objetouso.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	dividir()
	{
		//return this.number1/this.number2;
		let objetouso=this;
		return new Promise(function(resolve,reject){
			try{
				resolve(objetouso.number1/objetouso.number2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
}