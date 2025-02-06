//your code here
let hour = document.querySelector(".hour-hand");
let minute = document.querySelector(".min-hand");
let second = document.querySelector(".second-hand");


let secondDeg = 0; 
setInterval(()=> {
	secondDeg+=6;
	second.style.rotate = `${secondDeg}deg`;
}, 1000)

let minuteDeg = 0;
setInterval(()=>{
	minuteDeg += 6/60;
	minute.style.rotate = `${minuteDeg}deg`;
}, 1000)

let hourDeg = 0;
setInterval(() => {
	hourDeg += 30/3600;
	hour.style.rotate = `${hourDeg}deg`;
}, 1000)