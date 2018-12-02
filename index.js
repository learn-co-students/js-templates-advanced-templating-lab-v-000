// Handlebars.registerPartial('recipeDetailsPartial', function() {
//   return document.getElementById("recipe-details-partial").innerHTML
// });

// Handlebars.registerPartial('recipeDetailsPartial',document.getElementById("recipe-details-partial").innerHTML);
//
//
// Handlebars.registerHelper('displayIngredient', function(ingredient) {
//     return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
//   })



function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial',document.getElementById("recipe-details-partial").innerHTML);

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
      return new Handlebars.SafeString('<li name="ingredients">' + ingredient + '</li>')
    })

    let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
    let html = template();
    //debugger
    document.getElementsByTagName("main")[0].innerHTML = html;

}

function handleSubmit() {
  //debugger
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var ingrs = document.getElementsByName("ingredients")
  var ingredients=[]
  for(var i=0;i<ingrs.length;i++) {
      if(ingrs[i].value != "") {
      ingredients.push(ingrs[i].value)
      }
    };
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  //debugger
  var result = template({name:name, description:description, ingredients:ingredients});
  //debugger
  document.getElementsByTagName("main")[0].innerHTML = result;

}

function displayEditForm() {
  //debugger
  var name = document.getElementById("name").innerHTML;
  var description = document.getElementById("description").innerHTML;
  var ingrs = document.getElementsByName("ingredients")
  var ingredients=[]
  for(var i=0;i<ingrs.length;i++) {
      if(ingrs[i].innerText != "") {
      ingredients.push(ingrs[i].innerText)
      }
    };
  let template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);

  let html = template({name:name, description:description, ingredients});
  document.getElementsByTagName("main")[0].innerHTML = html;
  //debugger
}


document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
