import { ResourceInterface } from "../../interface/resource.interface";

export const MEAL_CELEBRATION:ResourceInterface = {
    id: "6",
    name:"Festín Helado",
    description:"¡Lo conseguimos! Olaf vuelve a estar igual que un tempano de hielo y hemos conseguido sensibilizar al mundo para reducir las cosas materiales. Esto hay que celebrarlo con un festín, por lo que Shreilak ha querido hacerle un 'tronco de navidad' a Elsa.",
    descriptionTranslated:"¡Lo conseguimos! Olaf vuelve a estar igual que un tempano de hielo y hemnos conseguido sensibilizar al mundo para reducir. Esto hay que celebrarlo con un festín, por lo que Shreilak ha querido hacerle un 'tronco de navidad' a Elsa.",
    text:"Para comenzar, buscaremos de que se trata el 'tronco de navidad' y veremos como es y de que está hecho. Después, comparemos de forma oral la cultura grastronómica francesa con la española de esas fechas",
    images:[
        {
            alt:"tronco",
            url:"assets/images/ressources/frozen/tronco.png"
        }
    ],
    resources:[
        {
            url:"https://drive.google.com/file/d/19-8ynsYVBCbpDg_YjUCXaIPtTS__6HhQ/view?usp=drive_link",
            name: "Gastronomía"
        },
    ]
}
