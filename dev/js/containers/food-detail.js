import React, {Component} from 'react';
import {connect} from 'react-redux';

class FoodDetail extends Component {

    render() {
        if(!this.props.food) {
            return (
                <h3>click</h3>
            );
        }
        return (
            <div>
                <img src={this.props.food.thumbnail} />
                <h2>{this.props.food.name}</h2>
                <h4>Type: {this.props.food.type}</h4>
                <h4>Description: {this.props.food.description}</h4>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        food: state.activeFood
    }
}

export default connect(mapStateToProps)(FoodDetail);
