function init() {
  registerRecipeForm();
  registerRecipeDetailsPartial();
}

function registerRecipeForm() {
  var recipeFormHTML = document.getElementById("recipe-form-template").innerHTML
  var recipeFormTemplate = Handlebars.compile(recipeFormHTML)
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate({'submitAction': 'createRecipe()'})

}

function registerRecipeDetailsPartial() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
}

function getRecipe() {
  var ingredientsCol = document.getElementsByName('ingredients');
  var ingredients = [];
  for (var i=0; i<ingredientsCol.length;i++) {
    if (ingredientsCol[i].value !== "") {
      ingredients.push(ingredientsCol[i].value)
    }
  }
  var name = document.getElementById('name').value;
  var description = document.getElementById('description').value;
  var recipe = {name, ingredients, description};
  return(recipe)
}

function createRecipe() {
  console.log("hello");
  var recipe = getRecipe();
  console.log(recipe);
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  // debugger;
  document.getElementById('main').innerHTML = template(recipe)
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})





