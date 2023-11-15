import {bestSellingTv} from "../constants/inventory.js";

function bestSellerImage(){
    return bestSellingTv.sourceImg
}
function bestSellerTitle() {
    return bestSellingTv.brand + " " + bestSellingTv.type + "-" + bestSellingTv.name
}

function bestSellerPrice(){
    return "€"+bestSellingTv.price+",-"
}

function bestSellerSize(){
    let size =[]
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        size[i] = bestSellingTv.availableSizes[i]+" "+"inch"+" "+"("+(Math.trunc((bestSellingTv.availableSizes[i])*2.54))+" "+"cm)"
    }
    return size.join(" | ")

}

export {bestSellerImage,bestSellerTitle,bestSellerPrice,bestSellerSize}