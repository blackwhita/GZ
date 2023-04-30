onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/create/mechanical_crafting/';
  const recipes = [
    /*{
      output: 'item',//Output items
      pattern: ['AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA', 'AAAAAAA',],//合成表可以无限大
      key: {
        A: 'item',
      },
      id: 'id'
    }*/
  ];
  recipes.forEach((recipe) => {
    event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
  });
});