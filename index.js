function init() {
  //put any page initialization/handlebars initialization here
  let template = document.getElementById("recipe-form-template").innerHTML
  document.getElementsByTagName("main")[0].innerHTML += template;
  Handlebars.registerHelper('displayIngredient',  function(ingredient) {
      return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
    })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  const ingredientsNodes = document.getElementsByName("ingredients")
  let ingredients = []
  ingredientsNodes.forEach(
    function(ingredientNode) {
      if(ingredientNode.value !== ""){
        ingredients.push(ingredientNode.value)
      }
  })
  const name = document.getElementById("recipeName").value
  const description = document.getElementById("recipeDescription").value
  const recipe = {name, ingredients, description}
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  const result = template(recipe);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
}

function updateRecipe(){
}
