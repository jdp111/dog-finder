import { NavLink } from "react-router-dom"; 
import {v4} from 'uuid'
function Nav({dogs}) {
    console.log()
    const names = dogs.map((dog)=>dog.name)

    return (
        <nav>
            {names.map((name) => (   
                <NavLink to={`/dogs/${name.toLowerCase()}`} key={v4()}>{name}      </NavLink>
            ))}
        </nav>
    )

}

export default Nav