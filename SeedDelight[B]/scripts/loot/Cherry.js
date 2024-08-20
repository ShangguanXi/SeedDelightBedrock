var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { GameMode, ItemComponentTypes, system, PlayerBreakBlockBeforeEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
import { RandomAPI } from "../lib/RandomAPI";
export class Cherry {
    loot(args) {
        const itemStack = args.itemStack;
        const itemId = itemStack?.typeId;
        const enchantment = itemStack?.getComponent(ItemComponentTypes.Enchantable)?.hasEnchantment('silk_touch');
        const block = args.block;
        const player = args.player;
        if (block.typeId != "minecraft:cherry_leaves")
            return;
        if (player.getGameMode() == GameMode.creative)
            return;
        if (((!enchantment) || itemId != "minecraft:shears")) {
            if (RandomAPI.probability(25)) {
                system.run(() => {
                    ItemAPI.spawn(block, "seeddelight:cherry");
                });
            }
        }
    }
}
__decorate([
    EventAPI.register(world.beforeEvents.playerBreakBlock),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerBreakBlockBeforeEvent]),
    __metadata("design:returntype", void 0)
], Cherry.prototype, "loot", null);
//# sourceMappingURL=Cherry.js.map