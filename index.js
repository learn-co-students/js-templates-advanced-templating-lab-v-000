
  // function renderMain() {
  //   var template = Handlebars.compile(document.getElementById("main-template").innerHTML);
  //   var html = template({name: 'Gordon Ramsay'});
  // }

  var recipe = {
  name: 'chicken noodle soup'
  description: 'yummy',
  ingredients: [
    {name: 'chicken'},
    {name: 'stock'},
    {name: 'noodles'}
  ]

var template = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
var html = template(recipe);

}

Handlebars.registerHelper('displayIngredient', function() {
  <ul>
    {{#each ingredients}}
    <li>{{name}}</li>
    {{/each}}
  </ul>
})

function init() {
  //put any page initialization/handlebars initialization here
  handlebarsSetup()
  initForm()
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
