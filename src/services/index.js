import { createClient } from '@supabase/supabase-js'

const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueW1lcWxod2RvYWhnbHpvemlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NTcxODQ4NywiZXhwIjoxOTYxMjk0NDg3fQ.9wsAHA8TVc0n7bnBwEsB3LHfPMAlmXl1O2jqbvEabhU'
const SUPABASE_URL = "https://xnymeqlhwdoahglzozid.supabase.co"

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

async function getDishes({ property, value } = { property: null, value: null }) {
    if (property) {
        let { data: dish, error } = await supabase
            .from('dish')
            .select('id, name, description, created_at::date').
            like(property, `%${value}%`)
        return dish
    } else {
        let { data: dish, error } = await supabase
            .from('dish')
            .select('id, name, description, created_at::date')
        return dish
    }
}


async function updateDish(dish) {
    const { data, error } = await supabase
        .from('dish')
        .update(dish)
        .eq('id', dish.id)
    if (error) {
        alert('It was not possible to update the dish')
    } else {
        alert(`The dish ${dish.name} was updated successfully.`)
    }
}

async function getDishDetail(id) {
    let { data: dish, error } = await supabase
        .from('dish')
        .select("*")
        .eq('id', id)
    return { dish: dish[0], error }
}


async function getIngredients() {
    let { data: ingredient, error } = await supabase
        .from('ingredient')
        .select('id, name, description, created_at::date ')
    return ingredient
}

async function getIngredientDetail(id) {
    let { data: ingredient, error } = await supabase
        .from('ingredient')
        .select("*")
        .eq('id', id)
    return { ingredient: ingredient[0], error }
}

async function updateIngredient(ingredient) {
    const { data, error } = await supabase
        .from('ingredient')
        .update(ingredient)
        .eq('id', ingredient.id)
    if (error) {
        alert('It was not possible to update the ingredient')
    } else {
        alert(`The ingredient ${ingredient.name} was updated successfully.`)
    }
}

export { getDishes, getDishDetail, updateDish, getIngredients, getIngredientDetail, updateIngredient }
