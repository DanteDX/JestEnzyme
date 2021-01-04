import React from 'react';
import PropTypes from "prop-types";

const Headline = (props) => {
    return (
        <div>
            <p>Name is {props.name}</p>
            <p>Age is {props.age}</p>
        </div>
    )
}

Headline.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Headline;
