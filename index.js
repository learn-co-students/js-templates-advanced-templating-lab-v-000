function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(context) {
    return context.value;
  })

  var firstForm = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.querySelector('main').innerHTML = firstForm({createOrUpdate: "createRecipe()"});

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: document.getElementsByName("ingredients")
  }

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipeTemplate(recipe)
  document.querySelector("main").innerHTML = displayRecipe
}

function displayEditForm() {
  recipe = getRecipe();
  var newForm = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.querySelector('main').innerHTML = newForm({createOrUpdate: "updateRecipe()", name: recipe.name, description: recipe.description, ingredients: recipe.ingredients});
}

function updateRecipe() {
  var recipe = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      ingredients: document.getElementsByName("ingredients")
    }
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var displayRecipe = recipeTemplate(recipe)
  document.querySelector("main").innerHTML = displayRecipe
}

function getRecipe() {
  var recipe = {
    name: document.getElementById("recipeName").innerHTML,
    description: document.getElementById("recipeDescription").innerHTML,
    ingredients: []
  }
  let ingred = document.getElementsByName("recipeIng")

  for (let i=0; i<ingred.length; i++) {
    recipe.ingredients.push(ingred[i].innerHTML)
  }
  return recipe
}
