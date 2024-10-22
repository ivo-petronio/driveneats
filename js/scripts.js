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
	console.log(food.children);
	orderItems.food = {
				rango: food.children[1].innerHTML,
				preco: food.children[4].innerHTML
			  }
}

function selectDrink(drink) {
	justSelected(document.querySelector('.drink .selected'));
	drink.classList.add('selected');
	const temp = document.querySelector('.drink .selected');
	console.log(temp.children[1].innerHTML);
}

function selectDessert(dessert) {
	justSelected(document.querySelector('.dessert .selected'));
	dessert.classList.add('selected');
}




/**************************************************************
 This function tests if an option has not been selected before
**************************************************************/


function justSelected(selected) {
	if(selected && selected.className.indexOf('.selected')) {
		selected.classList.remove('selected');
	}
}