import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
    const {id} = useParams();
    // console.log(id);

    const hero = useMemo(() => getHeroById(id), [id]);
    // console.log(hero);

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    };

    if(!hero){
        return <Navigate to="/marvel"/>
    }

    return (
        //Toda la página está animada y entra por la izquierda
        //animate__delay-1s (duración de la animación)
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <img 
                    src={`/assets/heroes/${id}.jpg`} 
                    alt={hero.superhero}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="lis-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{hero.alter_ego}</li><hr/>
                    <li className="list-group-item"><b>Publisher: </b>{hero.publisher}</li><hr/>
                    <li className="list-group-item"><b>Fisrt appearance: </b>{hero.first_appearance}</li><hr/>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>
                <button
                    className="btn btn-outline-primary"
                    onClick={onNavigateBack}
                >
                    Back
                </button>
            </div>
        </div>
    )
}
