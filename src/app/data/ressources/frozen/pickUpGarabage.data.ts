import { ResourceInterface } from "../../interface/resource.interface";

export const PICK_UP_GARBAGE:ResourceInterface = {
    id: "1",
    name:"Limpieza salvaje",
    description:"El bosque está lleno de basura de la fiesta de navidad del año pasado. Tenemos que ayudar a shreilak a recogerlo.",
    descriptionTranslated:"El bosque está lleno de basura de la fiesta de navidad del año pasado. Tenemos que ayudar a shreilak a recogerlo.",
    text:"Usando la aplicación de Genially, los alumnos podrán eliminar el objeto de la presentación cuando escriban cada palabra en su cuaderno y la pronunciación correctamente.",
    images:[
        {
            alt:"pick",
            url:"assets/images/ressources/frozen/dirty-wood.png"
        }
    ],
    resources:[
        {
            url:"https://view.genially.com/65a82d8f453b6700143981a7/interactive-content-noel-avec-frozen",
            name:"Bosque a limpiar"
        }
    ]
}
