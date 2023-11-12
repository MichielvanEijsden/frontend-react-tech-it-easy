import './App.css';
import soldTv from "./Helpers/Tv-Sold.js";
import tvTotal from "./Helpers/Tv-Total.js";
import tvToSell from "./Helpers/Tv-ToSell.js";
import {bestSellerImage,bestSellerPrice, bestSellerSize, bestSellerTitle} from "./Helpers/best-seller.js";
import {check, uncheck} from "./Helpers/checkmarks.js";


function App() {
  return (
      <>
    <h1>Tech it easy dashboard</h1>
      <p>Verkoop overzicht</p>
        <p id = "sold">Aantal verkochte producten {soldTv()}</p>
        <p id= "total">Aantal ingekochte producten {tvTotal}</p>
        <p id= "toSell">Aantal te verkopen producten {tvToSell}</p>

        <div>
          <div>
          <img src={bestSellerImage()} alt="Best Tv"></img>
          </div>
            <p> {bestSellerTitle()}</p>
          <p>{bestSellerPrice()}</p>
          <p>{bestSellerSize()}</p>
          <p className="checks"><img src={check()} alt="eeee"></img> wifi <img src={uncheck()} alt="eeee"></img> speech <img src={check()} alt="eeee"></img> hdr <img src={check()} alt="eeee"></img> bluetooth <img src={uncheck()} alt="eeee"></img> ambilight </p>
        </div>

</>
  )

}

export default App
