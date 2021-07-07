import { initHooks } from './hooks/onCreateToken.js';

Hooks.once('init', () => {
    console.log("Gen Loot Init");
    initHooks();
});
