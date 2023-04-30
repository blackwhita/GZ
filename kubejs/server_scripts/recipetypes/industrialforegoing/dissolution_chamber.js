onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/industrialforegoing/dissolution_chamber/';
    const recipes = [
        /*{
            inputs: [//Input item
                'item', 'item', 'item',
                'item', 'item',
                'item', 'item', 'item',
            ],
            inputFluid: 'fluid',//Input fluid
            inputFluidAmount: value,//Input fluid value
            processingTime: value,//consume time 
            outputItem: { item: 'item', count: value },//Output items，Output quantity
            outputFluid: 'fluid',//Output fluid
            outputFluidAmount: value,//Output fluid value
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            .id(recipe.id);
    });
});