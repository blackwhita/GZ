onEvent('recipes', (event) => {
  const id_prefix_1 = 'ico:recipetypes/pneumaticcraft/assembly_laser/';
  const id_prefix_2 = 'ico:recipetypes/pneumaticcraft/assembly_drill/';
    const recipes = [
        /*{
            input: { item: 'item', count: value },//Input item，Input quantity
            output: { item: 'item', count: value },//Output items，Output quantity
            program: 'program',//Assembly type
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
/*
program=(
    drill,
    laser
)
*/