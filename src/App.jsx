import './App.css';
import soldTv from "./Helpers/Tv-Sold.js";
import tvTotal from "./Helpers/Tv-Total.js";
import tvToSell from "./Helpers/Tv-ToSell.js";



function App() {
  return (
      <>
    <h1>Tech it easy dashboard</h1>
      <p>Verkoop overzicht</p>
        <p id = "sold">Aantal verkochte producten {soldTv()}</p>
        <p id= "total">Aantal ingekochte producten {tvTotal}</p>
        <p id= "toSell">Aantal te verkopen producten {tvToSell}</p>

</>
  )

}

export default App
