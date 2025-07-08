function Captura()
{
	var titulo = document.getElementById("bie")
	var variables = window.location.search;
	var urlParams = new URLSearchParams(variables);
	var N = urlParams.get("nombre")
	var B = urlParams.get("B")
	if(B==1)
	{
		console.log(N + B)
	}
	else
	{
		alert("No tienes acceso")
		window.location ="index.html"
	}
	console.log(N+B)

}