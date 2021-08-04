const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");


function setDate()
{
	const now = new Date();
	const seconds = now.getSeconds();
	const secondDegrees = seconds*6 + 90;
	secondHand.style.transform = "rotate("+secondDegrees+"deg)";

	const mins = now.getMinutes();
	const minDegrees = mins*6 + 90;
	minuteHand.style.transform = "rotate("+minDegrees+"deg)";

	const hrs = now.getHours();
	const hrDegrees = (hrs/12)*360 + 90;
	hourHand.style.transform = "rotate("+hrDegrees+"deg)";

	console.log(seconds +" "+mins +" "+hrs);
}

setInterval(setDate, 1000);