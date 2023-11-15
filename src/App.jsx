import './App.css';
import soldTv from "./Helpers/Tv-Sold.js";
import tvTotal from "./Helpers/Tv-Total.js";
import tvToSell from "./Helpers/Tv-ToSell.js";
import {bestSellerImage, bestSellerPrice, bestSellerSize, bestSellerTitle} from "./Helpers/best-seller.jsx";
import {check, uncheck} from "./Helpers/checkmarks.js";
import {productType} from "./Helpers/productType.js";
import {getOutSoldTvs} from "./Helpers/getOutSoldTvs.js";
import {inventory} from "./constants/inventory.js";
import productName from "./Helpers/productName.js";
import {productPrice} from "./Helpers/productPrice.js";
import {availableSizes} from "./Helpers/availableSizes.js";







function App() {
    return (
        <>
            <h1>Tech it easy dashboard</h1>
            <p>Verkoop overzicht</p>
            <div className="sales">
                <p id="sold">Aantal verkochte producten {soldTv()}</p>
                <p id="total">Aantal ingekochte producten {tvTotal}</p>
                <p id="toSell">Aantal te verkopen producten {tvToSell}</p>
            </div>
            <div className="bestSelling">
                <div>
                    <img src={bestSellerImage()} alt="Best Tv"></img>
                </div>
                <p>{bestSellerTitle()}</p>
                <p>{bestSellerPrice()}</p>
                <p>{bestSellerSize()}</p>
                <p className="checks"><img src={check()} alt="yes"></img> wifi <img src={uncheck()}
                                                                                    alt="no"></img> speech <img
                    src={check()} alt="yes"></img> hdr <img src={check()} alt="yes"></img> bluetooth <img
                    src={uncheck()} alt="no"></img> ambilight </p>
            </div>
            {/*deel 2 opdr1a*/}
            {productType()}
            {/*deel 2 opdr1b*/}
            {getOutSoldTvs()}
            {/*deel 2 opdr1c*/}


            <div>

                {inventory.map((tv) => {
                    return(
                        <article key={tv.type}>
                        <span>
                        <img src={tv.sourceImg} alt={tv.brand}></img>
                        </span>
                           <div>
                               <h3>{productName(tv)}</h3>
                               <p>{productPrice(tv)}</p>
                               <p>{availableSizes(tv)}</p>
                               <ul className="option-list">
                                   {tv.options.map((option) => {
                                       if (option.applicable === true) {
                                           return <li key={`${tv.type}-${option.name}`}><img src={check()} alt="Icoon: aanwezig" className="icon"/>{option.name}</li>
                                       } else {
                                           return <li key={`${tv.type}- ${option.name}`}><img src={uncheck()} alt="Icoon: niet aanwezig" className="icon"/>{option.name}</li>
                                       }
                                   })}
                               </ul>


                           </div>
                        </article>
                    )

                })}

            </div>
        </>
    )

}

export default App
