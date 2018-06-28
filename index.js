function init() {
  //put any page initialization/handlebars initialization here
  var recipe = {
    description: 'smoothie',
    ingredients: [
      {name: 'milk'},
      {name: 'banana'},
      {name: 'honey'},
      {name: 'peanutbutter'},
      {name: 'blueberries'},
    ]
  }
  Handlebars.registerHelper('displayIngredient', function(items) {
    return items.name
    // var out = "<ul>";
    // for(var i=0; i < items.length; i++){
    //   out = out + "<li>" + options.fn(ingredients[i]) + "</li>";
    // }
    // return out + "</ul>";
  });

// EXAMPLE
  // var context = {
  //   author: {firstName: "Alan", lastName: "Johnson"},
  //   body: "I Love Handlebars",
  //   comments: [{
  //     author: {firstName: "Yehuda", lastName: "Katz"},
  //     body: "Me too!"
  //   }]
  // };
  // Handlebars.registerHelper('fullName', function(person) {
  //   return person.firstName + " " + person.lastName;
  // });


  var template = Handlebars.compile(document.getElementById("recipe-form").innerHTML);
  var html = template(recipe);

}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template({description, ingredients});






//Handlebars.registerHelper('comment_body', function() {
//  if(this.state === "closed") {
//  return new Handlebars.SafeString(this.body)
//  } else {
//    return new Handlebars.SafeString("<strong>" + this.body + "</strong>")
//  }
//})
