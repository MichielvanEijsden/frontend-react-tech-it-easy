import {inventory} from "../constants/inventory.js";

function totalTv(){
    let tvStock =0
    for (let i = 0; i < inventory.length; i++) {
        tvStock += inventory[i].originalStock

    }
    return tvStock
}

export default totalTv()