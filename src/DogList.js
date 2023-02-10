
function DogList({dogs}) {
    console.log(dogs)
    return (
        <div className="dogs">
            {dogs.map((dog) => (
                <div className="doglist">
                    <h4>{dog.name}</h4>
                    <img src={dog.src} width="90%"></img>
                </div>
            ))}
        </div>
    )
}

export default DogList