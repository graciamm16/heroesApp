import {heroes} from '../data/heroes';

//Función que lanza un error si no es uno de los publicadores de comics definidos
export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics', 'Marvel Comics'];
    // console.log(publisher);

    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }
    return heroes.filter(heroe => heroe.publisher === publisher);
}