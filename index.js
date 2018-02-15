function init() {
  //put any page initialization/handlebars initialization here
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  var recipe = recipeValues();
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

function recipeValues() {
  // verified works in browser console
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value

  var ingredientList = document.getElementsByName("ingredients")
  var ingredients = []
  for(let i = 0; i<ingredientList.length; i++){
    if(ingredientList[i].value !== "") {
      ingredients.push(ingredientList[i].value);
    }
  }
  return {name, description, ingredients}
}
