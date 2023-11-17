
// Gebruik een array-methode om een lijst te maken van de merk- en tv-namen waarbij aangegeven wordt of deze geschikt
// zijn voor sport-kijkers (een verversingssnelheid van 100Hz of hoger). Doe dit in het format { name: 'Toshiba HD TV', suitable: false }.
// Log de uitkomst in de console.
import {inventory} from "../constants/inventory.js";

function getSportTvs(){
const sportTv = inventory.map((tv) =>{
    if (tv.refreshRate >= 100){
        return `naam: ${tv.brand} ${tv.name} , suitable: true`
    }else {
        return `naam: ${tv.brand} ${tv.name} , suitable: false`
    }
})
    console.log(sportTv)
}
export {getSportTvs}