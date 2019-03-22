var submit = document.getElementsByClassName('submit-js')[0]



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