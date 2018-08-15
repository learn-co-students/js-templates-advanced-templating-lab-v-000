function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredients) {
    return new Handlebars.SafeString(ingredients)
  });
  // compile and include source
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  // where and when to generate the template
  // document.getElementsByTagName("main")[0].innerHTML += formTemplate;
  document.getElementsByTagName('main')[0].innerHTML = formTemplate({'submitAction': 'createRecipe()'});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function recipeStats() {
  var name = document.getElementsByName("name").value;
  var description = document.getElementsByName("description").value;
  var ingredients = Array.prototype.map.call(document.getElementsByName('ingredients'), (ingredient) => {
    return ingredient.value
  })
  return {name, description, ingredients};
}

function createRecipe() {
  var recipe = recipeStats();

  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName('main').innerHTML += recipeTemplate(recipe);
}

function displayEditForm() {
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementsByTagName("main")[0].innerHTML += recipeTemplate()
}

function updateRecipe() {
  createRecipe();
}
