function init() {
  //put any page initialization/handlebars initialization here
  
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>');
  });
  
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['', '', '', '', '']});
}  
  
 function handleSubmit() {
   let recipe = {}
   let rName = document.getElementById('name');
   let rDesc = document.getElementById('description');
   let rIngr = document.getElementsByName('ingredients');
 
    recipe.name = rName.value;
   recipe.description = rDesc.value;
   recipe.ingredients = [];
   for(let i = 0; i < rIngr.length; i++) {
     recipe.ingredients.push(rIngr[i].value);
   }
   let recipeTemplate = document.getElementById('recipe-template').innerHTML;
   let recipeFunction = Handlebars.compile(recipeTemplate);
   document.getElementById('main').innerHTML = recipeFunction(recipe);
 }

function displayEditForm() {
  let recipe = {}
  let rName = document.getElementById('recipeName');
  let rDesc = document.getElementById('recipeDescription');
  let rIngr = document.getElementsByName('ingredients');
  
  recipe.name = rName.innerHTML;
  recipe.description= rDesc.innerHTML;
  recipe.ingredients = [];
  for(let i = 0; i < rIngr.length; i++) {
     recipe.ingredients.push(rIngr[i].innerHTML);
   }
   
  let recipeTemplate = document.getElementById('recipe-form-template').innerHTML;
  let recipeFunction = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = recipeFunction(recipe);
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
