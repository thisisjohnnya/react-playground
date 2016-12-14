export const selectFood = (food) => {
    console.log('food: ', food.name);
    return {
        type: "FOOD_SELECTED",
        payload: food
    }
};
