import {inventory} from "../constants/inventory.js";

function getOutSoldTvs(){
    const tvsSold = inventory.filter((tv) => {
    return tv.originalStock === tv.sold

    })
    console.log("tvs sold",tvsSold)
}

export {getOutSoldTvs}