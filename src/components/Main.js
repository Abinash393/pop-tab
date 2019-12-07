import React from 'react'

import Card from './Card'

function Main({repo}) {
    
    return (
        <main className='main'>
            <div className='wrapper'>

            </div>
            {repo.map(v => <Card key={v.name} repo={v}/>)}
        </main>
    )

}

export default Main