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
				preco: food.children[4].innerHTML
			  }
}

function selectDrink(drink) {
	justSelected(document.querySelector('.drink .selected'));
	drink.classList.add('selected');
	orderItems.drink = {
				 drink: drink.children[1].innerHTML,
				 preco: drink.children[4].innerHTML
			  }
}

function selectDessert(dessert) {
	justSelected(document.querySelector('.dessert .selected'));
	dessert.classList.add('selected');
	orderItems.dessert = {
				 dessert: dessert.children[1].innerHTML,
				 preco: dessert.children[4].innerHTML
	}
	console.log(orderItems);
}




/**************************************************************
 This function tests if an option has not been selected before
**************************************************************/


function justSelected(selected) {
	if(selected && selected.className.indexOf('.selected')) {
		selected.classList.remove('selected');
	}
}