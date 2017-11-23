function init() {
  //put any page initialization/handlebars initialization here
  loadRecipeForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function loadRecipeForm(){
  var main = document.querySelector("main")
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  var result = recipeFormTemplate()
  // debugger
  main.innerHTML += result
}

function addIngredientField(){
  var ingredientsFieldsDiv = document.getElementById("ingredients-fields")
  ingredientsFieldsDiv.innerHTML += "<input type='text' name='ingredients'><br>\n"
}

function createRecipe(){

}
