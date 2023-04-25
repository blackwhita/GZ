onEvent('recipes', (event) => {
    const recipes = [
        /*{
            output: 'item',
            inputs: ['item'],
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
