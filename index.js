function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
          return new Handlebars.SafeString('<li name="recipeIngredients">' + ingredient + '</li>');
  })
  
  page();

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function page() {
  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementById("main").innerHTML += template();
}

function createRecipe() {
  
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const ingredientsField = document.getElementsByName("ingredients");

  let ingredients = [];
  for(const ingredient of ingredientsField) {
    if(ingredient.value !== ""){
      ingredients << ingredient
    }
  }

  const template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  const recipe = template(name, description, ingredients);
  document.getElementById("main").innerHTML = recipe;
}

function displayEditForm(){
 
  const name = document.getElementById("recipeName").innerText;
  const description = document.getElementById("recipeDescription").innerText;
  const ingredientsField = document.getElementsByName("recipeIngredients");

  let ingredients = [];
  for(let ingredient of ingredientsField) {
    if(ingredient.value !== "") {
      ingredients << ingredient.innerText
    }
  }

  const template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  
    const recipe = template(name, description, ingredients);
    document.getElementById("main").innerHTML = recipe;

}


function updateRecipe() {
  createRecipe();
}