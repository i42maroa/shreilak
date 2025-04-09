import { ResourceInterface } from "../../interface/resource.interface";

export const TRADITION_TREE:ResourceInterface = {
    id: "8",
    name:"OBJ.TRADITION_TREE.TITLE",
    description:"OBJ.TRADITION_TREE.DESCRIPTION",
    text:"OBJ.TRADITION_TREE.PROCESS",
    images:[
        {
            alt:"tree",
            url:"assets/images/ressources/frozen/tradition-tree.webp"
        }
    ],
    resources:[
        {
            url:"https://drive.google.com/file/d/1HFiOghtaCme35YXDTLwxeB0gSQY-khBL/view?usp=drive_link",
            name:"OBJ.TRADITION_TREE.RES.TREE"
        },
        {
            url:"https://drive.google.com/file/d/1IZAx_Q1Ix9pdz3nb08VLPvoa2Ckcyfpj/view?usp=drive_link",
            name:"OBJ.TRADITION_TREE.RES.MAGIC_BALL"
        }
    ]
}
