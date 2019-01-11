function init() {
  const recipeFormHTMLString = document.getElementById('recipe-form-template').innerHTML
  const formDescriberFn = Handlebars.compile(recipeFormHTMLString)
  const finishedRecipeForm = formDescriberFn({
    name: "name",
    description: "description",
    repeat_array: [1,2,3,4,5],
  })

   Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
   Handlebars.registerHelper('displayIngredient', function(ingredientString) {
     ingredientString = Handlebars.Utils.escapeExpression(ingredientString)
     if (ingredientString !== undefined && ingredientString !== "") {
      return new Handlebars.SafeString(`<li name="ingredients">` + ingredientString + `</li>`)
    } else {
      return new Handlebars.SafeString("")
    }
   })

  const recipeTemplateString = document.getElementById('recipe-template').innerHTML
  const recipeDescriberFn = Handlebars.compile(recipeTemplateString)
  const finishedRecipeHTML = recipeDescriberFn({
    name: "name",
    description: "description"
  })
  //
  document.getElementById('main').innerHTML = finishedRecipeForm

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {

}

function displayEditForm() {
  const recipeFormHTMLString = document.getElementById('recipe-form-template').innerHTML
  const formDescriberFn = Handlebars.compile(recipeFormHTMLString)
  document.getElementById('main').innerHTML = formDescriberFn()
}
