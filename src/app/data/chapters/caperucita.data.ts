import { ChapterInterface } from "../interface/chapter.interface";
import { CAPERUCITA_FINAL_TASK } from "../ressources/caperucita/caperucita_final_task.data";

export const CAPERUCITA_CHAPTER:ChapterInterface = {
    title:"CAPERUCITA.TITLE",
    alt:"caperucita",
    image:"/assets/images/ressources/caperucita/caperucita.webp",
    classColor:"caperucita",
    history:"CAPERUCITA.HISTORY",
    objectives:[
        {
            title:"CAPERUCITA.OBJ.PARIS_ARRIVED.TITLE",
            process: "CAPERUCITA.OBJ.PARIS_ARRIVED.PROCESS",
            resources: [
            ]
        },
        {
            title:"CAPERUCITA.OBJ.THE_WOLF_INTO_NET.TITLE",
            process: "CAPERUCITA.OBJ.THE_WOLF_INTO_NET.PROCESS",
            resources: [
            ]
        },
        {
            title:"CAPERUCITA.OBJ.DANGER_APPROACH.TITLE",
            process: "CAPERUCITA.OBJ.DANGER_APPROACH.PROCESS",
            resources: [
            ]
        },{
            title:"CAPERUCITA.OBJ.COMUNITY_HELP.TITLE",
            process: "CAPERUCITA.OBJ.COMUNITY_HELP.PROCESS",
            resources: [
                CAPERUCITA_FINAL_TASK
            ]
        }
    ]
}
