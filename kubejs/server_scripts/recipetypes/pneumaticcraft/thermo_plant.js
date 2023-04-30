onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/pneumaticcraft/thermo_plant/';
    const recipes = [
        /*{
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//Input fluid，Input quantity
            item_input: { item: 'item' },//Input item
            fluid_output: { fluid: 'fluid', amount: value },//Input fluid，Input quantity
            item_output: { item: 'item', count: value },//Output items，Output quantity
            pressure: value,//  Pressure value
            speed: value,//velocity
            exothermic: false,//whether or not heat release
            temperature: { min_temp: value },//Minimum temperature//max_temp: value
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});