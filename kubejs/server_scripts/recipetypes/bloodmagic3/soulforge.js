/*onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/bloodmagic/soulforge/';
  const recipes = [
    {
      inputs: [//Input item
        'item',
        'item',
        'item',
        'item'
      ],
      output: 'item',//Output items
      minimumDrain: value,//Minimum willpower value
      drain: value,//consume will
      id: 'bloodmagic:soulforge/demon_crystallizer'
    }
  ];

  recipes.forEach((recipe) => {
    event.recipes.bloodmagic
      .soulforge(recipe.output, recipe.inputs)
      .minimumDrain(recipe.minimumDrain)
      .drain(recipe.drain)
      .id(recipe.id);
  });
});*/