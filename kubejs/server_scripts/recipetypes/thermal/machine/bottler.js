onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/thermal/bottler/';
    const recipes = [
        /*{
            input: 'item',//Input item
            fluid: Fluid.of('fluid', value),//Input fluid，Input quantity
            output: 'item',//Output items
            energy: value,//Required energy
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
