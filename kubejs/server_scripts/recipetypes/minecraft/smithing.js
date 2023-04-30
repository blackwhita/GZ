//
onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/minecraft/smithing/';
    const recipes = [
        /*{
            input1: 'item',//Input item1
            input2: 'item',//Input item2
            output: 'item',//Output items
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});