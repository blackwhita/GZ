onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/minecraft/blasting/';
    const recipes = [
        /*{
            input: 'item',//Input item
            output: 'item',//Output items
            xp: value,//Output experience
            id: 'id'
        },*/
    ];
    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});