import { useEffect, useState } from 'react'
import Ingredient from "../Ingredient"
import { Loader } from "../Loader"
import { getIngredients } from '../../services/index.js'

const ListOfIngredient = () => {
    const [ingredients, setIngredients] = useState([])
    useEffect(async () => {
        const newIngredients = await getIngredients()
        setIngredients(newIngredients);
    }, [])

    return (
        <>
            <div className="d-flex flex-column mx-auto">
                <h3>🍅 Ingredients</h3>
                {(ingredients.length === 0) && <Loader />}
                <div className="d-flex flex-row mt-4">
                    {
                        ingredients.map((ingredient) => <Ingredient key={ingredient.id} {...ingredient} />)
                    }
                </div>
            </div>
        </>
    );
}

export default ListOfIngredient;