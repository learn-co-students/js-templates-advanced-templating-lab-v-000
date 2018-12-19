function init() {
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = template({"submitAction": "handleSubmit()"});
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
});

function recipeValues() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let ingredientNodes = document.getElementsByName("ingredients");
  let ingredients = [];
  for(let i = 0; i < ingredientNodes.length; i++) {
    if(ingredientNodes[i].value !== "") {
      ingredients.push(ingredientNodes[i].value);
    }
  }
  let recipe = {name, ingredients, description};
  return(recipe);
}

 function handleSubmit() {
  let recipe = recipeValues();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

 function updateRecipe() {
  let recipe = recipeValues();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}

 function displayEditForm() {
  let name = document.getElementById("name").innerHTML;
  let description = document.getElementById("description").innerHTML;
  let ingredientNodes = document.getElementsByName("ingredients");
  let ingredients = [];
  for(let i = 0; i < ingredientNodes.length; i++) {
    ingredients.push(ingredientNodes[i].innerHTML);
  }
  let recipe = {name, description, ingredients, submitAction: "handleSubmit()"};
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
}