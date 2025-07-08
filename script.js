var usuarios = 
[
	{id:1, nombre: "Javi",pass: "acb", calif: 9},
	{id:2, nombre: "leopoldo",pass: "1234", calif: 8},
	{id:3, nombre: "mayrim",pass: "contraseña", calif: 3},
	{id:4, nombre: "carlos",pass: "Iguna",calif: 5},
	{id:5, nombre: "Ernesto",pass: "Pollo",calif: 10},
]

var V = false;
var acumulado = 0;
function Aceptar() 
{
	var user = document.getElementsByTagName("user").value;
	var pass = document.getElementsByTagName("pass").value;

	usuarios.forEach((usuario)=>{
		if(user == usuario.nombre && pass == usuario.pass)

	{
		window.location ="Cuenta.html";
		V =true;
	}
})
	
	if(!V)
	{
		alert("Usuario o contraseña incorrectos");
	}

}

function LlenarTabla()
{
	var tabla = document.getElementById("tabla");
	tabla.innerHTML = "";
	for(let i = 0; i <usuarios.length; i++)
	{
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var td2 = document.createElement("td");
		var td3 = document.createElement("td3");

		if(i % 2 == 0)
		{
			tr.className = "par"
		}
		else
		{
			tr.className = "non"
		}

		tr.addEventListener("click",()=> Total(usuarios[i].calif))
		td3.addEventListener("click",()=> Quitar())
		td2.addEventListener("click",()=>Editar(i))
		td.innerHTML = usuarios[i].nombre;
		td2.innerHTML = usuarios[i].calif;
		td3.innerHTML = "Eliminar usuario";


		tr.appendChild(td);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tabla.appendChild(tr);
	}
}

function Total(T)
{
	var tot = document.getElementById("Total");
	acumulado += T;
	tot.innerHTML = "Total: " + acumulado;
}

function add()
{
	var uno = prompt("Nuevo nombre");
	var dos = prompt("Nueva contraseña");
	var tres = prompt("Su calificacion");
	var di = usuarios.length+1;
	usuarios.push({id:1, nombre: uno,pass: dos, calif: tres})	
	LlenarTabla()
}

function Del() 
{
	usuarios.pop();
	LlenarTabla();
}
function Quitar(indice) 
{
	usuarios.splice(indice, 1);
	LlenarTabla();
}
function Editar(M) 
{
	
	var uno = prompt("Nuevo nombre");
	var dos = prompt("Nueva contraseña");
	var tres = prompt("Su calificacion");
	var di = usuarios.length+1;

	usuarios.splice(M,1, {id:1, nombre: uno,pass: dos, calif: tres})
	LlenarTabla()

}
	
	
	

