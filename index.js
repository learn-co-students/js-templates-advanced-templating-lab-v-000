function init() {

  //put any page initialization/handlebars initialization here
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var template = formTemplate
displayIngredient()

}
document.addEventListener("DOMContentLoaded", function(event) {
init()
})

function createRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var name = document.getElementById("name").value

  var description = document.getElementById("description").value
  var ingredients = document.getElementsByName("ingredients")
  var ingredientsList = []
  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      ingredientsList.push(ingredients[i].value)
  }
}
  var recipe = {name, ingredientsList, description}
return recipe

}

function updateRecipe() {
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var ingredients = document.getElementsByName("ingredients")
  var ingredientsList = []
  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      ingredientsList.push(ingredients[i].value)
  }
}
  var recipe = {name, ingredientsList, description}
return recipe
}

function displayEditForm() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function displayIngredient() {
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
     return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
   })
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

}
