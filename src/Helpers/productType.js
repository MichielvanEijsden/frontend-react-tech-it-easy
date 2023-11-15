import {inventory} from "../constants/inventory.js";

// maak array voor tv merk, type ,naam



function productType() {
       const tvType = inventory.map((tv) =>{
           return tv.type
       })
        console.log("tv type",tvType)
    return tvType.join(" | ")
    }

export {productType}