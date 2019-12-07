import React from 'react'

import Card from './Card'

function Main({repo}) {
    
    return (
        <main className='main'>
            <div className='wrapper'>
                <div className="card-container">
                    {repo.map(v => <Card repo={v}/>)}
                </div>
            </div>
        </main>
    )

}

export default Main