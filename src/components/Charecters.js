export default function Charecters(props) {
    const {charecters, setCharecters} = props;

    const resetCharecters = () => {
        setCharecters(null);
    }

    return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharecters}>Volver a la home</span>

        <div className="container-characters">
            {charecters.map((charecter, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={charecter.image} alt={charecter.name}></img>
                    </div>
                    <div>
                        <h3>{charecter.name}</h3>
                        <h6>
                            {charecter.status === "Alive" ? (
                                <>
                                    <span className="alive"/>
                                    Alive

                                </>
                            ) : (
                                <>
                                    <span className="dead"/>
                                    Dead
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios: </span>
                            <span>{charecter.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{charecter.species}</span>
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
        <span className="back-home" onClick={resetCharecters}>Volver a la home</span>
    </div>
  )
}
