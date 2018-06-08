function init() {
  //put any page initialization/handlebars initialization here
  var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  var html = template(recipe);
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe(){
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

}
