onEvent('item.tags', (event) => {
    event
        .get('forge:dusts').add([
            'immersiveengineering:dust_aluminum',
            'immersiveengineering:dust_lead',
            'immersiveengineering:dust_silver',
            'immersiveengineering:dust_nickel',
            'immersiveengineering:dust_uranium',
            'immersiveengineering:dust_constantan',
            'immersiveengineering:dust_electrum',
            'immersiveengineering:dust_coke',
            'immersiveengineering:dust_hop_graphite',
            'immersiveengineering:dust_saltpeter',
            'thermal:ender_pearl_dust',
            'bluepower:brass_dust',
            'bluepower:tungsten_dust',
            'bluepower:zinc_dust',
            'bluepower:teslatite_dust'
        ])
        .add('#forge:dusts/flour');

    event.get('forge:dusts/lapis').add('mekanism:dust_lapis_lazuli');
    event.get('forge:dusts/netherite_scrap').add('mekanism:dust_netherite');

    event.get('forge:dusts').remove('minecraft:prismarine_shard');
    event.get('forge:dusts/prismarine').remove('minecraft:prismarine_shard');

    event.get('forge:dusts/netherite_scrap').remove('bloodmagic:sand_netherite');

    event.add('forge:dusts/flour', 'create:wheat_flour');

});
