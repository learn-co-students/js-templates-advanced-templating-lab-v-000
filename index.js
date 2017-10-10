function init() {
	registerPartialsAndHelpers();

	document.getElementById("recipes").innerHTML = Handlebars.compile(document.getElementById("recipe-template").innerHTML)({recipes: recipes})

	document.getElementById("recipe-form-container").innerHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)();
}


function registerPartialsAndHelpers() {
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString("<li>" + this +"</li>")
  });

  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-template").innerHTML);
}

function createRecipe() {
	var ingredientsNode = document.getElementsByName('ingredients');
	var newRecipe = {
		name: document.getElementById('name').value,
	  description: document.getElementById('recipeDescription').value,
	  ingredients: []
	};

  for (var i=0; i < ingredientsNode.length; i++) {
    newRecipe["ingredients"].push(ingredientsNode[i].value);
  }

	recipes.push(newRecipe);

	document.getElementById("recipes").innerHTML += Handlebars.compile(document.getElementById("recipe-template").innerHTML)({recipes: recipes.slice(-1)});
}

function updateRecipe() {
  var ingredientsNode = document.getElementsByName(`ingredients`);

  var editedRecipe = {
    name: document.getElementById(`name`).value,
    description: document.getElementById(`recipeDescription`).value,
    ingredients: []
  };

  for (var i=0; i < ingredientsNode.length; i++) {
    editedRecipe["ingredients"].push(ingredientsNode[i].value);
  }

  recipes[0] = editedRecipe;

  document.getElementById("recipes").innerHTML = Handlebars.compile(document.getElementById("recipe-template").innerHTML)({recipes: recipes });

}

function displayEditForm(){
  document.getElementById(`edit-container`).innerHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)({recipe: recipes[0]});
  document.getElementById("recipe-form-container").innerHTML = "";
}


var recipes = [];


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
