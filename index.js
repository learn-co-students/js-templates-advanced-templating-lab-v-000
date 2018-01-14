function init() {
 Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
 Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
 document.getElementById("main").innerHTML += Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)({'submitAction': 'createRecipe();return false;'});
 Handlebars.registerHelper('displayIngredient', function(ingredient){
   return new Handlebars.SafeString('<li name="displayedIngredients">' + ingredient.value + '</li>')
 })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function displayEditForm() {
    var name = document.getElementById('recipeName').innerText;
    var description = document.getElementById("recipeDescription").innerText;
    var ingredients = Array.from(document.getElementsByName("displayedIngredients")).map(function(ingredient) {return ingredient.innerText});
    var recipe = {name, description, ingredients, submitAction: 'updateRecipe();return false;'}
    document.getElementById("main").innerHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)(recipe);
}

function createRecipe() {
    var recipe = getRecipe();
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
    var recipe = getRecipe();
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    document.getElementById("main").innerHTML = template(recipe);
}

function getRecipe() {
    var name = document.getElementById('name').value;
    var description = document.getElementById("description").value;
    var ingredients = Array.from(document.getElementsByName("ingredients"));
    ingredients.map(function(ingredient) {return ingredient.value});
    return {name, description, ingredients}
}
