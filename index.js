function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function() {
	})
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-template').innerHTML);
  document.getElementById('main').innerHTML += document.getElementById('recipe-form-template').innerHTML
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function displayEditForm() {
	document.getElementById('main').innerHTML += document.getElementById('recipe-form-template').innerHTML
}

function createRecipe() {

	var name = document.getElementById('name').value;
	var description = document.getElementById('description').value;
	var ingredients = document.getElementsByName('ingredients').value;

	var recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
	var recipeHTML = recipeTemplate({'name': name, 'description': description, 'ingredients': ingredients}); 

	document.getElementById('main').innerHTML += recipeHTML;
}

function updateRecipe() {

}


