let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");

let operation = "";

for (let i = 0; i < buttons.length; i++) {
	let button = buttons[i];

	button.addEventListener("click", function () {
		switch (button.classList.contains("action")) {
			case true:
				if (button.classList.contains("opratore")) {
					concatOperation(button);
				} else {
					callAction(button);
				}
				break;
			case false:
					concatOperation(button);
				break;
		}
	});
}

function concatOperation(button) {
	if (button.classList.contains("opratore")) {
		if (!operation) {
			return;
		}
	}
	
	operation += button.dataset.value;
	display.innerHTML = operation;
}

function callAction (button) {
	switch (button.dataset.value) {
		case "calculate":
			operation = eval(operation).toString();
			display.innerHTML = operation;
			break;
		case "backspace":
			operation = operation.slice(0, -1);
			display.innerHTML = operation;
			break;
		case "clear":
			operation = "";
			display.innerHTML = "";
			break;
	}
}



// let display= document.getElementById("display")
// let btn= document.getElementsByClassName('btn')

// let opration= "";

// for(let i= 0; i< btn.length;i++){
//    // console.log(btn[i].classList.contains("action"))
//     let button= btn[i]
//     console.log('prince')
//     button.addEventListener("click", function(){ 
 
//         switch (btn[i].classList.contains('action')) {
//             case true:
//                 if(button.classList.contains('opratore')){
//                     concatOpration(button.textContent)
//                 }else{
//                     callAction(button.textContent)
//                 }
//                 break;
//             case false:
//                 concatOpration(button)
//             default:
//                 console.log(btn[i].classList.contains('action'))
//                 break;
//         }

//     })
// }

// function concatOpration(button){
//   if(button.classList.contains("opratore")){
//     if(!opration){
//         console.log(opration)
//         return;
//     }
//     console.log(button.dataset.action)
//     opration = opration + button.dataset.action;
//     display.innerHTML = operation;
//   }
// }
// function callAction (button) {
// 	switch (button.dataset.value) {
// 		case "calculate":
// 			operation = eval(operation).toString();
// 			display.innerHTML = operation;
// 			break;
// 		case "backspace":
// 			operation = operation.slice(0, -1);
// 			display.innerHTML = operation;
// 			break;
// 		case "clear":
// 			operation = "";
// 			display.innerHTML = "";
// 			break;
// 	}
// }
