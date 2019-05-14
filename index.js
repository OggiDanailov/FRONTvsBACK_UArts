var input = document.getElementById("input-example")
var p = document.getElementById("p-example")
var div = document.getElementById("div-example")
var h3 = document.getElementById("h3-example")

var pDestination = document.getElementById("p-destination")
var inputDestination = document.getElementById("input-destination")
var divDestination = document.getElementById("div-destination")
var h3Destination = document.getElementById("h3-destination")

input.addEventListener('click', function(){
	inputDestination.style.visibility = 'visible'
})

div.addEventListener("click", function(){
	divDestination.style.visibility = 'visible'
})

p.addEventListener('click', function(){
	pDestination.style.visibility = 'visible'
})

h3.addEventListener('click', function(){
	h3Destination.style.visibility = 'visible'
})


var cssInput = document.getElementById("css-input-example")
var cssDiv = document.getElementById("css-div-example")
var cssP = document.getElementById("css-p-example")
var cssH3 = document.getElementById("css-h3-example")

var inputDestinationCss = document.getElementById("input-destination-css") 
var divDestinationCss = document.getElementById("div-destination-css") 
var pDestinationCss = document.getElementById("p-destination-css") 
var h3DestinationCss = document.getElementById("h3-destination-css") 

cssInput.addEventListener('click', function(){
	console.log('asdfasd')
	inputDestinationCss.style.backgroundColor = 'lightgreen'
})

cssDiv.addEventListener('click', function(){
	divDestinationCss.style.height = '100px'
	divDestinationCss.style.backgroundColor = 'lightgreen'
})

cssP.addEventListener("click", function(){
	pDestinationCss.style.marginLeft = '30px'
	pDestinationCss.style.boxShadow = '4px 4px 4px grey'
})

cssH3.addEventListener('click', function(){
	h3DestinationCss.style.fontSize = '30px'
	h3DestinationCss.style.color = 'red'
})











