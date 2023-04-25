onEvent('item.tags', (event) => {
    event.get('forge:ingots/radioactive').add('#forge:ingots/uraninite').add('#forge:ingots/uranium');
    event.add('forge:ingots', [
        'bloodmagic:ingot_hellforged',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:ingot_constantan',
        'immersiveengineering:ingot_electrum',
        'immersiveengineering:ingot_hop_graphite',
        'immersiveengineering:ingot_lead',
        'immersiveengineering:ingot_nickel',
        'immersiveengineering:ingot_silver',
        'immersiveengineering:ingot_uranium',
        'minecraft:netherite_scrap',
        'occultism:iesnium_ingot',
        'bluepower:brass_ingot',
        'bluepower:tungsten_ingot',
        'bluepower:zinc_ingot'
    ]);
    event.add('forge:ingots/sky', ['naturesaura:sky_ingot']);
    event.add('forge:ingots/tainted_gold', ['naturesaura:tainted_gold']);
    event.add('forge:ingots/infused_iron', ['naturesaura:infused_iron']);
    const IngotTag = [
        //bluepower
        { id: 'bluepower:purple_alloy_ingot', type: 'purple_alloy' },
        { id: 'bluepower:red_alloy_ingot', type: 'red_alloy' },
        { id: 'bluepower:blue_alloy_ingot', type: 'blue_alloy' },
        { id: 'bluepower:tungsten_carbide', type: 'tungsten_carbide' },
        //botania
        { id: 'botania:gaia_ingot', type: 'gaia' },
        //create
        { id: 'create:andesite_alloy', type: 'andesite_alloy' },
        { id: 'create:refined_radiance', type: 'refined_radiance' },
        { id: 'create:polished_rose_quartz', type: 'polished_rose_quartz' },
        { id: 'create:shadow_steel', type: 'shadow_steel' },
        { id: 'create:chromatic_compound', type: 'chromatic_compound' },
        //industrialforegoing
        { id: 'industrialforegoing:pink_slime_ingot', type: 'pink_slime' },
        //mythicbotany
        { id: 'mythicbotany:alfsteel_ingot', type: 'alfsteel' },
        //powah
        { id: 'powah:uraninite', type: 'uraninite' },
        { id: 'powah:steel_energized', type: 'steel_energized' },
        //rainbowcompound
        { id: 'rainbowcompound:polished_ender_quartz', type: 'polished_ender_quartz' },
        { id: 'rainbowcompound:enderite_ingot', type: 'enderite' },
        { id: 'rainbowcompound:chorusite_ingot', type: 'chorusite' },
        { id: 'rainbowcompound:frostite_ingot', type: 'frostite' },
        { id: 'rainbowcompound:blazeite_ingot', type: 'blazeite' },
        { id: 'rainbowcompound:strange_colored_ingot', type: 'strange_colored' },
        { id: 'rainbowcompound:rainbow_compound', type: 'rainbow_compound' },
        { id: 'rainbowcompound:netherstar_ingot', type: 'netherstar' },
        { id: 'rainbowcompound:netherwartite_ingot', type: 'netherwartite' },
        { id: 'rainbowcompound:slimeite_ingot', type: 'slimeite' },
        { id: 'rainbowcompound:glowstoneite_ingot', type: 'glowstoneite' },
        { id: 'rainbowcompound:warpedite_ingot', type: 'warpedite' },
        { id: 'rainbowcompound:obsidianite_ingot', type: 'obsidianite' },
    ]
    IngotTag.forEach((tag) => {
        event.add('forge:ingots', [tag.id]);
        event.add(`forge:ingots/${tag.type}`, [tag.id]);
    })
});