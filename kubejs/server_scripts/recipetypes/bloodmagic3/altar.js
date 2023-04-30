/*onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/alchemytable/altar/';
  const recipes = [
    {
      input: 'item',//Input item
      output: 'item',//Output items
      syphon: value,//consume LP
      altarLevel: value,//Altar level
      consumptionRate: value,//LPconsult rate (speed)
      drainRate: value,//LP loss rate
      id: 'id'
    },
  ];
  recipes.forEach((recipe) => {
    event.recipes.bloodmagic
      .altar(recipe.output, recipe.input)
      .upgradeLevel(recipe.altarLevel)
      .altarSyphon(recipe.syphon)
      .consumptionRate(recipe.consumptionRate)
      .drainRate(recipe.drainRate)
      .id(recipe.id);
  });
});*/