<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Mocha</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="node_modules/mocha/mocha.css" />
  </head>
  <body>

    <!-- 'main'is where the recipe-form-template will go -->
    <main id="main">

    </main>

<!-- Recipte form template -->
    <script id="recipe-form-template" type="text/x-handlebars-template">
      <!-- onsubmit and return false prevents page refresh -->
      <form id="recipe-form" onsubmit="createRecipe(); return false;">
        {{name}} <input type=text id="recipe-name"><br>
        {{description}} <textarea type="text" id="recipe-description"></textarea><br>
        {{#each ingredients}}
        {{ingredient}} <input type="text" id="name" name="ingredients"><br>
        {{/each}}
        {{submit}} <input type="submit"  value="Submit">
      </form>
    </script>

<!-- create a partial template -->

<!-- Collecting input from form -->
<!-- An element to put the template in once it's rendered -->
<!-- <main id="main"></main> -->

<!-- Create div in which to put template -->
  <div class="template-wrap">
    <div id="recipe-container">
    </div>
  </div>

<!-- create template -->
  <script id="recipe-template" type="text/x-handlebars-template">
    <div id="recipe">
      <h1>Recipe</h1>
      <p style="color: red">{{name}}</p>

      <!-- partial for description and ingredients-->
      <div>{{> recipeDetailsPartial}}</div>

      <!-- need to build displayEditForm() -->
      <footer><a href="#" onclick="displayEditForm();">Edit Recipe</a></footer>
    </div>
  </script>

  <!-- partial recipe details template -->
  <script id="recipe-details-partial" type="text/x-handlebars-template">
    <p style="color: blue">{{description}}</p>
    {{#each ingredients}}
    {{displayIngredient}}
    {{/each}}
  </script>


<!-- Import the Handlebars library in your app by inserting the following <script> before the <script> tag that references your main.js file -->
    <script src="node_modules/handlebars/dist/handlebars.min.js"></script>
    <script src="index.js"></script>
    <!-- Open this file and call `mocha.run()` in console to run tests -->
    <div id="mocha"></div>
    <script src="node_modules/mocha/mocha.js"></script>
    <script src="node_modules/expect/umd/expect.min.js"></script>
    <script>mocha.setup('bdd');</script>
    <script src="test/index-test.js"></script>
  </body>
</html>

<!-- index.js-->
function init() {
  //put any page initialization/handlebars initialization here
  createFormTemplate()
  // register recipeDetailsPartial
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)

  // register displayIngredient helper
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    // I'll gather the input, and iterate
    return new Handlebars.SafeString("<p>" + this.ingredient +"</p>")
  })
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

// initiate createRecipe()
function createFormTemplate() {
  // Define the date to be put into the form
  var form = {
    name: 'Name:',
    description: "Description:",
    ingredients: [
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
  ]
};

  // Grab the template script
  var formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
// Put the data inside the form template
  var formHTML = formTemplate(form);
  document.getElementsByTagName("main")[0].innerHTML += formHTML;
}


// createRecipe()
function createRecipe(){
  // Grab and compile template from index.html
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);

  // Define data variable, user input
  // moved outside of createRecipe() function
  var recipeFromInput = {
      name: document.getElementById("recipe-name").value,
      description: document.getElementById("recipe-description").value,
      ingredients: [
        {ingredient: document.getElementsByName("ingredients")[0].value},
        {ingredient: document.getElementsByName("ingredients")[1].value},
        {ingredient: document.getElementsByName("ingredients")[2].value},
        {ingredient: document.getElementsByName("ingredients")[3].value},
        {ingredient: document.getElementsByName("ingredients")[4].value},
      ]
    };
  // recipeName is getting here with the correct value

  // Now we populate our template with our date
  var recipeHTML = recipeTemplate(recipeFromInput);

  var recipeContainer = document.getElementById("recipe-container");
  recipeContainer.innerHTML = recipeHTML

}

// displayEditForm()
function displayEditForm() {
  var editForm = {
    name: 'Name:',
    description: "Description:",
    ingredients: [
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
    {ingredient: "Ingredient:"},
  ]
};

  // Grab the template script
  var editFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
// Put the data inside the form template
  var editFormHTML = editFormTemplate(editForm);
  document.getElementsByTagName("main")[0].innerHTML += editFormHTML;
}
