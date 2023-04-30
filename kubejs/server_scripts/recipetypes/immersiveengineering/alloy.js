onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/immersiveengineering/alloy/';
    const recipes = [
        /*{
            inputs: [Ingredient.of('3x item'), 'item'],//import三个item  和一个item  
            output: Item.of('3x item'),//export三个item  
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]).id(recipe.id);
    });
});