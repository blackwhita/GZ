onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/immersiveengineering/metal_press/';
    const recipes = [
        /*{
            output: 'item',//Output items
            input: 'item',//Input item
            mold: 'mold',//mould
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id);
    });
});