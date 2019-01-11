// $ --> variables containing dom objects

function init() {
  const recipeFormHTMLString = document.getElementById('recipe-form-template').innerHTML
  const formDescriberFn = Handlebars.compile(recipeFormHTMLString)
  const finishedRecipeForm = formDescriberFn({
    nameInput: "",
    descriptionInput: "",
    ingredientsInputs: ["","","","",""],
  })
    document.getElementById('main').innerHTML = finishedRecipeForm

   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
   Handlebars.registerHelper('displayIngredient', function(ingredientString) {
     ingredientString = Handlebars.Utils.escapeExpression(ingredientString)
     if (ingredientString !== undefined && ingredientString !== "") {
      return new Handlebars.SafeString(`<li name="ingredients">` + ingredientString + `</li>`)
    } else {
      return new Handlebars.SafeString("")
    }
   })
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
  const recipeName = document.getElementById('name').value
  const recipeDescription = document.getElementById('description').value
  const ingredientsFields = Array.from(document.getElementsByName('ingredients'))

  const ingredientsStrings = ingredientsFields.map($input => $input.value)

  const recipeTemplateString = document.getElementById('recipe-template').innerHTML
  const recipeDescriberFn = Handlebars.compile(recipeTemplateString)
  const finishedRecipeHTML = recipeDescriberFn({
    name: recipeName,
    description: recipeDescription,
    ingredients: ingredientsStrings,
  })
  document.getElementById('main').innerHTML = finishedRecipeHTML
}

function displayEditForm() {
  const recipeName = document.getElementById('recipeName').innerText
  const recipeDescription = document.getElementById('recipeDescription').innerText
  const ingredientsLIs = Array.from(document.getElementsByName('ingredients'))
  const ingredientsStrings = ingredientsLIs.map($li => $li.innerText)

  console.log(recipeName, recipeDescription, ingredientsStrings);

  const recipeFormHTMLString = document.getElementById('recipe-form-template').innerHTML
  const formDescriberFn = Handlebars.compile(recipeFormHTMLString)
  document.getElementById('main').innerHTML = formDescriberFn({
    nameInput: recipeName,
    descriptionInput: recipeDescription,
    ingredientsInputs: ingredientsStrings,
  })
}
