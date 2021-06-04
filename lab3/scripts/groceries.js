/**
 * Array of products, each product is an object with different fieldset.
 * A set of ingredients should be added to products.
 */
const products = [
	{
		name: "Tomatoes",
		lactoseFree: true,
		nutFree: true,
		glutenFree: true,
		organic: true,
		price: 0.49
	},
	{
		name: "Onion",
		lactoseFree: true,
		nutFree: true,
		glutenFree: true,
		organic: true,
		price: 0.49
	},
	{
		name: "Broccoli",
		lactoseFree: true,
		nutFree: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Baguette",
		lactoseFree: true,
		nutFree: true,
		glutenFree: false,
		organic: false,
		price: 2.00
	},
	{
		name: "Cucumber",
		lactoseFree: true,
		nutFree: true,
		glutenFree: true,
		organic: true,
		price: 2.10
	},
	{
		name: "Milk",
		lactoseFree: false,
		nutFree: true,
		glutenFree: true,
		organic: false,
		price: 2.35
	},
	{
		name: "Peanut butter",
		lactoseFree: true,
		nutFree: false,
		glutenFree: true,
		organic: false,
		price: 4.00
	},
	{
		name: "Cherries",
		lactoseFree: true,
		nutFree: true,
		glutenFree: true,
		organic: true,
		price: 6.00
	},
	{
		name: "Pecan pie",
		lactoseFree: false,
		nutFree: false,
		nutFree: false,
		organic: false,
		price: 7.99
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
		glutenFree: true,
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

	for (var index in products) {
		let product = products[index];
		if (restrictions.length == 0) {
			product_names.push({
				name: product.name, 
				price: product.price,
				organic: product.organic
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
					price: product.price,
					organic: product.organic
				});
		}
	}

	return product_names;
}

