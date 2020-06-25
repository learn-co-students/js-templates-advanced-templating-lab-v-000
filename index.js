function init() {
  //put any page initialization/handlebars initialization here
  var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

document.getElementsByTagName("main")[0].innerHTML = template({ingredients: ["", "", "", "", ""]});
Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
Handlebars.registerHelper('displayIngredient', function(ingredient){
 return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
});
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})


function recipeInput() {
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let ingredientsList = document.getElementsByName("ingredients");
  let ingredients = [];
  for(let i = 0; i < ingredientsList.length; i++) {
    if(ingredientsList[i].value !== "") {
      ingredients.push(ingredientsList[i].value);
    }
  }
  let recipe = {name, ingredients, description};
  return(recipe);
}


function handleSubmit() {
  let recipe = recipeInput();
  let template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementById("main").innerHTML = template(recipe);
  }

function displayEditForm() {
  let name = document.getElementById("recipeName").innerHTML;
  let description = document.getElementById("recipeDescription").innerHTML;
  let ingredientsList = document.getElementsByName("ingredients");
  let ingredients = [];
  for(let i = 0; i < ingredientsList.length; i++) {
    ingredients.push(ingredientsList[i].innerHTML);
  }
  let recipe = {name, description, ingredients, submitAction: "handleSubmit()"};
	let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
	document.getElementById("main").innerHTML = template(recipe);
}
