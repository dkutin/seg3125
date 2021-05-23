/**
 * Array of products, each product is an object with different fieldset.
 * A set of ingredients should be added to products.
 */
const products = [
	{
		name: "tomato",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 0.49
	},
	{
		name: "onion",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 0.49
	},
	{
		name: "brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "baguette",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 2.00
	},
	{
		name: "cucumber",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 2.10
	},
	{
		name: "milk",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "peanut butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 4.00
	},
	{
		name: "cherries",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 6.00
	},
	{
		name: "pecan pie",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 7.99
	},
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.00
	},
];
	

/**
 * Given restrictions provided, make a reduced list of products, including price.
 * 
 * @param {*} prods 
 * @param {*} restriction 
 * @returns 
 */
function restrictListProducts(products, restrictions) {
	let product_names = [];
	let organic = document.getElementById('organic').checked;

	for (var index in products) {
		let product = products[index];

		if (restrictions.includes('None')) {
			if ((organic && product.organic) || !organic)
				product_names.push({
					name: product.name, 
					price: product.price
				});
		} else if (restrictions.includes('nutFree') && restrictions.includes('lactoseFree')) {
			if (((organic && product.organic) || !organic) && product.nutFree && product.lactoseFree)
				product_names.push({
					name: product.name, 
					price: product.price
				});
		} else if (restrictions.includes('nutFree')) {
			if (((organic && product.organic) || !organic) && product.nutFree)
				product_names.push({
					name: product.name, 
					price: product.price
				});
		} else if (restrictions.includes('lactoseFree')) {
			if (((organic && product.organic) || !organic) && product.lactoseFree)
				product_names.push({
					name: product.name, 
					price: product.price
				});
		}
	}

	return product_names;
}

/**
 * Calculate the total price of items, with received parameter being a list of products.
 *
 * @param {*} chosenProducts 
 * @returns 
 */
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}
