import { Block, Entity, GameMode, ItemComponentTypes, ItemStack, Player, Vector3, world } from "@minecraft/server";
import { RandomAPI } from "./RandomAPI";


export class ItemAPI {
     /**
     * 
     * @param target 生成物品的目标。
     * @param item  要生成物品的标识符或者物品堆栈。
     * @param number 要生成物品的数量，默认为1。当item类型为ItemStack时，无意义。
     * @param location 生成物品的坐标，默认为目标的坐标。
     */
     public static spawn(target: Block | Entity, item: string | ItemStack, number: number = 1, location: Vector3|undefined= undefined) {
        if (!location){
            if (item instanceof ItemStack) {
                if (target instanceof Block) {
                    if (RandomAPI.probability(50)){
                        target.dimension.spawnItem(item, target.center());
                    }
                    else{
                        target.dimension.spawnItem(item, target.bottomCenter());
                    };
                    
                };
                if (target instanceof Entity) {
                    target.dimension.spawnItem(item, target.location);
                };
            }
            else {
                if (target instanceof Block) {
                    if (RandomAPI.probability(50)){
                        target.dimension.spawnItem(new ItemStack(item, number), target.center());
                    }
                    else{
                        target.dimension.spawnItem(new ItemStack(item, number), target.bottomCenter());
                    };
                }
                if (target instanceof Entity) {
                    target.dimension.spawnItem(new ItemStack(item, number), target.location);
                };
            }
        }
        else{
            if (item instanceof ItemStack) {
                target.dimension.spawnItem(item, location);
            }
            else {
                target.dimension.spawnItem(new ItemStack(item, number), location);
            };
        };
        
    }
    /**
     * 
     * @param player 要添加物品的玩家。
     * @param item  要生成物品的标识符或者物品堆栈。
     * @param number 要生成物品的数量，默认为1。当item类型为ItemStack时，无意义。
     * @returns 
     */
    public static add(player: Player, item: string | ItemStack, number: number = 1) {
        const container = player.getComponent("inventory")?.container;
        if (!container) return;
        if (item instanceof ItemStack) {
            container.addItem(item)
        }
        else {
            container.addItem(new ItemStack(item, number))
        }

    }
}