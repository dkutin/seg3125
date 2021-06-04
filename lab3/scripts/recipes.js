/**
 * Array of products, each product is an object with different fieldset.
 * A set of ingredients should be added to products.
 */
 const recipes = [
	{
		name: "Chicken fried rice",
        ingredients: [
            'chicken',
            'rice',
            'soy sauce',
            'egg',
            'peas'
        ],
		lactoseFree: true,
		nutFree: true,
		glutenFree: true,
		organic: true,
		price: 9.99
	},
	{
		name: "Caprese sandwiches",
        ingredients: [
            'mozzerella',
            'tomatoes',
            'basil',
            'olive oil',
            'ciabatta'
        ],
		lactoseFree: false,
		nutFree: true,
		glutenFree: false,
		organic: true,
		price: 15.89
	},
	{
		name: "Peanut stirfry",
        ingredients: [
            'bok choy',
            'snow peas',
            'soy sauce',
            'noodles',
            'chicken',
            'peanuts'
        ],
		lactoseFree: true,
		nutFree: false,
		glutenFree: true,
		organic: true,
		price: 17.99
	},
	{
		name: "Summer kale salad",
        ingredients: [
            'kale',
            'goat cheese',
            'cherry tomato',
            'avocado'
        ],
		lactoseFree: false,
		nutFree: true,
		glutenFree: true,
		organic: true,
		price: 15.00
	}
];

/**
 * Reveals the recipe tab.
 */
function handleRecipeReveal() {
    document.getElementById('step-2.1').classList.toggle('hidden');
    toggleAccordion(document.getElementById('step-2.1'));
    populateRecipeChoices();
}

/**
 * 
 */
function populateRecipeChoices() {
    let dietaryPreferences = document.querySelectorAll('.displayProduct > input[type="checkbox"]:checked');
	let display = document.getElementById('displayRecipes');
	let restrictions = [];

	for (let preference of dietaryPreferences) {
		restrictions.push(preference.value);
	}
	
	display.innerHTML = "";

	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListRecipes(recipes, restrictions);

    for (option in optionArray) {
        var productName = optionArray[option].name
        var ingredients = optionArray[option].ingredients
        var productPrice = optionArray[option].price
        
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
		checkbox.name = "recipe";
		checkbox.value = productName;
		checkbox.id = productName
        display.appendChild(checkbox);

        // Create a label for our box.
        var label = document.createElement('label');
        label.htmlFor = productName;
        label.value = productName;
        label.appendChild(document.createTextNode(` ${productName} - $${productPrice.toFixed(2)}`));
        label.appendChild(document.createElement("br"));
        for (iindex in ingredients) {
            label.appendChild(document.createTextNode(`- ${ingredients[iindex]}`));
            label.appendChild(document.createElement("br"));
        }
        display.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		display.appendChild(document.createElement("br"));
    }
}

/**
 * 
 */
function restrictListRecipes(recipes, restrictions) {
    let product_names = [];

	for (var index in recipes) {
		let product = recipes[index];
		if (restrictions.length == 0) {
            product_names.push({
                name: product.name,
                ingredients: product.ingredients,
                price: product.price
            });
		} else {
			var allowed = true;
			for (let rindex in restrictions) {
				let restriction = restrictions[rindex];
				allowed = allowed && product[restriction];
			}

			if (allowed)
				product_names.push({
                    name: product.name,
                    ingredients: product.ingredients,
                    price: product.price
				});
		}
	}

	return product_names;
}

/**
 * 
 */
function selectedRecipes() {
    let ele = document.getElementsByName('recipe');
    let chosenRecipes = [];
    let c = document.getElementById('displayCart');

 	let heading = document.createElement('h3');
	heading.innerHTML = 'Recipes';

	c.appendChild(heading);

    // build list of selected item
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			var para = document.createElement("div");
			para.className = 'cart--item';

			para.innerHTML += `<span class="product--name">${ele[i].value}</span>`;
			para.innerHTML += `<span class="product--price">$${getTotalPrice(ele[i].value, false)}</span>`;

			chosenRecipes.push(ele[i].value);
			c.appendChild(para);
		}
	}

	c.appendChild(document.createElement('hr'));


	let recipes_price = getTotalPrice(chosenRecipes, false);

	let total = document.createElement('div');
	total.className = 'total';
	total.innerHTML = `<p class='total--text'>Recipes Sub-Total</p>`;
	total.innerHTML += `<p id='recipes--total' class='total--amount'>$${recipes_price}</p>`;

	total_price = parseFloat(total_price) + parseFloat(recipes_price);

	if (parseFloat(recipes_price) <= 0) {
		total.innerHTML = '<p>No recipes selected!</p>';
	}

	c.appendChild(total);
}