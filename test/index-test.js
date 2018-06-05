describe('Handlebars Templates Lab', function() {
  describe('page', function() {
    before(function() {
      init()
    })

    it('has a recipe form', function() {
      var recipeForm = document.getElementById("recipe-form")
      expect(recipeForm).toExist("Must provide a form with an id of 'recipe-form'")
      expect(recipeForm).toMatch(/onsubmit="createRecipe()"/)
      var ingredients = document.getElementsByName("ingredients")
      expect(ingredients.length).toBeGreaterThanOrEqualTo(5)
      var nameField = document.getElementById("name")
      expect(nameField).toExist()
    })
  })

  

});
