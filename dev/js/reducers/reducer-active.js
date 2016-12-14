export default function (state=null, action) {
    switch(action.type) {
        case "FOOD_SELECTED":
            return action.payload;
            break;
        case "MOVIE_SELECTED":
            return action.payload;
            break;
    }
    return state;
}
