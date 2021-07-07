import { Item5e } from "../../../systems/dnd5e/module/item/entity.js";
import { LootCreator } from '../../better-rolltables/scripts/loot/loot-creator.js';
import { BRTBuilder } from '../../better-rolltables/core/brt-builder.js';
import { BetterResults } from '../../better-rolltables/core/brt-table-results.js';

export class GenLoot {
    constructor(token) {
        this.token = token;
        this.actor = token.actor;
        this.tableName = this.actor.getFlag("lootsheetnpc5e", "rolltable");
        this.table = game.tables.getName(this.tableName);

        return this;
    }

    async generate() {
        if (!this.rollTable) return;
        console.log("Generating Loot for Token!");
        const brtBuilter = new BRTBuilder();
        const results = await brtBuilter.betterRoll();

        const br = new BetterResults(results);
        const betterResults = await br.buildResults(tableEntity);
        const lootCreator = new LootCreator(betterResults, currencyData);
        await lootCreator.addItemsToToken(token);
        ui.notification.info("Added Generated Loot");
    }
}