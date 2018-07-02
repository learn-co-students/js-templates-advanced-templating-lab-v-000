  function handlebars(){
    Handlebars.registerHelper('displayIngredient', function(ingredient){
      return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>");
    })

    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

    Handlebars.registerPartial("recipeFormPartial", document.getElementById("recipe-form-partial").innerHTML);
  }

  function form(){
    var recipeFormTemplateSource = document.getElementById("recipe-form-template").innerHTML;
    var template = Handlebars.compile(recipeFormTemplateSource);
    document.querySelector("main").innerHTML = template({'submitAction': 'createRecipe()'});
   }

   function createRecipe(){
     var recipeTemplate = document.getElementById("recipe-template").innerHTML;
     var template = Handlebars.compile(recipeTemplate);

     var name = document.getElementById("name").value;
     var description = document.getElementById("description").value;
     var ingredientsList = document.getElementsByName("ingredients")
     var ingredients = [];
     for(let i = 0; i < ingredientsList.length; i++){
         ingredients.push(ingredientsList[i].value)
       }
     var contents = {name, description, ingredients}
     document.querySelector("main").innerHTML += template(contents)
   }

   function updateRecipe() {
     var recipeTemplate = document.getElementById("recipe-template").innerHTML
     var template = Handlebars.compile(recipeTemplate)
     var name = document.getElementById("name").value;
     var description = document.getElementById("description").value;
     var ingredientsList = document.getElementsByName("ingredients")
     var ingredients = [];
     for(let i = 0; i < ingredientsList.length; i++){
         ingredients.push(ingredientsList[i].value)
       }
     var contents = {name, description, ingredients}
     document.getElementById("main").innerHTML = template(contents)
   }

   function displayEditForm(){
     var editForm = document.getElementById("recipe-form-template").innerHTML;
     var template = Handlebars.compile(editForm);
     var name = document.getElementById("recipeName").innerText;
     var description = document.getElementById("recipeDescription").innerText;
     var ingredientsList = document.getElementsByName("ingredientsList")
     var ingredients = [];
     for(let i = 0; i < ingredientsList.length; i++){
         ingredients.push(ingredientsList[i].innerText)
       }

     var contents = {name, description, ingredients, submitAction: 'createRecipe()'}
     document.querySelector("main").innerHTML = template(contents)
   }


   function init(){
     handlebars();
     form();
   }

 document.addEventListener("DOMContentLoaded", function(event) {
   init()
 })