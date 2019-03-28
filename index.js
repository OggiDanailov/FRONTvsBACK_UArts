var submit = document.getElementsByClassName('submit-js')[0]
var listNames = document.getElementsByClassName("list-names")


setInterval(function(){
	if(submit.style.backgroundColor == 'black'){
		submit.style.color = 'black'
		submit.style.backgroundColor = 'red'		
		submit.style.fontSize = "8px"
	} else {
		submit.style.color = 'white'
		submit.style.backgroundColor = 'black'
		submit.style.fontSize = "6px"
	}
}, 2000)

	var i = 0;
setInterval(function(){
	if(i > listNames.length){
		i = 0;
		changeColor(i)		
	}else {
		changeColor(i)
	}
	i += 1;
}, 1000)


function changeColor(i){
	console.log(i)
	if(i == 0){
		listNames[i].style.color = 'red'
	}else if(i > 0 && i < listNames.length){
		listNames[i].style.color = 'red'
		listNames[i-1].style.color = 'black'
	}else if(i == listNames.length){
		listNames[i-1].style.color='black'
	}
}

