import './App.css';
import { Route, Redirect } from 'wouter'

import ListOfDish from './components/ListOfDish';
import NavBar from './components/NavBar';
import ListOfIngredient from './components/ListOfIngredient';

import DishDetail from './pages/DishDetail';
import IngredientDetail from './pages/IngredientDetail';

function App() {
    return <div className="container w-100">
        <NavBar />
        <div className="container mx-auto mt-4">
            <Route path='/dishes' component={ListOfDish} />
            <Route path='/dish/:id' component={DishDetail} />

            <Route path='/ingredients' component={ListOfIngredient} />
            <Route path='/ingredient/:id' component={IngredientDetail} />
            <Redirect to='/dishes' />
        </div>
    </div>
}

export default App;
