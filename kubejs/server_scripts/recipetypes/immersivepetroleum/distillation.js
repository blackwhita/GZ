onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/immersivepetroleum/distillation/';
  const recipes = [
    /*{
      results: [//Output fluid，Output quantity
        { fluid: 'fluid', amount: value },
        { fluid: 'fluid', amount: value }
      ],
      byproducts: [{ item: 'item' }],//Output by-product items
      input: { fluid: 'fluid', amount: value },//Input fluid，Input quantity
      time: value,//Required time
      energy: value,//Required energy
      id: 'id'
    }*/
  ];

  recipes.forEach((recipe) => {
    recipe.type = 'immersivepetroleum:distillation';
    event.custom(recipe).id(recipe.id);
  });
});