import React from 'react';

const Footer = ({length}) => {

    return (

        <footer>
            <h1>You have {length} {length<=1 ? "item" : "items"} left</h1>
        </footer>

    )
}

export default Footer