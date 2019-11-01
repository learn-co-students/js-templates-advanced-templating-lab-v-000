function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
      return new Handlebars.SafeString('<li name="displayedIngredients">' + ingredient.value + '</li>')
    })

  document.getElementById("main").innerHTML += Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)({'submitAction': 'createRecipe();return false;'});

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function recipeValues(){
  let name= document.getElementById("name").value
  let description = document.getElementById("description").value
  let ingredients = Array.from(document.getElementsByName("ingredients"));
  ingredients.map(function(ingredient){return ingredient.value});

  return {name, ingredients, description}

 }


 function createRecipe(){
    let recipe = recipeValues();
    let recipeTemplate = document.getElementById("recipe-template").innerHTML;
    let template = Handlebars.compile(recipeTemplate);
    document.getElementById("main").innerHTML = template(recipe);
   }


function displayEditForm(){
  let name= document.getElementById("recipeName").innerText;
  let description = document.getElementById("recipeDescription").innerText;
  let ingredients = Array.from(document.getElementsByName("displayedIngredients")).map(function(ingredient){
    return ingredient.innerText});

  let recipe = {name, description, ingredients, submitAction: 'updateRecipe();return false;'};
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;

  document.getElementById("main").innerHTML = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)(recipe);
}



function updateRecipe(){
  createRecipe()
}
