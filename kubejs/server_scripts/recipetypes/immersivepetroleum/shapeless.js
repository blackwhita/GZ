onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/immersivepetroleum/shapeless/';
    const recipes = [
        /*{
            output: 'item',
            inputs: ['item'],
            id: `${id_prefix}id`
        }*/
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
