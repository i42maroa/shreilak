import { ResourceInterface } from "../../interface/resource.interface";

export const SAVE_OLAF:ResourceInterface = {
    id: "2",
    name:"OBJ.OLAF.TITLE",
    description:"OBJ.OLAF.DESCRIPTION",
    text:"OBJ.OLAF.PROCESS",
    images:[
        {
            alt:"save",
            url:"assets/images/ressources/frozen/olaf-melted.png"
        }
    ],
    resources:[
        {
            url:"https://drive.google.com/file/d/1NQqEEnaLuoIH0KABm-eR4J1aAC3jSyu-/view?usp=drive_link",
            name: "OBJ.OLAF.RES.MAGIC"
        }
    ]
}
