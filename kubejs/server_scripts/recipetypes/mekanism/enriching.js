onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/mekanism/enriching/';
    const recipes = [
        /*{
            input: 'item',//Input item
            output: 'item',//Output items
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
