import React from 'react'

const MovieHolder = ({mName , mPrice}) => {
    return (
        <div>
            <h3>{mName}</h3>
            <h4>{mPrice}</h4>
        </div>
    )
}

export default MovieHolder
