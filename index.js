function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit(){
  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let ingredients = document.getElementsByName("ingredients");
  let ingredientValues = [];

  for(let i=0; i<ingredients.length; i++){
    if (ingredients[i].value){
      ingredientValues.push(ingredients[i].value)
    }
  }

  let recipe = {name: name, description: description, ingredients: ingredientValues};

  let template = document.getElementById("recipe-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let html = templateFn(recipe);
  document.getElementById('recipe-form').remove();
  document.getElementById('main').innerHTML += html;
}

function displayEditForm() {
  let name = document.getElementById("recipeName").innerHTML;
  let description = document.getElementById("recipeDescription").innerHTML;
  let ingredients = document.getElementsByName("ingredients");
}
