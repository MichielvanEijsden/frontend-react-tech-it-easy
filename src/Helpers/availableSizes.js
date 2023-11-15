
function availableSizes(tvSizes) {
    let sizes = ``
    for (let i = 0; i < tvSizes.length; i++) {
        const sizeInch = tvSizes[i]
        const sizeCM = Math.trunc(tvSizes[i] * 2.54)

        sizes = sizes + `${sizeInch} inch ${sizeCM} cm`

    }
    return sizes
}


export {availableSizes}