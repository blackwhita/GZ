onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/occultism/spirit_fire/';
    const recipes = [
        /*{
            input: 'item',//Input item
            output: 'item',//Output items
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:spirit_fire',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Ingredient.of(recipe.output).toJson()
            })
            .id(recipe.id);
    });
});
