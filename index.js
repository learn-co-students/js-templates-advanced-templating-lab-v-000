function helpersAndPartials(){
  Handlebars.registerHelper('displayIngredient', function(Ingredient) {
  return Handlebars.safeString('<li>' + Ingredient + '</li>') })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  initform();
}



function init() {
  //put any page initialization/handlebars initialization here
  helpersAndPartials()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
  // debugger;
  var recipe = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    ingredients: [
      {ingredient: document.getElementsByName('ingredients')[0].value},
      {ingredient: document.getElementsByName('ingredients')[1].value},
      {ingredient: document.getElementsByName('ingredients')[2].value},
      {ingredient: document.getElementsByName('ingredients')[3].value},
      {ingredient: document.getElementsByName('ingredients')[4].value}
    ]
  }

  var template = Handlebars.compile(document.getElementById("recipe-form").innerHTML);
  var html = template(recipe);

  document.getElementsByTagName("main").innerHTML = html;
}

function displayEditForm(){
  var source = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(source);
}

function updateRecipe() {
  var source = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(source);
}

function initform(){
  var source = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(source);
  document.getElementsByTagName("main")[0].innerHTML = template()
}
