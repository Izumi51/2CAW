/*function myFunc(){
	document.write("<h1>Nooovo titulo</h1>");
}

{
	var lugar;
	lugar = document.getElementById("idTest");
	lugar.innerHTML = "iae";
}*/


function funLista()
{
	var doc = document.getElementById("lugar");
	doc.innerHTML = "<h1>Oi Turma!!!</h1>"
	doc.innerHTML =doc.innerHTML +"<ol>Aprenderemos:" // cria lista
	doc.innerHTML =doc.innerHTML +"<li>Variaveis</li>"; // opção 1
	doc.innerHTML =doc.innerHTML +"<li>Tipos de Dados</li> "; // opção 2
	doc.innerHTML =doc.innerHTML + "<li>Entrada e Saida</li>";//opção 3
	doc.innerHTML =doc.innerHTML +"</ol>"; // Finalização da lista
}
