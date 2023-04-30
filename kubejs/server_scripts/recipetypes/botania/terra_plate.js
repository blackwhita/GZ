/*onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/botania/terra_plate/';
  const recipes = [
    {
      inputs: [//Input item
        { tag: 'tag' },
        { item: 'item' }
      ],
      output: { item: 'item' },//Output items//tag
      mana: value,//mana consumption
      id: 'id'
    }
  ];
  recipes.forEach((recipe) => {
    const re = event.custom({
      type: 'botania:terra_plate',
      ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
      result: Item.of(recipe.output).toJson(),
      mana: recipe.mana
    });
    if (recipe.id) {
      re.id(recipe.id);
    }
  });
});*/