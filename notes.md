Page(initial Display?)
  - Has a recipe form;(use partial)
    - form has an (id="recipe-form")
    - When the form submits => invoke handleSubmit();
      - onsubmit="handleSubmit();"
    - Form has name field
      - type="text" id="name"
    - Form has description field
      - type="text" id="description"
  - Has ingredient elements???
      -var ingredients = document.getElementsByName("ingredients")
      -expect(ingredients.length).toBeGreaterThanOrEqualTo(5)

Templates
  1. Recipe Form Template id="recipe-form-template" type="text/x-handlebars-template"

  2. Recipe Template
    - id="recipe-template" type="text/x-handlebars-template"
    - <div id="recipeName"> <p>{{name}}
    - link to 'Edit Recipe'
      - invokes 'displayEditForm()' onclick'
      - <a href="#" onclick="displayEditForm();">Edit Recipe</a>
    - recipeDetailsPartial is inside this template. {{recipeDetailsPartial}}

  3. Recipe Details Partial Template
    - id="recipe-details-partial" type="text/x-handlebars-template"
    - <div id="recipeDescription">{{description}}</div>
    - {{#each this}}
      - {{ingredient}}
      - custom helper displayIngredient('ingredient', function(){
        .........
        })
