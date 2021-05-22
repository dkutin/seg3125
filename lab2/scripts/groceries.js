/**
 * Array of products, each product is an object with different fieldset.
 * A set of ingredients should be added to products.
 */
const products = [
	{
		name: "tomato",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 0.49
	},
	{
		name: "onion",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 0.49
	},
	{
		name: "brocoli",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "baguette",
		lactose: true,
		nutFree: true,
		organic: false,
		price: 2.00
	},
	{
		name: "cucumber",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 2.10
	},
	{
		name: "milk",
		lactose: false,
		nutFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "peanut butter",
		lactose: true,
		nutFree: false,
		organic: false,
		price: 4.00
	},
	{
		name: "cherries",
		lactose: true,
		nutFree: true,
		organic: true,
		price: 6.00
	},
	{
		name: "pecan pie",
		lactose: false,
		nutFree: false,
		organic: false,
		price: 7.99
	},
	{
		name: "salmon",
		lactose: true,
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
function restrictListProducts(products, restriction) {
	let product_names = [];
	let organic = document.getElementById('organic').checked;
	console.log(document.getElementById('organic'));
	for (var index in products) {
		let product = products[index];
		if ((restriction == "Lactose") && (product.lactose == true)) {
			if (organic && product.organic)
				product_names.push({name: product.name, price: product.price});
			else if (!organic)
				product_names.push({name: product.name, price: product.price});
		}
		else if ((restriction == "NutFree") && (product.nutFree == true)) {
			if (organic && product.organic)
				product_names.push({name: product.name, price: product.price});
			else if (!organic)
				product_names.push({name: product.name, price: product.price});
		}
		else if (restriction == "None") {
			if ((organic && product.organic) || !organic)
				product_names.push({name: product.name, price: product.price});
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
