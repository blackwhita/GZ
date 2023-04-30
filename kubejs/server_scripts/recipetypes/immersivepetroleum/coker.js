onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/immersivepetroleum/coker/';
  const recipes = [
    /*{
        result: { item: 'item' },//Output items
        resultfluid: { fluid: 'fluid', amount: value },//Output fluid，Output quantity
        input: {//Input item，import quantity
            base_ingredient: { item: 'item' },
            count: value
        },
        inputfluid: { fluid: 'fluid', amount: value },//Input fluid，Input quantity
        time: value,//Required time
        energy: value,//Required energy
        id: 'id'
    }*/
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'immersivepetroleum:coker';
    event.custom(recipe).id(recipe.id);
  });
});