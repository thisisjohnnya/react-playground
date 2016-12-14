import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectFood} from '../actions/index';


class FoodList extends Component {

    createListItems() {
        return this.props.food.map((food) => {
            return (
                <li key={food.id} onClick={() => this.props.selectFood(food)}>
                    <h3>{food.name}</h3>
                    <h4>{food.type}</h4>
                </li>
            );
        });
    }

    render() {
        return (
                <ul>
                    {this.createListItems()}
                </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        food: state.food
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectFood: selectFood}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FoodList);
