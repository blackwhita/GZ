onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/industrialforegoing/laser_drill_fluid/';
    const recipes = [
        {
            output: '{FluidName:"fluie_id",Amount:value}',//Output fluidid，Output quantity
            rarity: [
                /*{
                    whitelist: {},//白名单
                    blacklist: {},//黑名单
                    depth_min: value,//最小深度，最小0
                    depth_max: value,//最大深度，最大256
                    weight: value//权重
                }*/
            ],
            pointer: value,//激光 quantity
            catalyst: { item: item },//催化剂
            entity: 'entity',//实体
            type: 'industrialforegoing:laser_drill_fluid',
            id: 'id'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});