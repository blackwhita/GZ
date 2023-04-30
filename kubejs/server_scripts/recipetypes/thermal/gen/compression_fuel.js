onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/thermal/compression_fuel/';
    const recipes= [
        /*{ 
            fluid: Fluid.of('fluid', value),//Input fluid，Input quantity
            energy: value, //Export can value
            id: 'id'
        }*/
    ]
    recipes.forEach((recipe) => {
            event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy).id(recipe.id)
    });
});
