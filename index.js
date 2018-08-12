function init() {
  //put any page initialization/handlebars initialization here

  Handlebars.registerHelper('displayIngredient', function(incredient){
    return new Handlebars.SafeString('<li name="ingridentsList">' +ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  // Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  function renderDetailsPartial(){
    var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  }

  function renderFormPartial(){
    let template = Handlebars.compile(document.getElementById("recipe-form-partial").innerHTML);
  }

}

function createRecipe(){
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let ingredients = []
  for(var i=0;i<document.getElementsByName("ingredients").length;i++) {
    if(document.getElementsByName("ingredients")[i].value !== "") {
      ingredients.push(document.getElementsByName("ingredients")[i].value)
    }
  }
  let recipe = {name, description, ingredients}
  let recipeTemplate = document.getElementById("recipe-template").innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm(){
  let
}

function updateRecipe(){

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
