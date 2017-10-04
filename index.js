function init() {
  //put any page initialization/handlebars initialization here
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString(ingredient)
  })

  document.getElementById("main").innerHTML = template({'submitAction': 'createRecipe()'})
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  let recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: []
  };
  let ingredients = document.getElementsByName('ingredients');

  for(var i=0;i<ingredients.length;i++) {
    if(ingredients[i].value !== "") {
      recipe.ingredients.push(ingredients[i].value)
    }
  }

  var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
	document.getElementById("main").innerHTML = template(recipe)

}

function updateRecipe(){
  createRecipe()
}

function displayEditForm(){
  let recipe = {
    name: document.getElementById("recipe-name").innerText,
    description: document.getElementById("recipe-description").innerText,
    ingredients: [],
    submitAction: 'updateRecipe()'
  }

  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
}
