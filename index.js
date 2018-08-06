function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
  	return new Handlebars.SafeString("<li name='recipe_ingredients'>" + ingredient + "</li>")})
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += formTemplate({'action': 'createRecipe()'});
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
	var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  

  var ingredientList = Array.from(document.getElementsByName("ingredients"));
  var allIngredients = ingredientList.map(obj => obj.value);
  var ingredients = allIngredients.filter(obj => obj !== "");

	document.getElementsByTagName("main")[0].innerHTML = recipeTemplate({'name': name, 
    'description': description, 'ingredients': ingredients}); 
}

function displayEditForm() {
	var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  var name = document.getElementById("recipe_name").innerText;
  var description = document.getElementById("recipe_description").innerText;
  var ingredientList = Array.from(document.getElementsByName("recipe_ingredients"));
  var ingredients = ingredientList.map(obj => obj.innerHTML);

	document.getElementsByTagName("main")[0].innerHTML = formTemplate({'action': 'updateRecipe()', 'name': name, 
    'description': description, 'ingredients': ingredients});
}

function updateRecipe() {

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;

  var ingredientList = Array.from(document.getElementsByName("ingredients"));
  var allIngredients = ingredientList.map(obj => obj.value);
  var ingredients = allIngredients.filter(obj => obj !== "");

  document.getElementsByTagName("main")[0].innerHTML = recipeTemplate({'name': name, 
    'description': description, 'ingredients': ingredients}); 

}
