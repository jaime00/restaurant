import { useEffect, useState } from 'react'
import Dish from "../Dish"
import { Loader } from "../Loader"
import { getDishes } from '../../services/index.js'

const ListOfDish = () => {
    const [dishes, setDishes] = useState([])
    useEffect(async () => {
        const newDishes = await getDishes()
        setDishes(newDishes);
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();
        let dish = document.querySelector('#dishSearch')
        const newDishes = await getDishes({ property: 'name', value: dish.value })
        setDishes(newDishes);
    }

    return (
        <>
            <div className="d-flex flex-column mx-auto">
                <div className="flex flex-row">
                    <h3>🍲 Dishes</h3>
                    <form className="input-group mx-auto row mt-3" onSubmit={submitForm}>
                        <input id="dishSearch" type="text" className="form-control" placeholder="Write your favorite dish" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button type="submit" className="ml-2 btn btn-primary">Search</button>
                    </form>
                </div>
                {(dishes.length === 0) && <Loader />}
                <div className="d-flex flex-row mt-4">
                    {
                        dishes.map((dish) => <Dish key={dish.id} {...dish} />)
                    }
                </div>
            </div>
        </>
    );
}

export default ListOfDish;