
function displayEditForm(test) {
	console.log(test)
	var recipe = {};
	recipe.name = document.getElementById('recipeName').innerHTML;
	recipe.description = document.getElementById('description').innerHTML;
	recipe.ingredients = Array.from(document.getElementsByClassName('ingredient')).map(function(ingredient) {return {name: ingredient.innerHTML}});
	console.log(recipe.ingredients)
	var recipeForm = document.getElementById('recipe-form-template').innerHTML;
  var recipeFormTemplate = Handlebars.compile(recipeForm);
  document.getElementById('main').innerHTML = recipeFormTemplate(recipe)
}

function updateRecipe(recipe) {
	var recipeDisplay = document.getElementById('recipe-template').innerHTML;
	var recipeTemplate = Handlebars.compile(recipeDisplay);

	document.getElementById('main').innerHTML += recipeTemplate(recipe);
}

function createRecipe() {
	var recipe = {};
	recipe.name = document.getElementsByName('name')[0].value,
	recipe.description = document.getElementsByName('description')[0].value,
	recipe.ingredients = Array.from(document.getElementsByName('ingredients')).map(function(ingredient) {return {name: ingredient.value}});
	updateRecipe(recipe);
}

function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function() {
 	 	if (this.name.replace(/\s*/, "") != "") {
 	 		return new Handlebars.SafeString("<li class='ingredient'>" + this.name + "</li>");
  	}
	});
	Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
	Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  var recipeForm = document.getElementById('recipe-form-template').innerHTML;
  var recipeFormTemplate = Handlebars.compile(recipeForm);
  document.getElementById('main').innerHTML = recipeFormTemplate()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


