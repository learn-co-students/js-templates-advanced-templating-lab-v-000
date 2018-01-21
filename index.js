function init() {
  //put any page initialization/handlebars initialization here
  var recipes = [];

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
 	template(this);

	Handlebars.registerHelper('displayIngredient', function() {
	  return new Handlebars.SafeString("<li>" + this.name + "</li>")
	})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

var recipes = [];

function createRecipe() {
  // var recipes = [];
  recipe = {name: document.getElementById('name').value, 
  			description: document.getElementById('description').value,
  			ingredients: [{name: document.getElementById('ingredient1').value}, {name: document.getElementById('ingredient2').value}, {name: document.getElementById('ingredient3').value },
  						   			{name: document.getElementById('ingredient4').value}, {name: document.getElementById('ingredient5').value} ] };
  recipes.push(recipe);
  console.log(recipes);

  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipes);
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function displayEditForm() {
	var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
	var result = template(this);
	document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe() {
recipe = {name: document.getElementById('name').value, 
  			description: document.getElementById('description').value,
  			ingredients: [{name: document.getElementById('ingredient1').value}, {name: document.getElementById('ingredient2').value}, {name: document.getElementById('ingredient3').value },
  						   			{name: document.getElementById('ingredient4').value}, {name: document.getElementById('ingredient5').value} ] };
  recipes.push(recipe);
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(recipes);
  document.getElementsByTagName("main")[0].innerHTML = result;
}