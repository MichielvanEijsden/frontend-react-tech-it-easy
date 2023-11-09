import tvTotal from "./Tv-Total.js";
import tvSold from "./Tv-Sold.js";


function toSell(){
    return tvTotal-tvSold()
}

export default toSell()