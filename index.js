function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    let result = '<li name="ingredients">' + ingredient + '</li>';

    return new Handlebars.SafeString(result);
  })

  let formTemplateFn = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  document.getElementsByTagName("main")[0].innerHTML = formTemplateFn({ submitAction: 'handleSubmit()' });
}

function handleSubmit() {
  // get values
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;

  let ingredientsList = [];
  let ingredients = document.querySelectorAll('input[name=ingredients]')

  ingredients.forEach(function(ingredient) {
    ingredientsList.push(ingredient.value);
  });

  let recipe = {
    name: name,
    description: description,
    ingredients: ingredientsList
  }

  let template = document.getElementById("recipe-template").innerHTML;
  let templateFn = Handlebars.compile(template);

  let html = templateFn(recipe);

  document.getElementsByTagName("main")[0].innerHTML += html;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.querySelectorAll('li[name=ingredients]')
  var ingredientsList = []
  for(var i = 0; i < ingredientsNodes.length; i++) {
    ingredientsList.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredientsList, submitAction: 'handleSubmit()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}
