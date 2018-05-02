function init() {
  //put any page initialization/handlebars initialization here
  // Handlebars.registerPartial("recipeDetailsPartial", $("#recipe-details-partial").html());
  Handlebars.registerPartial("recipeDetailsPartial", document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    if(ingredient) {
      return new Handlebars.SafeString(ingredient.name)
    }

  })

  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  const recipe = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    ingredients: [
      {name: document.getElementsByName("ingredients")[0].value},
      {name: document.getElementsByName("ingredients")[1].value},
      {name: document.getElementsByName("ingredients")[2].value},
      {name: document.getElementsByName("ingredients")[3].value},
      {name: document.getElementsByName("ingredients")[4].value}
    ]
  }

  // const recipe = {
  //   name: "recipe 1",
  //   description: "description 1",
  //   ingredients: [{name: 'chicken'}, {name: 'eggs'}, {name: 'milk'}, {name: 'butter'}, {name: 'salt'}]
  // }

  const templateScript = document.getElementById("recipe-template").innerHTML;

  const template = Handlebars.compile(templateScript);
  const result = template(recipe);

  document.getElementById("recipe").innerHTML = result
}


function displayEditForm() {
  const htmlIngredientArray = document.getElementById("recipe-ingredients").getElementsByTagName("li")
  const ingredientArray = Array.prototype.slice.call(htmlIngredientArray)

  const ingredientObjects = ingredientArray.map(function(ingredient) {
     let item = { };
     item.name = ingredient.innerText;

     return item;
   });

  const recipe = {
    name: document.getElementById("recipe-name").innerHTML,
    description: document.getElementById("recipe-description").innerHTML,
    ingredients: [
      ingredientObjects[0],
      ingredientObjects[1],
      ingredientObjects[2],
      ingredientObjects[3],
      ingredientObjects[4]
    ]
  }

  const templateScript = document.getElementById("recipe-form-template").innerHTML;
  const template = Handlebars.compile(templateScript);
  const result = template(recipe);

  document.getElementById("recipe").innerHTML = result
}

function updateRecipe() {
  const ingredientObjects = Array.prototype.slice.call(document.getElementsByName("update-ingredients")).map(function(ingredient) {
     let item = { };
     if(ingredient.innerText === "") {
       item.name = ingredient.value;
     } else {
       item.name = ingredient.innerText;
     }
     return item;
   });


  let theName = ""
  let theDescription = ""

  if(document.getElementById("update-name")) {
    theName = document.getElementById("update-name").value
    theDescription = document.getElementById("update-description").value
  } else {
    theName = document.getElementById("recipe-name").innerText
    theDescription = document.getElementById("recipe-description").innerText
  }

  const recipe = {
    name: theName,
    description: theDescription,
    ingredients: [
      ingredientObjects[0],
      ingredientObjects[1],
      ingredientObjects[2],
      ingredientObjects[3],
      ingredientObjects[4]
    ]
  }

  const templateScript = document.getElementById("recipe-template").innerHTML;

  const template = Handlebars.compile(templateScript);
  const result = template(recipe);

  document.getElementById("recipe").innerHTML = result
}
