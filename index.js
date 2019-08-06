
function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementById('main').innerHTML = template({'submitAction': 'createRecipe()'})
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}

function displayEditForm() {
	var recipeValues = getRecipeInfo();
	recipeValues.submitAction = 'updateRecipe()';
	var recipeTemplate = document.getElementById('recipe-form-template').innerHTML;
	var template = Handlebars.compile(recipeTemplate);

	document.getElementById('main').innerHTML = template(recipeValues);
}

function createRecipe() {
	var recipeVals = getRecipeValues();
	recipeVals.submitAction = 'displayEditForm()';
	var recipeTemplate = document.getElementById('recipe-template').innerHTML;
	var template = Handlebars.compile(recipeTemplate);
	document.getElementById('main').innerHTML = template(recipeVals);
}


function updateRecipe() {
  var recipe = getRecipeValues()
  recipe.submitAction = 'displayEditForm()';
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeInfo() {
	var name = document.getElementById('nameHeader').innerText;
	var description = document.getElementById('recipeDescription').innerText;
	var ingredientCollection = document.getElementsByName('ingredients');

	var ingredients = [];
	for(let item of ingredientCollection) {
		ingredients.push(item.innerText);
	}
	return {name, description, ingredients}
}

function getRecipeValues() {
	var name = document.getElementById('recipe-name').value;
	var description = document.getElementById('recipe-description').value;
	var ingredientCollection = document.getElementsByName('ingredients');

	var ingredients = [];
	for(let item of ingredientCollection) {
		if (item.value !== "") {
			ingredients.push(item.value);
		}
	}
	return {name, description, ingredients}
}

function init() {
  //put any page initialization/handlebars initialization here
   handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
