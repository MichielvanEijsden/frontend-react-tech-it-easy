
function availableSizes(tvSizes) {
    let sizes = ``
    for (let i = 0; i < tvSizes.length; i++) {

        const sizeInch = tvSizes[i]
        const sizeCM = Math.trunc(tvSizes[i] * 2.54)

        sizes = sizes + `${sizeInch} inch (${sizeCM} cm)`
        if (i < tvSizes.length - 1) {
            sizes = `${sizes} | `;

        }

    }
    return sizes
}


export {availableSizes}