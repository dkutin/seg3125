/**
 * Instatiate global for keeping track of total cart.
 */
var total_price = 0;

/**
 * This function is called when any of the tab is clicked.
 * It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp.
 * @param {*} evt 
 * @param {*} tabName 
 */
function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

/**
 * generate a checkbox list from a list of products.
 * it makes each product name as the label for the checkboxes.
 */
function populateListProductChoices() {
	let dietaryPreferences = document.querySelectorAll('.displayProduct > input[type="checkbox"]:checked');
	let display = document.getElementById('displayProduct');
	let restrictions = [];

	for (let preference of dietaryPreferences) {
		restrictions.push(preference.value);
	}
	
	display.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, restrictions);

	for (option in optionArray) {

		var productName = optionArray[option].name;
		var productPrice = optionArray[option].price;
		var isOrganic = optionArray[option].organic;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.id = productName
		display.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.value = productName;
		label.appendChild(document.createTextNode(` ${productName} - $${productPrice.toFixed(2)} ${isOrganic ? '(organic)' : ''}`));
		display.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		display.appendChild(document.createElement("br"));
	}
}

/**
 * This function is called when the "Add selected items to cart" button in clicked.
 * The purpose is to build the HTML to be displayed (a Paragraph).
 * We build a paragraph to contain the list of selected items, and the total price.
 */
function selectedItems(){

	let ele = document.getElementsByName("product");
	let chosenProducts = [];
	let c = document.getElementById('displayCart');

	c.innerHTML = "";


	let heading = document.createElement('h3');
	heading.innerHTML = 'Products';

	c.appendChild(heading);
	
	// build list of selected item
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			var para = document.createElement("div");
			para.className = 'cart--item';

			para.innerHTML += `<span class="product--name">${ele[i].value}</span>`;
			para.innerHTML += `<span class="product--price">$${getTotalPrice(ele[i].value)}</span>`;

			chosenProducts.push(ele[i].value);
			c.appendChild(para);
		}
	}

	c.appendChild(document.createElement('hr'));

	let total = document.createElement('div');
	total.className = 'total';
	total.innerHTML = `<p class='total--text'>Product Sub-Total</p>`;
	total.innerHTML += `<p id='products--total' class='total--amount'>$${getTotalPrice(chosenProducts)}</p>`;

	total_price = getTotalPrice(chosenProducts);

	c.appendChild(total);

	selectedRecipes();
}

/**
 * 
 * @param {*} select 
 */
function selectOptions(select) {
	var result = [];
	var options = select && select.options;
	var opt;
  
	for (var i=0, iLen=select.length; i<iLen; i++) {
	  opt = options[i];
  
	  if (opt.selected) {
		result.push(opt.value || opt.text);
	  }
	}
	return result;
}

/**
 * Handle revealing the accordion at the next or previous step.
 * 
 * @param {*} step
 */
function next(step, final = false) {
	// Expand the next accordion.
	let accordion = document.getElementById(`step-${step}`);

	// Check if the recipes option is selected.
	if (!document.getElementById('step-2.1').classList.contains('hidden') && (step == 3)) {
		accordion = document.getElementById(`step-2.1`);
	}

	if (final) {
		accordion = document.getElementById(`step-3`);
	}

	if (step == 3) {
		getFinalTotalPrice();
	}

	accordion.classList.remove('disabled');
	accordion.classList.add('active');
	accordion.nextElementSibling.classList.remove('hidden');

	resetAccordions(accordion);
}

/**
 * Calculate the total price of items, with received parameter being a list of products.
 *
 * @param {*} chosenProducts 
 * @returns {number}
 */
 function getTotalPrice(chosenProducts, product=true) {
	let type = product ? products : recipes;

	var totalPrice = 0;
	for (let i=0; i<type.length; i+=1) {
		if (chosenProducts.indexOf(type[i].name) > -1){
			totalPrice += type[i].price;
		}
	}
	return totalPrice.toFixed(2);
}

function getFinalTotalPrice() {

	let total = document.getElementById('total');

	total.className = 'total'
	total.innerHTML = `<h3 class="total--text">Total</h3>`;
	total.innerHTML += `<h3 class="total--amount">$${parseFloat(total_price).toFixed(2)}</h3>`;
}

window.addEventListener('load', (event) => {
	populateListProductChoices();
});