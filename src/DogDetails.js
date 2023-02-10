import { useParams } from "react-router-dom"


function DogDetails({dogs}) {
    const {name} = useParams()
    const dog = dogs.filter((dog)=> (dog.name.toLowerCase() == name))[0]
    return (
        <div className="dog">
            <h4>{dog.name}</h4>
            <img src={dog.src} alt= "" width = '30%' ></img>
            <p>Age: {dog.age}</p> <br/>
            <p>facts: {dog.facts.map((fact)=> (
                <p>{fact}</p>
            ))}</p>
        </div>
    )
}

export default DogDetails