import {inventory} from "../constants/inventory.js";

function soldTv(){
    let tvSold =0
    for (let i = 0; i < inventory.length; i++) {
        tvSold+=inventory[i].sold

    }

    return tvSold
}
export default soldTv