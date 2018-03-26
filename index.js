function init() {
  //put any page initialization/handlebars initialization here
  initializePage()
  initializeHandlebars()
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function initializeHandlebars(){
  Handlebars.registerHelper('displayIngredient', function() {
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

}

function initializePage(){
 let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
 document.getElementsByTagName("main")[0].innerHTML += template;
}

function createRecipe() {
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function displayEditForm() {
}

function updateRecipe(){
}
