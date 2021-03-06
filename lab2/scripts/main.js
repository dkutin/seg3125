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
 * 
 * @param {*} slct1 
 * @param {*} slct2 
 */
function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
	
    s2.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, selectOptions(s1));

	for (option in optionArray) {

		var productName = optionArray[option].name;
		var productPrice = optionArray[option].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.id = productName
		s2.appendChild(checkbox);

		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.value = productName;
		label.appendChild(document.createTextNode(` ${productName} - $${productPrice.toFixed(2)}`));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
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
	total.innerHTML = `<p class='total--text'>Total</p>`;
	total.innerHTML += `<p class='total--amount'>$${getTotalPrice(chosenProducts)}</p>`;

	c.appendChild(total);
}

/**
 * 
 * @param {*} select 
 */
function selectOptions(select) {
	var result = [];
	var options = select && select.options;
	var opt;
  
	for (var i=0, iLen=options.length; i<iLen; i++) {
	  opt = options[i];
  
	  if (opt.selected) {
		result.push(opt.value || opt.text);
	  }
	}
	return result;
}

window.onload = () => {
	let tabcontent = document.getElementsByClassName("tabcontent");
	let tablinks = document.getElementsByClassName("tablinks");

	tabcontent[0].style.display = 'block';
	tablinks[0].className += ' active';

	populateListProductChoices('dietSelect', 'displayProduct');
}
