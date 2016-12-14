import React from 'react';
import FoodList from '../containers/food-list';
import FoodDetail from '../containers/food-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Food:</h2>
        <FoodList />
        <h2>Detail:</h2>
        <FoodDetail />
    </div>
);

export default App;
