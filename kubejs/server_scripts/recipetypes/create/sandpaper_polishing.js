onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/create/sandpaper_polishing/';
    const recipes = [
        /*{
            input: Item.of('item'),//Input item
            output: Item.of('item'),//Output items
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        event.recipes.create.sandpaper_polishing(recipe.output, recipe.input).id(recipe.id);
    });
});