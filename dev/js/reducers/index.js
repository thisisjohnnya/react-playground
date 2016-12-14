import {combineReducers} from 'redux';
import FoodReducer from './reducer-food'
import ActiveFoodReducer from './reducer-active-food';


const allReducers = combineReducers({
    food: FoodReducer,
    activeFood: ActiveFoodReducer
});

export default allReducers;
