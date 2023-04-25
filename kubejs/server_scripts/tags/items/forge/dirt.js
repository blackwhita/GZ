onEvent('item.tags', (event) => {
    event.add('forge:dirt', ['minecraft:dirt']);
    event.remove('forge:dirt', ['supplementaries:fodder']);
});
