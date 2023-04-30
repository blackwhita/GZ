onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/pneumaticcraft/refinery/';
    const recipes = [
        /*{
            input: { type: 'pneumaticcraft:fluid', fluid: 'fluid', amount: value },//Input fluid，Input quantity
            temperature: { min_temp: value },//Minimum temperature//max_temp: value
            results: [//Output fluid，Output quantity 
                { fluid: 'fluid', amount: value },
            ],
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:refinery';
        event.custom(recipe).id(recipe.id);
    });
});
