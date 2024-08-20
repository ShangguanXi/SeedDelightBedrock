var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ItemStopUseAfterEvent, world } from "@minecraft/server";
import { EventAPI } from "../lib/EventAPI";
import { ItemAPI } from "../lib/ItemAPI";
export class Food {
    food(args) {
        const itemStack = args.itemStack;
        const player = args.source;
        const useDuration = args.useDuration;
        if (itemStack && useDuration == 0) {
            switch (itemStack.typeId) {
                case "seeddelight:cherry_ice_cream":
                    player.addEffect('slowness', 30 * 20, { amplifier: 0 });
                    player.addEffect('haste', 60 * 20, { amplifier: 0 });
                    break;
                case "seeddelight:cherry_jam_sandwich":
                case "seeddelight:cherry_wine":
                    player.addEffect('haste', 90 * 20, { amplifier: 0 });
                    break;
                case "seeddelight:rosehip_jam_sandwich":
                case "seeddelight:rosehip_tea":
                    player.addEffect('regeneration', 10 * 20, { amplifier: 0 });
                    break;
                case "seeddelight:pine_needle_wine":
                    player.addEffect('resistance', 10 * 20, { amplifier: 0 });
                    break;
                case "seeddelight:seed_rosehip_pie":
                    player.addEffect('regeneration', 5 * 20, { amplifier: 0 });
                    break;
                case "seeddelight:seed_tart":
                    ItemAPI.add(player, "minecraft:glass_bottle");
                    break;
            }
        }
    }
}
__decorate([
    EventAPI.register(world.afterEvents.itemStopUse),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemStopUseAfterEvent]),
    __metadata("design:returntype", void 0)
], Food.prototype, "food", null);
//# sourceMappingURL=FoodRegister.js.map