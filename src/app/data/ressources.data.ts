import { ResourceInterface } from "./interface/resource.interface";
import { CLEAR_WOOD_CELEBRATION } from "./ressources/frozen/celebration.data";
import { FROZEN_FINAL_TASK } from "./ressources/frozen/frozen_final_task.data";
import { MEAL_CELEBRATION } from "./ressources/frozen/meal-celebration.data";
import { PICK_UP_GARBAGE } from "./ressources/frozen/pickUpGarabage.data";
import { REUSED_ORNAMENTS } from "./ressources/frozen/reused_ornaments.data";
import { SAVE_OLAF } from "./ressources/frozen/saveOlaf.data";
import { THREE_R } from "./ressources/frozen/three-r.data";
import { TRADITION_TREE } from "./ressources/frozen/tradition_tree.data";

export const MAP_RESSOURCES:Map<string, ResourceInterface> = new Map(
    [
        [PICK_UP_GARBAGE.id, PICK_UP_GARBAGE],
        [THREE_R.id, THREE_R],
        [SAVE_OLAF.id, SAVE_OLAF],
        [CLEAR_WOOD_CELEBRATION.id, CLEAR_WOOD_CELEBRATION],
        [MEAL_CELEBRATION.id, MEAL_CELEBRATION],
        [REUSED_ORNAMENTS.id, REUSED_ORNAMENTS],
        [FROZEN_FINAL_TASK.id, FROZEN_FINAL_TASK],
        [TRADITION_TREE.id, TRADITION_TREE]
    ]
);


