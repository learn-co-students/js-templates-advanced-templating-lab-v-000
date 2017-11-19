function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-details-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
          return new Handlebars.SafeString("<li>" + this.ingredient + "</li>");
  })
  
  page();

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function page() {
  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML += template();
}

function createRecipe() {
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  const nameField = document.getElementById("name").innerHTML;
  const descriptionField = document.getElementById("description").innerHTML;
  const ingredientsField = document.getElementsByName("ingredients").innerHTML;

  const ingredients = template(ingredientsField);
  document.getElementById("recipe-details-partial").innerHTML = result;

  const description = template(descriptionField);
  document.getElementById("recipe-details-partial").innerHTML = description;

  const name = template(nameField)
  document.getElementById("recipe-template").innerHTML = name;
}

function displayEditForm(){
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
}

function updateRecipe() {
  createRecipe();
}