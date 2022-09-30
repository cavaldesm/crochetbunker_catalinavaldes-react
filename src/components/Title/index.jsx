import React from 'react';
import '../Title/title.css';

export const Title = (props) => {
    console.log(props);
    return (
        <h1>{props.greeting}</h1>
    )
}

export default Title;