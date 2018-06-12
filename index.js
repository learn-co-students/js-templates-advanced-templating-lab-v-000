function init() {
  //put any page initialization/handlebars initialization here
  document.addEventListener("DOMContentLoaded", function(event) {
    init()
  })

  const recipe = {
    name: "",
    description: "",
    ingredient1: {name: ""},
    ingreident2: {name: ""},
    ingredient3: {name: ""},
    ingredient4: {name: ""},
    ingredient5: {name: ""}
  };

    const formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
    const formHTML = formTemplate({method: "createRecipe(); return false;", recipe: recipe});

    document.getElementsByTagName('main')[0].innerHTML += formHTML;

    Handlebars.registerPartial(
      'recipeFormPartial', document.getElementById('recipe-form-template').innerHTML
    );

    Handlebars.registerPartial(
      'recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML
    );

    Handlebars.registerHelper('displayIngredient', function() {
      return new Handlebars.SafeString("<li>" + this.name + "</li>");
    });
  }

  let recipeId = 0;

  function createRecipe() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const ingredient_names = document.getElementsByName('ingredient');

    const ingredients = [];

    for (let i = 0; i < ingredient_names.length; ++i) {
      const ing_name = ingredient_names[i].value;

      if (ing_name != "") {
        ingredients.push({name: ing_name});
      }
    }

    const recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

    const recipeHTML = recipeTemplate(
      {id: "recipe" + recipeId++, name: name, description: description, ingredients: ingredients}
    );

    document.getElementsByTagName('main')[0].innerHTML += recipeHTML;
  }

  function displayEditForm() {
    const name = document.getElementsByClassName('recipe-name')[0].innerHTML;
    const desc = document.getElementsByClassName('recipe-desc')[0].innerHTML;
    const ingredients = document.querySelectorAll('.recipe-ingredients li');

    const ingredient_names = ["", "", "", "", ""];

    for (let i = 0; i < ingredients.length; i++) {
      const ingredient = ingredients[i].innerHTML;

      if (ingredient != "") {
        ingredient_names[i] = ingredient;
      }
    }

    const recipe = {
      name: name,
      description: desc,
      ingredient1: {name: ingredient_names[0]},
      ingredient2: {name: ingredient_names[1]},
      ingredient3: {name: ingredient_names[2]},
      ingredient4: {name: ingredient_names[3]},
      ingredient5: {name: ingredient_names[4]}
    };

    const formTemplate = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML);
    const formHTML = formTemplate({method: "updateRecipe(); return false;", recipe: recipe});

    const formDiv = document.createElement('div');
    formDiv.className = "recipe-edit-form";
    formDiv.innerHTML += formHTML;

    document.getElementsByTagName('main')[0].appendChild(formDiv);
  }

  function updateRecipe() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const ingredient_names = document.getElementsByName('ingredient');

    const ingredients = [];

    for (let i = 0; i < ingredient_names.length; ++i) {
      const ing_name = ingredient_names[i].value;

      if (ing_name != "") {
        ingredients.push({name: ing_name});
      }
    }

    const recipeTemplate = Handlebars.compile(document.getElementById('recipe-template').innerHTML);

    const recipeHTML = recipeTemplate(
      {id: "recipe" + recipeId++, name: name, description: description, ingredients: ingredients}
    );

    document.getElementsByTagName('main')[0].innerHTML += recipeHTML;

  }
