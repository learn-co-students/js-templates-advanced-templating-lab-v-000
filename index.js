function init() {
    //put any page initialization/handlebars initialization here
    let formTemplate = document.getElementById("recipe-form-template").innerHTML;
    let formTemplateFn = Handlebars.compile(formTemplate);
    document.getElementById('main').innerHTML = formTemplateFn({ingredients: ['', '', '', '', '']})

    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);

    Handlebars.registerHelper('displayIngredient', function(ingredient) {
      return new Handlebars.SafeString('<li name="ingredients">'+ ingredient + '</li>');
    })

}


function handleSubmit() {
  // let recipe = {
  //   name: document.getElementById("name").value,
  //   description: document.getElementById("description").value,
  //   ingredients: document.getElementsByName("ingredients")
  // }
  var recipe = {}
 var nameNode = document.getElementById('name');
 var descriptionNode = document.getElementById('description');
 var ingredientNodes = document.getElementsByName('ingredients');
 recipe.name = nameNode.value;
 recipe.description = descriptionNode.value;
 recipe.ingredients = [];
 for(var i = 0 ; i < ingredientNodes.length ; i++) {
   recipe.ingredients.push(ingredientNodes[i].value);
 }

  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
 let result = recipeTemplate(recipe);
 document.getElementsByTagName("main")[0].innerHTML = result;
}

function displayEditForm() {
  // let recipe = {}
  // let nameElement = document.getElementById("recipeName")
  // let descriptionElement = document.getElementById("recipeDescription")
  // let ingredientElement = document.getElementsByName('ingredients');
  //
  // recipe.name = nameElement.innerHTML
  // recipe.description = descriptionElement.innerHTML
  // recipe.ingredients = []
  // for(const element of ingredientElement) {
  //   recipe.ingredients.push(ingredientElement.innerHTML);
  // }

  let recipe = {}
let nameNode = document.getElementById('recipeName');
let descriptionNode = document.getElementById('recipeDescription');
let ingredientNodes = document.getElementsByName('ingredients');
recipe.name = nameNode.innerHTML;
recipe.description = descriptionNode.innerHTML;
recipe.ingredients = [];
for(let i = 0 ; i < ingredientNodes.length ; i++) {
  recipe.ingredients.push(ingredientNodes[i].innerHTML);
}
  let formTemplate = document.getElementById("recipe-form-template").innerHTML;
  let formTemplateFn = Handlebars.compile(formTemplate);
  document.getElementById('main').innerHTML = formTemplateFn(recipe)
}



document.addEventListener("DOMContentLoaded", function(event) {
    init()
})
