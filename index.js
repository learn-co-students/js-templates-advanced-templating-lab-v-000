function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString('<li>' + this + '</li>')
  });
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function initForm() {
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  document.getElementById('main').innerHTML += template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let nodeArray = Array.from(document.getElementsByName('ingredients'));
  let ingredients = nodeArray.map(function (node) {
    return node.value;
  });
  let recipe = {name, description, ingredients};
  document.getElementById('main').innerHTML += template(recipe)
}

function displayEditForm() {
  let template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  let submitAction = 'updateRecipe()';
  let name = document.getElementsByTagName('h1')[0].innerHTML;
  let description = document.getElementsByTagName('h2')[0].innerHTML;
  let nodeArray = Array.from(document.getElementsByTagName('li'));
  let ingredients = nodeArray.map(function (node) {
    return node.innerHTML;
  });
  let editRecipe = {submitAction, name, description, ingredients};
  document.getElementById('main').innerHTML += template(editRecipe)
}

function updateRecipe() {
  let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
  let name = document.getElementsByClassName('edit_name')[1].value;
  let description = document.getElementsByClassName('edit_desc')[1].value;
  let nodeArray = Array.from(document.getElementsByName('ingredients'));
  let ingredients = nodeArray.map(function (node) {
    return node.value;
  });
  let recipe = {name, description, ingredients};
  document.getElementById('main').innerHTML = template(recipe)
}
