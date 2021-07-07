import { GenLoot } from '../scripts/genloot.js';

export let initHooks = () => {
    Hooks.on('createToken'), (token, createData, options, userId) => {

        // Check if this was done by a GM
        if (!game.user.isGM) return token;

        // Ignore linked tokens
        if (!token.actor || token.data.actorLink) return token;

        let genLoot = new GenLoot(token);
        genLoot.generate();
    }
}