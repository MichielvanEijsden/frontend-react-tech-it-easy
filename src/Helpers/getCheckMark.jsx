import {inventory} from "../constants/inventory.js";
import {check, uncheck} from "./checkmarks.js";
function getCheckMark() {

      const checks = inventory.map((tv) => {
            return (
                <article className="product" key={tv.type}>

                    <ul className="option-list">
                        {tv.options.map((option) => {
                            if (option.applicable === true) {
                                return <li key={`${tv.type}-${option.name}`}><img src={check()} alt="Icoon: aanwezig" className="icon"/>{option.name}</li>
                            } else {
                                return <li key={`${tv.type}-${option.name}`}><img src={uncheck()} alt="Icoon: niet aanwezig" className="icon"/>{option.name}</li>
                            }
                        })}
                    </ul>

                </article>
            )
        })
    return checks
}

export {getCheckMark}