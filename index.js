function init() {
  addFormToPage();
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})



function formIngredientHTML(ingredient = ''){
  return `<label for='ingredient'>Ingredient: </label><input type='text' class='ingredient' name="ingredient" value='${ingredient}'><br>`
}

function addFormToPage(args){
  let main = document.querySelector('main');
  
  const formTemplateHTML = document.querySelector('#recipe-form-template').innerHTML;
  const formTemplateFn = Handlebars.compile(formTemplateHTML);
  console.log(args)
  const formHMTL = formTemplateFn(args);
  main.innerHTML = formHMTL;
}

function handleSubmit(){
  event.preventDefault;
  let nameElem = document.getElementsByName('name')[0];
  let descriptionElem = document.getElementsByName('description')[0];
  let ingredientsElem = document.getElementsByName('ingredient');
  let name = nameElem.value;
  let description = descriptionElem.value;
  let ingredients = [];
  for(let i = 0; i < ingredientsElem.length; i++){
    if(ingredientsElem[i].value != '' ){
      ingredients.push({ingredient: ingredientsElem[i].value});
    }
  }
  show(name, description, ingredients);

}

function show(name, description, ingredients){
  event.preventDefault();
  let main = document.querySelector('main');
  let recipeTemplateHTML = document.querySelector('#recipe-template').innerHTML;
  let recipeTemplateFn = Handlebars.compile(recipeTemplateHTML);
  let recipe = recipeTemplateFn({name: name, description: description, ingredients: ingredients})
  main.innerHTML = recipe;
}

function addIngredientToForm(){
  let form = document.querySelector('form');
  let input = document.createElement('input');
  let label = document.createElement('label');
  let br = document.createElement('br');
  label.innerHTML = 'Ingredient: '
  input.type = 'text';
  input.class = 'ingredient';
  input.name = 'ingredient';
  let length = form.childElementCount;
  form.insertBefore(input, form.lastElementChild);
  form.insertBefore(label, input);
  form.insertBefore(br, form.lastElementChild);
}

function displayEditForm(){
  let name = {name: document.querySelector('header#recipeName').innerHTML};
  let description = {description: document.querySelector('p#recipeDescription').innerHTML};
  let ingredientsList = document.querySelectorAll('div#recipeIngredients ul li');
  let ingredients = [];
  for(let i = 0; i < ingredientsList.length; i++){
    ingredients.push({ingredient: ingredientsList[i].innerHTML});
  }
  // let args = {...name, ...description, ingredients: ingredients};
  let args = Object.assign({}, name, description, {ingredients: ingredients})
  addFormToPage(args);
}


Handlebars.registerHelper('form_ingredients', function(){
  let ingredientsHTML = ''
  let ingredients = this.ingredients;
  if(!ingredients){
    for(let i = 0; i < 5; i++){
      ingredientsHTML += formIngredientHTML();
    }
  }else{
    for(ingredient of ingredients){
      ingredientsHTML += formIngredientHTML(ingredient.ingredient);
    }
  }
  return new Handlebars.SafeString(ingredientsHTML);
});

Handlebars.registerHelper('displayIngredient', function(ingredient){
  return ingredient;
})

Handlebars.registerPartial('recipeDetailsPartial', document.querySelector('#recipe-details-partial').innerHTML)
