function initForm() {
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function createRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function updateRecipe() {
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm() {
  var name = document.getElementById("nameHeader").innerText
  var description = document.getElementById("recipeDescription").innerText
  var ingredientsNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }

  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals() {
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for(var i=0;i<ingredientsNodes.length;i++) {
    if(ingredientsNodes[i].value !== "") {
      ingredients.push(ingredientsNodes[i].value)
    }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}

function handlebarsSetup() {
  //put any handlebars registrations here.
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}


function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})




//   //put any page initialization/handlebars initialization here
// handlebarsSetup();
// initForm(); 
// }

// //   var formTemplate = document.getElementById(" ").
// // }
// // document.addEventListener("DOMContentLoaded", function(event) {
// //   init()
// // })

// function initForm() {
//   var formTemplate = document.getElementById("recipe-form-template").innerHTML
//   var template = Handlebars.compile(formTemplate)
//   document.getElementsByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
// }


// function createRecipe() {
//   var recipe = recipeObject();
//   // {
//   //   name: {{}},
//   //   recipe: {{}},
//   //   ingredients: {{}}
//   // }

//   var recipeTemplate = document.getElementById("recipe-form").innerHTML;
//   var template = Handlebars.compile(recipeTemplate);
//   document.getElementById("main").innerHTML = template(recipe);
// }

// function recipeObject() {
//   var name = document.getElementById("name").value;
//   var description = document.getElementById("description").value;
//   var ingredients = [];
//   var ingredientsAsNodeObject = document.getElementsByName("ingredients");

//   for(let i=0; i < ingredientsAsNodeObject.length; i++ ) {
//       if (ingredientsAsNodeObject.value !=='') {
//         ingredients.push(ingredientsAsNodeObject[i].value);
//         }
//       }

//   var recipe = (name, description, ingredients);
//   return recipe   
//   }

//   function handlebarsSetup() {

//      Handlebars.registerHelper('displayIngredient', function(ingredient) {
//       return new Handlebars.Safestring('li name="ingredientsLst">' + ingredient + '</li>' )

//     Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

//     Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

   
//     })
//   }


// // gEBName returns a collection of al lthe elements with the same name (the value of the name attribute and returns them as a NodeList object. --accessed by index numbers length of nodelist..



// // function displayEditForm

// // function updateRecipe 