/*** JAVASCRIPT ***
******************/


/*****************
 Global Variables
*****************/

var orderItems = new Object();



/*****************
    Functions
*****************/


function selectFood(food) {
	justSelected(document.querySelector('.food .selected'));
	food.classList.add('selected');
	orderItems.food = {
				rango: food.children[1].innerHTML,
				price: food.children[4].innerHTML
			  }
}

function selectDrink(drink) {
	justSelected(document.querySelector('.drink .selected'));
	drink.classList.add('selected');
	orderItems.drink = {
				drink: drink.children[1].innerHTML,
				price: drink.children[4].innerHTML
			   }
}

function selectDessert(dessert) {
	justSelected(document.querySelector('.dessert .selected'));
	dessert.classList.add('selected');
	orderItems.dessert = {
				dessert: dessert.children[1].innerHTML,
				price: dessert.children[4].innerHTML
			     }
}




/**************************************************************
 This function tests if an option has not been selected before
**************************************************************/


function justSelected(selected) {
	if(selected && selected.className.indexOf('.selected')) {
		selected.classList.remove('selected');
	}
}



/******************************************************************
 This function verifies if all the options have just been selected
                and ability the order buttom
******************************************************************/

const timer = setInterval(() => {
	      if(Object.keys(orderItems).length === 3) {
		const button = document.querySelector('.orderBtn');
		button.children[0].innerHTML = "Fechar pedido";
		button.children[1].innerHTML = "";
		button.disabled = false;
		button.classList.add('complete');
		clearInterval(timer);
	      }
}, 20);






/******************************************************************
		THIS FUNCTION CONFIRMS THE ORDER
******************************************************************/

function checkout() {
	const confirm_screen = document.querySelector('.order-confirmation-screen');
	const app_container = document.querySelector('.app-container');
	app_container.style.backdropFilter = "darkness(10)";
	confirm_screen.style.display = "flex";
}










