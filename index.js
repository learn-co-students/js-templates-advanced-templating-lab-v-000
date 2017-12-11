Handlebars.registerHelper('displayIngredient', function(ingredient){
	return new Handlebars.SafeString('<li name="recipe[ingredient]">' + ingredient + '</li>')
})

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)



function displayForm() {
	var formTemplate = document.getElementById('recipe-form-template').innerHTML;
	var form = Handlebars.compile(formTemplate);

	document.getElementById('main').innerHTML += form({'submitAction': 'createRecipe()'})
}

function displayEditForm() {
	var name = document.getElementById('recipe-name').innerText;
	var description = document.getElementById('recipe-description').innerText;
	var ingredientCollection = document.getElementsByName('recipe[ingredient]');
	var ingredients = [];
	for(let item of ingredientCollection) {
		ingredients.push(item.innerText)
	}
	var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};
	var recipeTemplate = document.getElementById('recipe-form-template').innerHTML;
	var template = Handlebars.compile(recipeTemplate);

	document.getElementById('main').innerHTML = template(recipe);
}

function createRecipe() {
	var name = document.getElementById('recipeName').value;
	var description = document.getElementById('recipeDescription').value;
	var ingredients = getRecipeIngredients();

	var recipeTemplate = document.getElementById('recipe-template').innerHTML;
	var template = Handlebars.compile(recipeTemplate);
	document.getElementById('main').innerHTML = template({name, description, ingredients, submitAction: 'displayEditForm()'});
}

function getRecipeIngredients() {
	var ingredientCollection = document.getElementsByName('ingredients');

	var ingredients = [];
	for(let item of ingredientCollection) {
		if (item.value !== "") {
			ingredients.push(item.value);	
		} 	   
	}
	return ingredients;
}

function init() {
  //put any page initialization/handlebars initialization here
  displayForm();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
