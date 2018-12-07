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
});
