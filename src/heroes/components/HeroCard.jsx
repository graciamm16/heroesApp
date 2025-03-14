import { Link } from "react-router-dom";

export const HeroCard = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`;
    // console.log(heroImageUrl);

    // const charactersByHero = (<p>{characters}</p>);
    
    //esta función decide si mostrar o no el contenido de characters basado en si es igual al alter_ego. 
    const CharactersByHero = ({alter_ego, characters}) => {
        // if(alter_ego === characters) return (<></>);
        // return <p>{characters}</p>
        return(alter_ego === characters) //Ternario
        ? <></>
        :<p>{characters}</p>
    }

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={superhero}/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {/*Primera vez en la que apareció el personaje en las tiendas comic*/}
                            {/* {
                                (alter_ego !== characters) && (<p>{characters}</p>)
                                (alter_ego !== characters) && charactersByHero
                            } */}

                            <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                            Más información
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}