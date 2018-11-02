"use strict";
let main = document.querySelector("main");
function writeResults(string) {
	let btn = document.createElement("button");
	let content = document.createTextNode(string);
	btn.appendChild(content);
	main.appendChild(btn);
}

for (var i = 1; i <= 100; i++) {
	if ( ((i%3)===0) && ((i%5)===0) ) {
		writeResults("FizzBuzz");
	} else if ((i%3)===0) {
		writeResults("Fizz");
	} else if ((i%5)===0) {
		writeResults("Buzz");
	} else {
		writeResults(i);
	}
}
	