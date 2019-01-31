function initForm() {
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(formTemplate);
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'handleSubmit()'});
}

function handleSubmit() {
 createRecipe();
}

 function createRecipe() {
  let recipe = recipeInfo();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe() {
  let recipe = recipeInfo();
  let recipeTemplate = document.getElementById("recipe-template").innerHTML;
  let template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm() {
  let name = document.getElementById("recipeName").innerHTML;
  let description = document.getElementById("recipeDescription").innerHTML;
  let ingredientList = document.getElementsByName("ingredients");
  let ingredients = [];

   for(let i = 0; i < ingredientList.length; i++) {
    ingredients.push(ingredientList[i].innerHTML);
   }
  let recipe = {name, description, ingredients, handleSubmit: "createRecipe()"};
  let recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  let template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function recipeInfo() {
  let ingredientList = document.getElementsByName("ingredients");
  let ingredients = [];

   for(let i = 0;i < ingredientList.length; i++) {
    if(ingredientList[i].value !== "") {
       ingredients.push(ingredientList[i].value);
     }
   }
   let name = document.getElementById("name").value;
   let description = document.getElementById("description").value;
   let recipe = {name, ingredients, description};
   return(recipe);
 }

 function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
     return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  });
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML);
}

 function init() {
  handlebarsSetup();
  initForm();
}	


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
