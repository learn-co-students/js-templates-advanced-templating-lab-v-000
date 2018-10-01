function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerHelper('displayIngredient', function(){
    return Handlebars.SafeString(this.ingredients);
  });
  Handlebars.registerPartial("recipeDetailsPartial",document.getElementById('recipe-details-partial').innerHTML);
  Handlebars.registerPartial("recipeFormPartial",document.getElementById('recipe-details-partial').innerHTML);

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// Handlebars.registerHelper('ingredient_body', function() {
//   if(this.state === "closed") {
//     return new Handlebars.SafeString(this.body)
//   } else {
//     return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
//   }
// })


// Handlebars.registerPartial(displayIngredient,document.getElementById('recipe-details-partial').innerHTML);
//
//
// function displayIngredient(){
//
// }

function createRecipe(){
 var template = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
 let ing = [];
 document.getElementsByName('ingredients').map(x => ing.push(x.value));
 let description = document.getElementById('description').value;
 let name = document.getElementById('name').value;
 var data = {name: name, description: description, ingredients: ing}
 var result = template(data);
 let templateFn = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
 
 recipes.innerHTML[0] += result;
}

function updateRecipe(){
 var template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

}

// function recipeDetailsPartial(){
//
// }

function displayEditForm(){

}
