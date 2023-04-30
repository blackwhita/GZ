onEvent('recipes', (event) => {
  const id_prefix = 'ico:recipetypes/pneumaticcraft/heat_properties/';
    const recipes = [
        /*{
            fluid: 'fluid',//fluid //block
            temperature: value,//The natural heat value of fluid will be based on this heat/cooling of things
            thermalResistance: value,//The speed of transferring heat value
            transformCold: { block: 'block' },//Conversion during subcooling
            transformHot: { block: 'block' },//Conversion during overheating
            heatCapacity: value,//Heat value transmitted before conversion
            id: 'id'
        }*/
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe).id(recipe.id);
    });
});