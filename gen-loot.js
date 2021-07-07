import { initHooks } from './hooks/onCreateToken.js';

Hooks.once('init', () => {
    initHooks();
});