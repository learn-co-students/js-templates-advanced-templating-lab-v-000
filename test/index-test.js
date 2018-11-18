describe('Handlebars Templates Lab', function() {
  describe('page', function() {
    before(function() {
      init()
    })

    it('has a recipe form', function() {
      var recipeForm = document.getElementById("recipe-form")
      expect(recipeForm).toExist("Must provide a form with an id of 'recipe-form'")
      expect(recipeForm).toMatch(/onsubmit="handleSubmit()"/)
      var nameField = document.getElementById("name")
      var descriptionField = document.getElementById("description")
      expect(nameField).toExist()
      expect(descriptionField).toExist()
      var ingredients = document.getElementsByName("ingredients")
      expect(ingredients.length).toBeGreaterThanOrEqualTo(5)
    })
  })

  describe('templates', function() {
    it('has a recipe form template', function() {
      var recipeFormTemplate = document.getElementById("recipe-form-template")
      expect(recipeFormTemplate).toExist("Must provide a template with an id of 'recipe-form-template'")
      expect(recipeFormTemplate.type).toBe("text/x-handlebars-template", "Template must be of type text/x-handlebars-template");
    })
    it('has a recipe template', function() {
      var recipeTemplate = document.getElementById("recipe-template")
      expect(recipeTemplate).toExist("Must provide a template with an id of 'recipe-template'")
      expect(recipeTemplate.type).toBe("text/x-handlebars-template", "Template must be of type text/x-handlebars-template")
      expect(recipeTemplate.innerHTML).toMatch(/id="name">{{\s?name\s?}}/, "Template must have the name inside of a container with an id of 'name'")
      expect(recipeTemplate.innerHTML).toMatch(/<a.*displayEditForm().*>Edit Recipe<\/a>/, "Template must have an 'Edit Recipe' link that calls 'displayEditForm()' on click")
      expect(recipeTemplate.innerHTML).toMatch(/{{>\s?recipeDetailsPartial\s?}}/, "Template must render the recipeDetailsPartial")
    })
    it('has a recipe details partial template', function() {
      var recipeDetailsPartial = document.getElementById("recipe-details-partial")
      expect(recipeDetailsPartial).toExist("Must provide a template with an id of 'recipe-details-partial'")
      expect(recipeDetailsPartial.type).toBe("text/x-handlebars-template", "Template must be of type text/x-handlebars-template")
      expect(recipeDetailsPartial.innerHTML).toMatch(/id="description">{{\s?description\s?}}/, "Template must have the recipe's description inside of a container with an id of 'description'")
      expect(recipeDetailsPartial.innerHTML).toMatch(/{{#\s?each ingredients\s?}}/)
      expect(recipeDetailsPartial.innerHTML).toMatch(/{{\s?displayIngredient this\s?}}/, "Template must make use of displayIngredient custom helper inside the #each block helper")
      expect(recipeDetailsPartial.innerHTML).toMatch(/{{\/\s?each\s?}}/)
    })
  })

  describe('helpers and partials', function() {
    before(function() {
      init()
    })

    it('registers a displayIngredient helper', function() {
      expect(window.Handlebars.helpers).toContainKey("displayIngredient")
    })

    it('displayIngredient helper should display a list item with a name="ingredients" containing the ingredient name', function() {
      expect(window.Handlebars.helpers).toContainKey("displayIngredient")
      expect(window.Handlebars.helpers.displayIngredient('Apple').string).toBe('<li name="ingredients">Apple</li>')
    })

    it('registers a recipe details partial', function() {
      expect(window.Handlebars.partials).toContainKey("recipeDetailsPartial")
    })
  })

  describe('functions', function() {
    before(function() {
    })

    describe('handleSubmit', function() {
      it('renders the recipe template', function() {
        // load the new recipe form and fill it out
        init()
        var ingredients = document.getElementsByName("ingredients")
        var nameField = document.getElementById("name")
        var descriptionField = document.getElementById("description")
        var ingredientsValues = ["Apple", "Pear", "Orange", "Banana", "Almond Milk"]
        ingredientsValues.forEach(function(ing, index){
          ingredients[index].value = ing;
        })
        nameField.value = "Fruit Salad"
        descriptionField.value = "Yummy fruit salad"
        var spy = expect.spyOn(window.Handlebars, "compile").andCallThrough()
        // submit the form and transition to show view
        handleSubmit()
        expect(spy).toHaveBeenCalledWith(document.getElementById("recipe-template").innerHTML)
        spy.reset()
        // expect show page to properly display recipe details from form
        expect(document.getElementById('name')).toExist
        expect(document.getElementById('name').innerHTML).toMatch("Fruit Salad")
        expect(document.getElementById('description')).toExist
        expect(document.getElementById('description').innerHTML).toMatch("Yummy fruit salad")
        ingredients = document.getElementsByName("ingredients")
        ingredientsValues.forEach(function(ing, index){
          expect(ingredients[index].innerHTML).toEqual(ing)
        })
      })
    })

    describe('displayEditForm', function() {
      it('renders the form template with values pre-filled', function() {
        // load the new form and fill it out
        init()
        var ingredients = document.getElementsByName("ingredients")
        var nameField = document.getElementById("name")
        var descriptionField = document.getElementById("description")
        var ingredientsValues = ["Apple", "Pear", "Orange", "Banana", "Almond Milk"]
        ingredientsValues.forEach(function(ing, index){
          ingredients[index].value = ing;
        })
        nameField.value = "Fruit Salad"
        descriptionField.value = "Yummy fruit salad"
        // submit the form and transition to show view
        handleSubmit()
        var spy = expect.spyOn(window.Handlebars, "compile").andCallThrough()
        // simulate clicking the link to edit
        displayEditForm()
        expect(spy).toHaveBeenCalledWith(document.getElementById("recipe-form-template").innerHTML)
        spy.reset()
        // the form should be pre-filled with previous values
        ingredients = document.getElementsByName("ingredients")
        nameField = document.getElementById("name")
        descriptionField = document.getElementById("description")
        expect(nameField.value).toEqual("Fruit Salad", "Got: '" + nameField.value + "' Expected 'Fruit Salad' Make sure that the name field is pre-filled in the edit form")
        expect(descriptionField.value).toEqual("Yummy fruit salad", "Got: '" + descriptionField.value + "' Expected: 'Yummy fruit salad' Make sure that the description field is pre-filled in the edit form")
        ingredientsValues.forEach(function(ing, index){
          expect(ingredients[index].value).toEqual(ing, "Got: '" + ingredients[index].value + "' Expected: '" + ing + "' Make sure that the ingredients fields are pre-filled in the edit form");
        })
        // fill in form with new values and submit
        nameField.value = "Fruity Fruit Salad"
        descriptionField.value = "Yummiest fruit salad"
        ingredients[2].value = "Strawberry"
        // update value in our array for expectations in next step
        ingredientsValues[2] = "Strawberry"
        // simulate submitting the edit form
        handleSubmit()
        // show page should contain new values for recipe
        expect(document.getElementById('name')).toExist
        expect(document.getElementById('name').innerHTML).toMatch("Fruity Fruit Salad")
        expect(document.getElementById('description')).toExist
        expect(document.getElementById('description').innerHTML).toMatch("Yummiest fruit salad")
        ingredients = document.getElementsByName("ingredients")
        ingredientsValues.forEach(function(ing, index){
          expect(ingredients[index].innerHTML).toEqual(ing)
        })
      })
    })
  })

});
