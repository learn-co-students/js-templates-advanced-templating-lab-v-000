function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredients) {
    return new Handlebars.SafeString(ingredients)}
    );
  let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName('main')[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});
 
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function recipeInfo () {
	let name = document.getElementById("name").value
	let description = document.getElementById("description").value
	let ingredientsInput = document.getElementsByName("ingredients")
	let ingredients = Array.prototype.map.call(ingredientsInput, function(obj) {
  			return obj.value;
		});
	return {name, description, ingredients};
}

function createRecipe() {
	let recipe = recipeInfo();

	let recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
	document.getElementById('main').innerHTML += recipeTemplate(recipe);

  };

  function displayEditForm() {
	let recipe = recipeInfo()

  	let recipeTemplateEdit = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  	recipe.submitAction = 'updateRecipe()';

  	document.getElementById('main').innerHTML += recipeTemplateEdit(recipe)
  };

  function updateRecipe() {
  	let recipe = recipeInfo()

  	let editRecipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  	document.getElementById('main').innerHTML += editRecipeTemplate(recipe)
  };
