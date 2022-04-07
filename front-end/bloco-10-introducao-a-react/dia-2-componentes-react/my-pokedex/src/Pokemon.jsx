import React, { Component } from 'react';

class Pokemon extends Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;
        return (
            <div className="pokemon">
                     
      <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
      </div>
      <img src={ image } alt={ `${name} pokemon` } />
            </div>
        );
    }
}

export default Pokemon;