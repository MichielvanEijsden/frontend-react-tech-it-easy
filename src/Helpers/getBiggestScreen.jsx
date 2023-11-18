// Gebruik array-methoden om alle informatie te verzamelen van de tv's
// die beschikbaar zijn in schermgroottes van 65 inch en groter.

import {inventory} from "../constants/inventory.js";

function getBiggestScreen(){
    return inventory.map((tv) => {
        let biggestScreen = ``
        // let tvOptions =``
        // for (let i = 0; i < tv.options.length; i++) {
        //     tvOptions =tvOptions + ` ${tv.options[i].name}`

        for (let i = 0; i < tv.availableSizes.length; i++) {
            if (tv.availableSizes[i] >= `65`) {
                const biggestSize = tv.availableSizes[i]
                biggestScreen = biggestScreen + ` ${tv.brand} - ${tv.name} - ${tv.type} - ${tv.price} - ${biggestSize} - ${tv.refreshRate} - ${tv.screenType} - ${tv.screenQuality}
            ${tv.smartTv} - ${tv.sourceImg} - || `
            }

        }
        return biggestScreen
    })
}
export {getBiggestScreen}