var h1 = document.getElementById("h1-example")
var img = document.getElementById("img-example")
var p = document.getElementById('p-example')
var input = document.getElementById("input-example")

var h1Destination = document.getElementById("h1-destination")
var imgDestination = document.getElementById("img-destination")
var pDestination = document.getElementById("p-destination")
var inputDestination = document.getElementById("input-destination")


h1.addEventListener('click', function(){
	h1Destination.style.visibility = 'visible'
	h1.style.backgroundColor = 'red'
})

img.addEventListener('click', function(){
	imgDestination.style.backgroundImage = "url(" + 'images/barcelona.jpg' + ")"
	imgDestination.style.backgroundSize = "100% 100%"
	imgDestination.style.width= "200px"
	imgDestination.style.height='200px'
	img.style.backgroundColor = 'red'
})

p.addEventListener("click", function(){
	pDestination.style.visibility = 'visible'
	p.style.backgroundColor = 'red'
})

input.addEventListener("click", function(){
	inputDestination.style.visibility = 'visible'
	input.style.backgroundColor = 'red'
})



