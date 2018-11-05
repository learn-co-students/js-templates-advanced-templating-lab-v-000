function initForm() {
  var template = document.getElementById("recipe-form-template").innerHTML;
  var recipeTemplate = Handlebars.compile(template)
  document.getElementsByTagName("main")[0].innerHTML = recipeTemplate({ 'submitAction': 'createRecipe()' })
}


function createRecipe() {
  var recipe = recipeFormValues()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = recipeFormValues()
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main").innerHTML = recipeTemplate(recipe);
}

function displayEditForm() {
  var ingredientsNodes = document.getElementsByName('ingredients');
  var ingredients = []
  for (var i = 0; i < ingredientsNodes.length; i++) {
    if (ingredientsNodes[i] !== "") {
      ingredients.push(ingredientsNodes[i])
    }
  }
  var name = document.getElementById("nameHeader");
  var description = document.getElementById("recipeDescription");
  var recipe = { name, description, ingredients, submitAction: "createRecipe()" }

  var editTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByName("main").innerHTML = editTemplate(recipe);
}

function recipeFormValues() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
