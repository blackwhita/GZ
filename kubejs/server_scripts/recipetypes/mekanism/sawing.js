onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/mekanism/sawing/';
    const recipes = [
        /*{
            input: 'item',//Input item
            output: Item.of('item', value),//Output items，Output quantity
            extraOutput: Item.of('item').chance(value),//Byproducts，exportprobability（<=1）
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.sawing(recipe.output, recipe.input, recipe.extraOutput).id(recipe.id);
    });
});
