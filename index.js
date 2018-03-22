function init() {
   //put any page initialization/handlebars initialization here	   //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">'  ingredient  '</li>')
  })
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
 }	 }

 document.addEventListener("DOMContentLoaded", function(event) {	 document.addEventListener("DOMContentLoaded", function(event) {
   init()	   init()
 })	 })

function createRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = document.getElementsByName("ingredients");
  var ingredientsArray = []
  for(let i=0; i<ingredients.length; i) {
    if (ingredients[i] !== "") {
      ingredientsArray.push(ingredients[i].value)
    }
  }
  var recipe = {name, description, ingredientsArray}
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe)
}

function displayEditForm() {
  var name = document.getElementsByTagName("h2").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredients = document.getElementsByName("ingredientsList")
  var ingredientsArray = []
  for(var i=0; i<ingredients.length; i) {
    ingredientsArray.push(ingredients[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = recipeTemplate(recipe)
}

function updateRecipe() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingredients = document.getElementsByName("ingredients");
  var ingredientsArray = []
  for(let i=0; i<ingredients.length; i) {
    if (ingredients[i] !== "") {
      ingredientsArray.push(ingredients[i].value)
    }
  }
  var recipe = {name, description, ingredientsArray}
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = recipeTemplate(recipe)
}
