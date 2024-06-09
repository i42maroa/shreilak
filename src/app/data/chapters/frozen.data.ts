import { ChapterInterface } from "../interface/chapter.interface";
import { CLEAR_WOOD_CELEBRATION } from "../ressources/frozen/celebration.data";
import { FROZEN_FINAL_TASK } from "../ressources/frozen/frozen_final_task.data";
import { MEAL_CELEBRATION } from "../ressources/frozen/meal-celebration.data";
import { WILD_CLEAN } from "../ressources/frozen/pickUpGarabage.data";
import { REUSED_ORNAMENTS } from "../ressources/frozen/reused_ornaments.data";
import { SAVE_OLAF } from "../ressources/frozen/saveOlaf.data";
import { THREE_R } from "../ressources/frozen/three-r.data";
import { TRADITION_TREE } from "../ressources/frozen/tradition_tree.data";

export const FROZEN_CHAPTER:ChapterInterface = {
    title:"FROZEN.TITLE",
    history:"FROZEN.HISTORY",
    objectives:[
        {
            title:"FROZEN.OBJ.CLEAN.TITLE",
            process: "FROZEN.OBJ.CLEAN.PROCESS",
            resources: [
                WILD_CLEAN,
                CLEAR_WOOD_CELEBRATION
            ]
        },
        {
            title:"FROZEN.OBJ.OLAF.TITLE",
            process: "FROZEN.OBJ.OLAF.PROCESS",
            resources: [
                SAVE_OLAF,
                MEAL_CELEBRATION
            ]
        },
        {
            title:"FROZEN.OBJ.CHRISTMAS.TITLE",
            process: "FROZEN.OBJ.CHRISTMAS.PROCESS",
            resources: [
                REUSED_ORNAMENTS,
                TRADITION_TREE
            ]
        },
        {
            title:"FROZEN.OBJ.GLOBAL_HEAT.TITLE",
            process: "FROZEN.OBJ.GLOBAL_HEAT.PROCESS",
            resources: [
                THREE_R,
                FROZEN_FINAL_TASK
            ]
        }
    ]
}


