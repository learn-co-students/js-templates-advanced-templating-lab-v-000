function init() {
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = template();
  document.getElementsByTagName("main")[0].innerHTML += result;

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial"))
  function renderMain() {
    let template = document.getElementById("recipe-template").innerHTML;
    let templateFunction = Handlebars.compile(template);
    let html = templateFunction();
  }

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    var result = '<li name="ingredients">' + ingredient + '</li>';
    return new Handlebars.SafeString(result);
  });

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  document.getElementById('recipe-form').submit();
  var ingredients = document.getElementsByName("ingredients");
  var nodes = Array.prototype.slice.call(ingredients,0);
  var array = [];
  nodes.forEach(function(node) {
    array.push(node.value);
  });
  let recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: array
  };

  var template = Handlebars.compile(document.getElementById("recipe-template"));
  var result = template(recipe);
  document.getElementById("main").innerHTML = result;
}

function displayEditForm() {

}
