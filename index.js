function init() {
  //put any page initialization/handlebars initialization here
  helperSetter()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
   var recipe = recipeFormValues()
   var recipeTemplate = document.getElementById("recipe-template").innerHTML
   var template = Handlebars.compile(recipeTemplate);
    document.getElementsByTagName("main").innerHTML = template(recipe);
}

function updateRecipe(){
  var recipe = recipeFormValues()
   var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
    document.getElementsByTagName("main").innerHTML = recipeTemplate(recipe);
}

function displayEditForm(){
    var ingredientsNodes = document.getElementsByName('ingredients');
    var ingredients = []
      for(var i=0; i < ingredientsNodes.length;i++){
        if (ingredientsNodes[i] !== ""){
          ingredients.push(ingredientsNodes[i])
        }
      }
    var name = document.getElementById("nameHeader");
    var description = document.getElementById("recipeDescription");
    var recipe = {name, description, ingredients, submitAction: "createRecipe()"}
      
    var editTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    document.getElementsByName("main").innerHTML = editTemplate(recipe);
}


function recipeFormValues(){
    var ingredientsNodes = document.getElementsByName('ingredients');
    var ingredients = []
      for(var i=0; i < ingredientsNodes.length;i++){
        if (ingredientsNodes[i].value !== ""){
          ingredients.push(ingredientsNodes[i].value)
        }
      }
     var name = document.getElementById('name').innerHTML;
     var description = document.getElementById('description').innerHTML;
      var recipe = {name, ingredients, description}
      return(recipe) 
}

function helperSetter(){
  //helper functions 
  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML);
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString("<li name='ingredientsList'>" + ingredient + "</li>")
  });
}

function initForm(){
  var template = document.getElementById("recipe-form-template").innerHTML;
  var recipeTemplate = Handlebars.compile(template)
  document.getElementsByTagName("main")[0].innerHTML = recipeTemplate({'submitAction': 'createRecipe()'})
}
