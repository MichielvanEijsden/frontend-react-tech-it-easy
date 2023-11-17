import {inventory} from "../constants/inventory.js";

function getTvTypeInfo(){
    const tvInfo = inventory.map((tv) =>{
        if( tv.type === 'NH3216SMART'){
            let tvOptions = ``
            for (let i = 0; i < tv.options.length; i++) {
                tvOptions =tvOptions + ` ${tv.options[i].name}`
            }
            return `${tv.brand} - ${tv.name} - ${tv.type} - ${tv.price} - ${tv.availableSizes} - ${tv.refreshRate} - ${tv.screenType} - ${tv.screenQuality}
            ${tv.smartTv} - ${tv.sourceImg} - ${tvOptions}`
        }
    })
    console.log("hihih " +tvInfo)
    return tvInfo
}
export {getTvTypeInfo}