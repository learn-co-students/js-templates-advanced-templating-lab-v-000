
function init() {
    // showForm();
    Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML);
    //put any page initialization/handlebars initialization here
  
  }

Handlebars.registerHelper('displayIngredient', function() {
  return new Handlebars.SafeString('<li>' + this.value + '</li>');
})

Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-template").innerHTML);

function createRecipe(){

    let context = {
      name: document.getElementsByName('name')[0].value,
      description: document.getElementsByName('description')[0].value,
      ingredients: document.getElementsByName('ingredients')

    }
    
    let source = document.getElementById("recipe-template").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(context);
    
    document.getElementById('recipe').innerHTML = html;
  
  }

// function showForm(){
//     let source = document.getElementById('recipe-form-template').innerHTML;
//     let template = Handlebars.compile(source);
//     let html = template();
//     document.getElementById('form-div').innerHTML = html;
//   }

document.addEventListener("DOMContentLoaded", function(event) { 
   init();
})




