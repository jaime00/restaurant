
import React, { useState, useEffect } from 'react'
import { getIngredientDetail, updateIngredient } from '../../services'
import { Loader } from "../../components/Loader"

function IngredientDetail(props) {
    const [ingredient, setIngredient] = useState({
        id: 0,
        name: "",
        description: "",
        created_at: ""
    })
    const { id } = props.params

    useEffect(() => {
        const fetchDetail = async id => {
            const { ingredient, error } = await getIngredientDetail(id)
            setIngredient(ingredient)
        }
        fetchDetail(id)
    }, [id])

    const handleChange = (e) => {
        setIngredient({ ...ingredient, [e.target.name]: e.target.value })
    }
    const submitForm = (e) => {
        e.preventDefault()
        updateIngredient(ingredient)
    }
    const { description, name, created_at } = ingredient
    if (ingredient.id === 0) return <Loader />
    return (
        <>
            <form onSubmit={submitForm}>
                <h5 className='text-center'>{id} - Ingredient: {name}</h5>
                <div className="row mt-4">
                    <div className="form-group col">
                        <label htmlFor="name">Ingredient Name</label>
                        <input type="text" onChange={handleChange} value={name} className="form-control" name="name" id="name" placeholder="Enter a ingredient name" />
                    </div>
                    <div className="form-group col">
                        <label htmlFor="description">Description</label>
                        <input type="text" onChange={handleChange} value={description} className="form-control" name="description" id="description" placeholder="Enter a Description" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </>
    );
}

export default IngredientDetail;

