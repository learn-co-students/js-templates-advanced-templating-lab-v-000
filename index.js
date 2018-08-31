function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsDetails = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsDetails.length;i++) {
    ingredients.push(ingredientsDetails[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = recipeFormTemplateFn(recipe)
}

function recipeValues() {
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value

  var ingredientsDetails = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0; i<ingredientsDetails.length; i++){
    if(ingredientsDetails[i].value != "") {
      ingredients.push(ingredientsDetails[i].value)
    }
  }

  var recipe = {name, ingredients, description}
  return(recipe)
}

function createRecipe(){
  var recipe = recipeValues()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var recipeTemplateFn = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = recipeTemplateFn(recipe);
}

function updateRecipe(){
  createRecipe()
}

function init() {
  //Set up Handlebars
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  //Initialize the form
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplateFn({'submitAction': 'createRecipe()'});

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
