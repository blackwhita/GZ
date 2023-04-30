onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/pneumaticcraft/fluid_mixer/';
    const recipes = [
        /*{
            input1: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//Input fluid1，Input quantity
            input2: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//Input fluid2，Input quantity
            item_output: { item: 'item' },//Output items
            fluid_output: { fluid: 'fluid', amount: value },//Output fluid，Output quantity
            pressure: value,//Required pressure
            time: value,//Required time
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:fluid_mixer';
        event.custom(recipe).id(recipe.id);
    });
});