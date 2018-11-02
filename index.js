function createRecipe() {
  let template = document.getElementById('recipe-template').innerHTML;
  let templateFn = Handlebars.compile(template);
}

function displayEditForm() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
}

function updateRecipe() {
  createRecipe();
}



function init() {
  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li>" + ingredient + "</li>")
  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form").innerHTML);
  
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

