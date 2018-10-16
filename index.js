function updateRecipe() {
  var recipe = recipeForCreateAndUpdate()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm(){
  let recipe = recipeForEdit();

  let formTemplate = document.getElementById("recipe-form-template").innerHTML; 
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template(recipe);
}

function recipeForEdit(){
  let name = document.getElementById("nameHeader").innerHTML
  let description = document.getElementById("descriptionParagraph").innerHTML
  let ingredNodes = document.getElementsByName("ingredientsList")
  let ingredients = []
  for (let i = 0; i < ingredNodes.length; i++){
    ingredients.push(ingredNodes[i].innerHTML)
  }
  
  let recipe = {name, ingredients, description, onSubmit: 'updateRecipe()'}

  return recipe;
}

function createRecipe(){
  let recipe = recipeForCreateAndUpdate();

  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  let result = template(recipe);
  document.getElementsByTagName("main").innerHTML = result;
}


function recipeForCreateAndUpdate(){
  let ingredNodes = document.getElementsByName("ingredients")
  let ingredients = []
  for (let i = 0; i < ingredNodes.length; i++){
    if (ingredNodes[i].value !== ""){
      ingredients.push(ingredNodes[i].value)
    }
  }

  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  
  let recipe = {name, ingredients, description}

  return recipe;
}

function formInit(){
  let formTemplate = document.getElementById("recipe-form-template").innerHTML; 
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'onSubmit': 'createRecipe()'});
}

function init() {
  Handlebars.registerPartial('recipeFormPartial',
  document.getElementById('recipe-form-patrial').innerHTML);

  Handlebars.registerPartial('recipeDetailsPartial',
  document.getElementById('recipe-details-partial').innerHTML);

  Handlebars.registerHelper('displayIngredient', function(){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>');
  });

  formInit();
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})