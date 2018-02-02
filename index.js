function initForm() {
   const formTemplate = document.getElementById('recipe-form-template').innerHTML
   const templateFunction = Handlebars.compile(formTemplate)
   document.getElementById('main').innerHTML = templateFunction({submitAction: 'createRecipe()', buttonValue: 'Create Recipe'})
 }

 // computes recipes contents from form, makes object to run recipe-template against, posts it tot he page
 function createRecipe() {
   const recipeObj = getRecipeVals()

   const recipeTemplate = document.getElementById('recipe-template').innerHTML

   const templateFunction = Handlebars.compile(recipeTemplate)

   document.getElementById('main').innerHTML = templateFunction(recipeObj)
 }

 function getRecipeVals() {
   const name = document.getElementById('recipe-name').value

   const description = document.getElementById("recipe-description").value;

   const ingredientsNodes = document.getElementsByName("recipe-ingredients");
   const ingredients = [];
   for(var i=0;i<ingredientsNodes.length;i++) {
     if(ingredientsNodes[i].value !== "") {
       ingredients.push(ingredientsNodes[i].value)
     }
   }
   const recipe = {name, ingredients, description}
   return(recipe)
 }

 function displayEditForm() {
   const name = document.getElementById("shown-recipe-name").innerText
   const description = document.getElementById("shown-recipe-decription").innerText
   const ingredientsNodes = document.getElementsByName("shown-recipe-ingredients")
   const ingredients = []
   for(var i=0;i<ingredientsNodes.length;i++) {
     ingredients.push(ingredientsNodes[i].innerText)
   }

   const recipe = {name, description, ingredients, submitAction: 'updateRecipe()', buttonValue: 'Update Recipe'}

   const recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
   const templateFunction = Handlebars.compile(recipeFormTemplate)
   document.getElementById("main").innerHTML = templateFunction(recipe)
 }

 function updateRecipe() {
   const recipeObj = getRecipeVals()

   const recipeTemplate = document.getElementById('recipe-template').innerHTML

   const templateFunction = Handlebars.compile(recipeTemplate)

   document.getElementById('main').innerHTML = templateFunction(recipeObj)
 }

 function handlebarsSetup() {
   Handlebars.registerHelper('displayIngredient', function(ingredient) {
     return new Handlebars.SafeString('<li name="shown-recipe-ingredients">' + ingredient +'</li>')
   })

   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)
   Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)
 }

 function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
   initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
