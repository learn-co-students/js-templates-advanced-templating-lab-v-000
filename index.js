function init() {
  //put any page initialization/handlebars initialization here

  let template = document.getElementById("recipe-form-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let result = templateFn({ingredients: ['', '', '', '', '']});
  
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML); 

  Handlebars.registerHelper("displayIngredient", function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + "</li>");
  });

  document.getElementsByTagName("main")[0].innerHTML = result; 
}

function handleSubmit() {
  let template = document.getElementById("recipe-template").innerHTML;
  let templateFn = Handlebars.compile(template);
  let recipeName = document.getElementById("name").value;
  let recipeDescription = document.getElementById("description").value;
  let recipeIngredients = document.getElementsByName("ingredients");
  let recIngredients = []
  for (let i=0; i<recipeIngredients.length; i++) {
    recIngredients.push(recipeIngredients[i].value);
  }
  let recipe = { name: recipeName, description: recipeDescription, ingredients: recIngredients };

  let result = templateFn(recipe);
  document.getElementsByTagName("main")[0].innerHTML = result;
}

function displayEditForm() {
    var recipe = {}
    var nameNode = document.getElementById('name');
    var descriptionNode = document.getElementById('description');
    var ingredientNodes = document.getElementsByName('ingredients');
    recipe.name = nameNode.innerHTML;
    recipe.description = descriptionNode.innerHTML;
    recipe.ingredients = [];
    for(var i = 0 ; i < ingredientNodes.length ; i++) {
          recipe.ingredients.push(ingredientNodes[i].innerHTML);
        }
    var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
    var recipeFormTemplateFn = Handlebars.compile(recipeFormTemplate);
    document.getElementById('main').innerHTML = recipeFormTemplateFn(recipe);
}






document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
