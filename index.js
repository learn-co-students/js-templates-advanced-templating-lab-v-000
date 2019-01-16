function init() {
  //put any page initialization/handlebars initialization here
  let recipeTemplate = document.getElementById("recipe-form-template").innerHTML
  let recipeTemplateFn = Handlebars.compile(recipeTemplate);
  let html = recipeTemplateFn({ingredients: ['','','','','']});
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">'+ ingredient + '</li>');
  })
  document.getElementById("main").innerHTML += html
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()

//   let recipe = {
//   description: 'yummy chicken noodle soup',
//   ingredients: [
//     {quantity: "1 cup", name: 'chicken'},
//     {quantity: "3 nanoliters", name: 'stock'},
//     {quantity: "12", name: 'noodles'}
//   ]
// }
 
// let template = document.getElementById("my-template").innerHTML;
// let templateFn = Handlebars.compile(template);
// let html = templateFn(recipe);

// Handlebars.registerPartial('namePartial', document.getElementById("partial-template").innerHTML)
// function renderMain() {
//   let template = document.getElementById("main-template").innerHTML;
//   let templateFunction = Handlebars.compile(template);
//   let html = templateFunction({name: 'Gordon Ramsay'});
// }

})
function handleSubmit() {

	let recipe = {}
	recipe.name = document.getElementById("name").value
	recipe.description = document.getElementById("description").value
	let ingredientNodes = document.getElementsByName("ingredients")
	recipe.ingredients = []
	for(var i = 0 ; i < ingredientNodes.length ; i++) {
	    recipe.ingredients.push(ingredientNodes[i].value);
	  }
	// document.getElementsByName("ingredients").forEach(function(element) {
	// 	  recipe.ingredients.push(element.value);
	// 	});
	// iterate over ingredients and push to array
	let template = document.getElementById("recipe-template").innerHTML;
	let templateFn = Handlebars.compile(template);
	// let html = templateFn(recipe);
	document.getElementById("main").innerHTML = templateFn(recipe)

}

function displayEditForm() {

}
// document.addEventListener("handleSubmit", function(event) {
// 	let name = document.getElementById('name')
// 	})

