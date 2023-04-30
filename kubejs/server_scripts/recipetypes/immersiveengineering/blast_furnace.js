onEvent('recipes', (event) => {
    const id_prefix = 'ico:recipetypes/immersiveengineering/blast_furnace/';
    const recipes = [
        /*{
            output: 'item',//Output items
            input: 'item',//Input item
            slag: 'slag',//炉渣位置Output items 
            id: 'id'
        }*/
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.blast_furnace(recipe.output, recipe.input, recipe.slag).id(recipe.id);
    });
});