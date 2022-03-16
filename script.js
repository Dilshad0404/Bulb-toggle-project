var bulb = document.querySelector("#bulb-off");

var button1 = document.querySelector("#btn-on");

var button2 = document.querySelector('#btn-off');

button1.addEventListener('click', function onTheBulb(){

    bulb.src="bulb-on.jpg"
    button1.style.fontWeight="bold"
})

button2.addEventListener('click', function offTheBulb (){
    bulb.src="bulb-off.jpg"
    button2.style.fontWeight="bold"
})














