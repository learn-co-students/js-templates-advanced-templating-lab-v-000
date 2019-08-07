function init() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  document.getElementsByTagName("main")[0].innerHTML += template

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function() {
    debugger;
    if(this.value){
      return new Handlebars.SafeString(this.value)
    }
  })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipeName = document.getElementsByName('name')[0].value;
  let recipeDesc = document.getElementsByName('recipe_description')[0].value;
  let recipeIng = document.getElementsByName('ingredients');

  let recipe = {name: recipeName, description: recipeDesc, ingredients: recipeIng};

  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template

}

function updateRecipe() {
  let recipeName = document.getElementsByName('name')[0].value;
  let recipeDesc = document.getElementsByName('recipe_description')[0].value;
  let recipeIng = document.getElementsByName('ingredients');

  let recipe = {name: recipeName, description: recipeDesc, ingredients: recipeIng};

  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result
}


