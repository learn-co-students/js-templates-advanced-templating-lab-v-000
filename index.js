
function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

  Handlebars.registerPartial('recipeFormPartial', document.getElementById('recipe-form-partial').innerHTML)

  Handlebars.registerHelper('displayIngredient', function(item){
    if (item.value !== "") {
      return new Handlebars.SafeString(
        '<li>' + item.value + '</li>'
      )
    }
  })
  
  const formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  const html = formTemplate({'submit': 'createRecipe(); return false;'});
  const main = document.getElementById('main')
  main.innerHTML += html

}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  const name = document.getElementById('name').value
  const description = document.getElementById('description').value
  const ingredients = document.getElementsByName('ingredients')

  const template = Handlebars.compile(document.getElementById('recipe-template').innerHTML)
  
  const html = template({name, description, ingredients})

  const main = document.getElementById('main')
  main.innerHTML += html
}

function displayEditForm() {
  const formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
  const name = document.getElementsByTagName('p')[0].innerHTML
  const description = document.getElementsByTagName('p')[1].innerHTML
  let ingredientOne;
  let ingredientTwo;
  let ingredientThree;
  let ingredientFour;
  let ingredientFive;
  if (document.getElementsByTagName('li')[0] !== undefined) {
    ingredientOne = document.getElementsByTagName('li')[0].innerHTML
  } else {
    ingredientOne = ""
  }
  if (document.getElementsByTagName('li')[1] !== undefined) {
    ingredientTwo = document.getElementsByTagName('li')[1].innerHTML
  } else {
    ingredientTwo = ""
  }
  if (document.getElementsByTagName('li')[2] !== undefined) {
    ingredientThree = document.getElementsByTagName('li')[2].innerHTML
  } else {
    ingredientThree = ""
  }
  if (document.getElementsByTagName('li')[3] !== undefined) {
    ingredientFour = document.getElementsByTagName('li')[3].innerHTML
  } else {
    ingredientFour = ""
  }
  if (document.getElementsByTagName('li')[4] !== undefined) {
    ingredientFive = document.getElementsByTagName('li')[4].innerHTML
  } else {
    ingredientFive = ""
  }
  const html = formTemplate({'submit': 'updateRecipe(); return false;', 'name': name, 'description': description, 'ingredientOne': ingredientOne, 'ingredientTwo': ingredientTwo, 'ingredientThree': ingredientThree, 'ingredientFour': ingredientFour, 'ingredientFive': ingredientFive });
  const main = document.getElementById('main')
  main.innerHTML = html
}

function updateRecipe() {
  createRecipe()
}
