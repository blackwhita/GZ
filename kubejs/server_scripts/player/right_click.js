onEvent('block.right_click', event => {
    if (event.block == 'minecraft:dead_bush' && event.player.getHeldItem(event.hand) == 'minecraft:cactus') {
        event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:oak_sapling`)
        event.player.mainHandItem.count -= 1
        event.player.attack(1)
    }//tree
    if (event.block == 'minecraft:oak_leaves' && event.player.getHeldItem(event.hand) == 'minecraft:glass_bottle') {
        event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`)
        event.player.mainHandItem.count -= 1
        event.player.give(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'))
    }//water potion
})
