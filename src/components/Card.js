import React from 'react'

function Card({repo}) {
    
    return (
        <div className='CARD'>
            <p>{repo.author}</p>
            <p>{repo.name}</p>
        </div>
    )

}

export default Card