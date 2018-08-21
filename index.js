function init() {
  //put any page initialization/handlebars initialization here
  //function()
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(){
    return this;
  })
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-details-partial").innerHTML)
}

function createRecipe(){
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var recipe = template();
  document.getElementById("main").innerHTML += recipe;
}

function displayEditForm(){
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var edit = template();
  document.getElementById("main").innerHTML += edit;
}

function updateRecipe(){
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var update = template();
  document.getElementById("main").innerHTML += update;
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
