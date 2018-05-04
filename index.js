function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  
  Handlebars.registerHelper('displayIngredient', function (ingredient){
    return ingredient.value;
  })

  let formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  let html = formTemplate({submitFn: "createRecipe();return false;"});
  document.getElementById('recipe-form').innerHTML += html;
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipeData = {
                     name: document.getElementById('name').value,
                     description: document.getElementById('description').value,
                     ingredients: document.getElementsByName('ingredients')
  }

  let html = recipeTemplate(recipeData);

  document.getElementById('recipe').innerHTML += html;
}

function displayEditForm() {
  let formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  let recipeData = {  submitFn: "updateRecipe();return false;",
                      name: document.getElementById('name').value,
                      description: document.getElementById('description').value,
                      ingredients: document.getElementsByName('ingredients')
}
  let html = formTemplate(recipeData);
  document.getElementById('recipe-form').innerHTML += html;
}

function updateRecipe() {
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  let recipeData = {
                     name: document.getElementById('name').value,
                     description: document.getElementById('description').value,
                     ingredients: document.getElementsByName('ingredients')
  }

  let html = recipeTemplate(recipeData);

  document.getElementById('recipe').innerHTML += html;
}