
// function createNewRecipe() {
//   let recipeId = 0
//   return class {
//     constructor(name, description, ingredients){
//       this.id = ++recipeId;
//       this.name = name;
//       this.description = description;
//       this.ingredients = [...ingredients];
//       this.submitAction = createRecipe();
//     }
//   }
// }
// const Recipe = createNewRecipe()

function renderRecipe(){
  let recipeTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe(){
  let recipe = recipeValues() 
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe(){
  let recipe = recipeValues();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe);

}

function displayEditForm(){
  let name = document.getElementById("recipe-name-header").innerText
  let description = document.getElementById("recipe-description").innerText
  let ingredientNodes = document.getElementsByName("ingredients")
  let ingredients = [];
  for(let i=0; i < ingredientNodes.length; i++ ){
    if(ingredientNodes[i].value !==""){
      ingredients.push(ingredientNodes[i].value);
    }
  }
  let recipe = {name, description, ingredients, submitAction:'createRecipe()'};
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function renderRecipeForm(){
  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe)

}

function recipeValues(){
  let ingredients = []
  let ingredientNodes = document.getElementsByName("ingredients");
  for(let i=0; i < ingredientNodes.length; i++ ){
    if(ingredientNodes[i].value !==""){
      ingredients.push(ingredientNodes[i].value);
    }
  }
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let recipe = {name, description, ingredients};
  return recipe;
}

function partialsAndHelpersSetup(){
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);

}


function init() {
  //put any page initialization/handlebars initialization here

  partialsAndHelpersSetup();
  renderRecipe();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

