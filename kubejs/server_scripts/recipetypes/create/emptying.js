onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/create/emptying/';
  const recipes = [
    /*{
      input: 'item',//Input item
      container: 'item',//Output items
      fluid: Fluid.of('fluid', value),//Output fluid，fluid  value
      id: 'id'
    }*/
  ];
  recipes.forEach((recipe) => {
    event.recipes.create.emptying([recipe.fluid, recipe.container], recipe.input).id(recipe.id);
  });
});