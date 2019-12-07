import React from 'react'

function Card({repo}) {
    
    return (
        <div className='card-box'>
            <a className='card-parent' href={repo.url} target='_blank' rel="noopener noreferrer">
                <img src={repo.avatar} alt='avatar' className='avatar'/>
                {/* card details */}
                <div className='card-data-container'>
                    <p className='card-name'>{repo.name}</p>
                    <p className='card-description'>{repo.description}</p>
                        <div className='language-name' style={{color: repo.languageColor}}>
                            {repo.language}
                        </div>
                        <p className='language-stars'>{repo.stars}</p>
                        <p className='language-forks'>{repo.forks}</p>
                </div>

            </a>
        </div>
    )

}

export default Card